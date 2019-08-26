// migrating the appropriate contracts
const SquareVerifier = artifacts.require("./Verifier.sol");
const SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");

module.exports = function(deployer) {
  let name = "Capstone";
  let symbol = "CPS";
  deployer.deploy(SquareVerifier)
  .then( () => {  
    return deployer.deploy(SolnSquareVerifier, SquareVerifier.address, name, symbol)
    .then(async () => {

      // Call constructors
      let squareVerifier = await SquareVerifier.new();
      let solnSquareVerifier = await SolnSquareVerifier.new(SquareVerifier.address, name, symbol); 
      //                   fs.writeFileSync(__dirname + '/../src/dapp/config.json',JSON.stringify(config, null, '\t'), 'utf-8');
      //                   fs.writeFileSync(__dirname + '/../src/server/config.json',JSON.stringify(config, null, '\t'), 'utf-8');
    });
  });
}
