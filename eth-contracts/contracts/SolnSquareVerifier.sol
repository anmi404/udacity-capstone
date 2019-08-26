pragma solidity >=0.4.21 <0.6.0;

/*  define a contract call to the zokrates generated solidity contract <Verifier>. 

    - Create an instance of the Verifier contract inside the SolnSquareVerifier contract
    - outside of the SolnSquareVerifier contract create a contract interface for 
    the Verifier contract to be able to call its functions
*/

import './ERC721Mintable.sol';

// TODO define a contract call to the zokrates generated solidity contract Verifier.sol
// TODO define another contract named SolnSquareVerifier that inherits ERC721Mintable
// If I want to sell a house, I have to demonstrate it's mine. 

contract SolnSquareVerifier is CustomERC721Token {
    using SafeMath for uint256;

    //SquareVerifier squareVerifier;

    struct solutions {
        uint256 index;
        address addr;
        bytes32 sols;
    }

    solutions[] arraySolutions;

    mapping(bytes32 => bool) private uniqueSolutions;

    event newSolutionAdded (bytes32 solution);

    SquareVerifier squareVerifier;

    constructor(address verifierAddress, string memory name, string memory symbol) CustomERC721Token(name, symbol) public 
    {
        //Verifier(verifierAddress);
            squareVerifier = SquareVerifier(verifierAddress); //instance of Verifier contract
    }

    //Create a function to add the solutions to the array and emit the event
    function addSolution(bytes32 solution) internal returns (bool) {
        uniqueSolutions[solution] = true;
        emit newSolutionAdded (solution);
        return true;
    }

// mint new NFT only after the solution has been verified
//  - make sure the solution is unique (has not been used before)
//  - make sure you handle metadata as well as tokenSuply
    function mintNFT (address to, uint256 tokenId, uint[2] memory a,uint[2][2] memory b, uint[2] memory c,uint[2] memory input) public returns (bool) {
        bytes32 _solution = keccak256(abi.encodePacked(a,b, c,input));
        solutions memory s;
            s.index =  arraySolutions.length + 1;
            s.addr = msg.sender;
            s.sols = _solution;
        arraySolutions.push(s);
        require(uniqueSolutions[_solution]!=true, "Solution already exists"); 
        require (squareVerifier.verifyTx(a, b, c, input)==true, "verification failed");
        addSolution(_solution);
        _mint(to, tokenId);
        return true;
    }
}

contract SquareVerifier {
    function verifyTx(uint[2] memory a,uint[2][2] memory b, uint[2] memory c,uint[2] memory input) public returns (bool r);
    //verifier.at(verifierAddress).verifyTx(5, [25, 1]);
}

// * TODO define a solutions struct that can hold an index & an address
// * TODO define an array of the above struct
// * TODO define a mapping to store unique solutions submitted
// * TODO Create an event to emit when a solution is added
// * TODO Create a function to add the solutions to the array and emit the event
// * Guarantee making sure each verification is unique within itself and ''
// TODO Create a function to mint new NFT only after the solution has been verified
//  - make sure the solution is unique (has not been used before)
//  - make sure you handle metadata as well as tokenSuply
