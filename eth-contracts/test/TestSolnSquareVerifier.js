// Test if a new solution can be added for contract - SolnSquareVerifier

// Test if an ERC721 token can be minted for contract - SolnSquareVerifier
const assert = require("chai").assert;
const truffleAssert = require('truffle-assertions');
var SquareVerifier = artifacts.require("./SquareVerifier.sol");
var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");

contract('TestSolnSquareVerifier', async (accounts) => {
    var squareVerifier = await SquareVerifier.new();
    var solnSquareVerifier = await SolnSquareVerifier.new(SquareVerifier.address, name, symbol); 

    const account_one = accounts[0];
    const account_two = accounts[1];

    describe('A solution can be added', function () {
        beforeEach(async function () { 
            // let name = "capstone";
            // let symbol = "CPS";
             this.contract = await SolnSquareVerifier.new(SquareVerifier.address, name, symbol, {from: account_one});
             this.contract.mintWithTokenURI(account_one, 1,  {from: account_one});
        })

        it('a new solution can be added', async function () { 
            
            assert.equal(symbol, "CPS", "A new solution could not be added"); 
        })

        it('Minting ERC721 token', async function () { 
            
            assert.equal(name, "zz", "An ERC721 token could not be minted"); 
        })
    
    });
});