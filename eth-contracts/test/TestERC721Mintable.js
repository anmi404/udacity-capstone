
const assert = require("chai").assert;
const truffleAssert = require('truffle-assertions');

var ERC721MintableComplete = artifacts.require('CustomERC721Token'); 

contract('TestERC721Mintable', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];

    describe('match erc721 spec', function () {
        beforeEach(async function () { 
            let name = "capstone";
            let symbol = "CPS";
            this.contract = await ERC721MintableComplete.new(name, symbol, {from: account_one});
//            this.contract.mintWithTokenURI(account_one, this.tokenId,  "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/");
            this.contract.mintWithTokenURI(account_one, 1,  {from: account_one});
            // TODO: mint multiple tokens
        })

         it('should return total supply', async function () { 
             let supply = await this.contract.totalSupply.call(); //tokens supplied
             assert.equal(supply, 1, 'should return total supply'); 
         })

        it('should get token balance', async function () { 
            let balance = await this.contract.balanceOf.call(account_one);
            assert.equal(balance, 1, 'should get token balance'); 
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () { 
            let uri = await this.contract.tokenURI.call(1);
            assert.equal( uri, 'https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1');
        })

        it('should transfer token from one owner to another', async function () { 
            let reverted = false;
            let contractOwner = account_one;
            try 
            {
                await this.contract.transferOwnership(account_two, {from: account_one}).then(async ()=> {
                        contractOwner = await this.contract.owner.call();
                    }
                )
            }
            catch(e) {
                reverted = true;
            }
            assert(reverted == false && contractOwner == account_two, "Token should transfer from one owner to another");
            //capture event
            //event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);
        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () { 
            let name = "capstone";
            let symbol = "CPS";
            this.contract = await ERC721MintableComplete.new(name, symbol, {from: account_one});
        })

        it('should fail when minting when address is not contract owner', async function () { 
            let reverted = false;
            try 
            {
                this.contract.mintWithTokenURI(account_two, 1,  {from: account_one});
            }
            catch(e) {
                reverted = true;
            }
            assert(reverted == false , "Should fail when minting when address is not contract owner");


        })

        it('should return contract owner', async function () { 
            let contractOwner = await this.contract.owner.call();
            assert(contractOwner, account_one, "should return contract owner");
        })

    });
})