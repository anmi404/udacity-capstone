pragma solidity >=0.4.21 <0.6.0;

/*  define a contract call to the zokrates generated solidity contract <Verifier>. 

    Create an instance of the Verifier contract inside the SolnSquareVerifier contract
    And outside of the SolnSquareVerifier contract create a contract interface for the Verifier contract to be able to call its functions
*/

import './ERC721Mintable.sol';

// TODO define a contract call to the zokrates generated solidity contract Verifier.sol
// TODO define another contract named SolnSquareVerifier that inherits ERC721Mintable
// If I want to sell a house, I have to demonstrate it's mine. 

contract SolnSquareVerifier is CustomERC721Token {

    constructor(address verifierAddress, string memory name, string memory symbol) CustomERC721Token(name, symbol) public 
    {
        //Verifier(verifierAddress);
    }
}

contract Verifier {
       // verifier.at(verifierAddress).verifyTx(5, [25, 1]);
}

// TODO define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>



// TODO define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class



// TODO define a solutions struct that can hold an index & an address


// TODO define an array of the above struct

// TODO define a mapping to store unique solutions submitted

// TODO Create an event to emit when a solution is added

// TODO Create a function to add the solutions to the array and emit the event

// Guarantee making sure each verification is unique within itself and ''

// TODO Create a function to mint new NFT only after the solution has been verified
//  - make sure the solution is unique (has not been used before)
//  - make sure you handle metadata as well as tokenSuplly




