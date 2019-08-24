# Udacity Blockchain Capstone
The capstone is devoted to build a decentralized housing product. 

## Tasks
### Student completes the boilerplate ERC721 Mintable Contract in ERC721Mintable.sol
### Student writes and passes the test cases in TestERC721Mintable.js

## Setup project for Review.

The smart contract tokens should have a name and a symbol. They can be changed in the StarNotary.sol file.
Currently, the name of the token is **Project 5 Token**, and the symbol is **P5T**.

The versions or the packages installed are:
- Truffle v5.0.7 (core: 5.0.7)
- Solidity v0.5.0 (solc-js)
- Node v10.13.0
- openzeppelin-solidity v2.1.2
- truffle-hdwallet-provider v1.0.2

### Deploy your Contract to Rinkeby

In order to deploy the contract to the Rinkeby Public Network, you need to configure file truffle-config.js (or truffle.js). 
To that end the following steps can be followed:
1. Get the endpoint address from https://infura.io: Create a new project and choose the Rinkeby network from the Endpoints menu. Copy the address and paste the infura key into the truffle.js file. 
2. Uncomment the line: 
```
const HDWalletProvider = require('truffle-hdwallet-provider'); 
```
3. Copy the mnemonic returned by Metamask to constant __mnemonic__. 
4. Insert the following lines into the networks table:
```
rinkeby: {
        provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
          network_id: 4,       // rinkeby's id
          gas: 4500000,        // rinkeby has a lower block limit than mainnet
          gasPrice: 10000000000
        },
```
5. Setup a valid Rinkeby account in Metamask.

## Testing the project
In order to test the project in the local network, run:
```
truffle migrate --reset
truffle test --network develop
```
To execute in the rinkeby network the contract run command:
```
truffle migrate --reset --network rinkeby
```
A web page has been provided, allowing both to create a star and to retrieve the name of the star given its token.
You can access that page at address localhost:8080 after executing __npm run dev__ in the app directory. 

## Project deliverables (TODO)
- Contract Addresses: 
- Contract Abi's:  
- OpenSea MarketPlace Storefront link's:

## Acknowledgments
Thanks for the help in general.

# Project Resources
* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)
