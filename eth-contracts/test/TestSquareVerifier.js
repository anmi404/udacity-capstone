// define a variable to import the <Verifier> or <renamedVerifier> solidity contract generated by Zokrates
// Test verification with correct proof
// - use the contents from proof.json generated from zokrates steps
// Test verification with incorrect proof

//let importer = 
   
// const assert = require("chai").assert;
// const truffleAssert = require('truffle-assertions');

//var ERC721MintableComplete = artifacts.require('CustomERC721Token'); 

/*verifyTx.
Victor monitors the verification smart contract for the Verified event, 
which is emitted upon successful verification of a transaction. 
As soon as he observes the event triggered by a transaction from 
Peggy's public address, he can be sure that Peggy has a valid pre-image for the hash he set in the smart contract.
*/
//contract('TestSquareVerifier', accounts => {

    // const account_one = accounts[0];
    // const account_two = accounts[1];
    // //"input":["b","result"]

    // var p = require("./proof.json").proof;
    // var i = require("./proof.json").input;

    //verifier.verifyTx(p.A, p.A_p, p.B, p.B_p, p.C, p.C_p, p.H, p.K, i);


    // describe('match erc721 spec', function () {
    //     beforeEach(async function () { 
    //         this.contract = await ERC721MintableComplete.new({from: account_one});
    //         this.contract.mintWithTokenURI(account_one, this.tokenId);
    //       //  this.contract.mintWithTokenURI(account_one, this.tokenId,  "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/");

    //         console.log("token id", this.tokenId);
    //         // TODO: mint multiple tokens
    //     })

    //     it('verifies correctly', async function () { 
    //         uint256 number = this.contract.totalSupply.call(); 

    //        // assert.equal(  ,"Verification incorrect: returning false when true" ); 
    //     })

    //     it('verifies incorrect values', async function () { 
    //         uint256 balance = this.contract.balance.call();

    //      //   assert.equal(, "Verification incorrect: returning true when false"); 
    //     })
    //     // it('can request flight status', async () => {
    //     //     // ARRANGE
    //     //     let flight = 'ND1309'; // Course number
    //     //     let timestamp = Math.floor(Date.now() / 1000);

    //     //     // Submit a request for oracles to get status information for a flight
    //     //     let myreceipt = await config.flightSuretyApp.fetchFlightStatus(config.firstAirline, flight, timestamp);

    //     //     // ACT emit OracleRequest(index, airline, flight, timestamp)
    //     //     truffleAssert.eventEmitted(myreceipt, 'OracleRequest', (ev) => {
    //     //     console.log(ev.index, ev.airline, ev.flight, ev.timestamp);
    //     //     return true;
    //     //     });
    // });
//})
