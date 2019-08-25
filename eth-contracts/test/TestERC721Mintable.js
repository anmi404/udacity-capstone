
const assert = require("chai").assert;
const truffleAssert = require('truffle-assertions');
const tokenSupply = 1;
const tokenBalance = tokenSupply; 

var ERC721MintableComplete = artifacts.require('CustomERC721Token'); 
//ERC721MintableComplete

contract('TestERC721Mintable', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];

    describe('match erc721 spec', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new({from: account_one});
            this.contract.mintWithTokenURI(account_one, this.tokenId,  "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/");
            console.log("token id", this.tokenId);
            // TODO: mint multiple tokens
        })

        it('should return total supply', async function () { 
            uint256 supply = this.contract.totalSupply.call(); //tokens supplied
            assert.equal(supply, tokenSupply); 
        })

        it('should get token balance', async function () { 
            uint256 balance = this.contract.balance.call();
            assert.equal(balance, tokenBalance); 
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () { 
            let uri = await this.contract.tokenURI.call(this.tokenId);
            assert.equal( uri,'https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1');
        })

        it('should transfer token from one owner to another', async function () { 
            let reverted = false;
            let contractOwner = account_one;
            try 
            {
                await this.contract.transferOwnership(account_two, {from: account_one});
                contractOwner = await this.contract.owner.call();
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
            this.contract = await ERC721MintableComplete.new({from: account_one});
        })

        it('should fail when minting when address is not contract owner', async function () { 
            let reverted = false;
            try 
            {
                await this.contract.mintWithTokenURI( to,  tokenId, tokenURI, { from: account_two}); 
            }
            catch(e) {
                reverted = true;
            }
            assert(reverted == false , "Should fail when minting when address is not contract owner");


        })

        it('should return contract owner', async function () { 
            address contractOwner = await this.contract.owner.call();
            assert(contractOwner, account_one, "should return contract owner");
        })

    });
})