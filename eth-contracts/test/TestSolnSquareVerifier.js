// Test if a new solution can be added for contract - SolnSquareVerifier

// Test if an ERC721 token can be minted for contract - SolnSquareVerifier
const assert = require("chai").assert;
const truffleAssert = require('truffle-assertions');
var SquareVerifier = artifacts.require("./Verifier.sol");
var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");

contract('TestSolnSquareVerifier', async (accounts) => {
    const account_one = accounts[0];

    describe('A solution can be added', function () {
        it('Minting ERC721 token', async function () { 
            let reverted = true;
            let contractOwner = account_one;
            let name = "capstone";
            let symbol = "CPS";
            let p0 = require("./proof0.json").proof;
            var i0 = require("./proof0.json").inputs;
            let p1 = require("./proof1.json").proof;
            var i1 = require("./proof1.json").inputs;
            let p2 = require("./proof2.json").proof;
            var i2 = require("./proof2.json").inputs;
           let p3 = require("./proof3.json").proof;
           var i3 = require("./proof3.json").inputs;
            let p4 = require("./proof4.json").proof;
            var i4 = require("./proof4.json").inputs; 
            let p5 = require("./proof5.json").proof;
            var i5 = require("./proof5.json").inputs; 
            let p6 = require("./proof6.json").proof;
            var i6 = require("./proof6.json").inputs;
            let p7 = require("./proof7.json").proof;
            var i7 = require("./proof7.json").inputs;
            let p8 = require("./proof8.json").proof;
            var i8 = require("./proof8.json").inputs;
            let p9 = require("./proof9.json").proof;
            var i9 = require("./proof9.json").inputs;
            let squareVerifier = await SquareVerifier.new();

            try 
            {            
                this.contract = await SolnSquareVerifier.new(squareVerifier.address, name, symbol, {from: account_one})

                await this.contract.mintNFT (account_one, 1, p9.a, p9.b, p9.c, i9, {from: account_one}).then (()=> {
                        assert(reverted == true, "A solution could not be added");
                    })
                    .then(async ()=> {
                        await this.contract.mintNFT (account_one, 1, p1.a, p1.b, p1.c, i1, {from: account_one})
                    })
                    .then(async ()=> {
                        await this.contract.mintNFT (account_one, 1, p2.a, p2.b, p2.c, i2, {from: account_one})
                    })
                    .then(async ()=> {
                        await this.contract.mintNFT (account_one, 1, p3.a, p3.b, p3.c, i3, {from: account_one})
                    })
                    .then(async ()=> {
                        await this.contract.mintNFT (account_one, 1, p4.a, p4.b, p4.c, i4, {from: account_one})
                    })
                    .then(async ()=> {
                        await this.contract.mintNFT (account_one, 1, p5.a, p5.b, p5.c, i5, {from: account_one})
                    })
                    .then(async ()=> {
                        await this.contract.mintNFT (account_one, 1, p6.a, p6.b, p6.c, i6, {from: account_one})
                    })
                    .then(async ()=> {
                        await this.contract.mintNFT (account_one, 1, p7.a, p7.b, p7.c, i7, {from: account_one})
                    })
                    .then(async ()=> {
                        await this.contract.mintNFT (account_one, 1, p8.a, p8.b, p8.c, i8, {from: account_one})
                    })
                    .then(async ()=> {
                       await this.contract.mintNFT (account_one, 1, p9.a, p9.b, p9.c, i9, {from: account_one});
                       assert(reverted == true, "A solution could not be added");
                    })

                }
            catch(e) {
                reverted = true;
                return false;
            }
    
        })
    });
})