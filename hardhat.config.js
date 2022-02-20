/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 require("dotenv").config();
 require("@nomiclabs/hardhat-ethers");
 const fs = require('fs');
 const PRIVATE_KE = fs.readFileSync(".env").toString().trim();

 module.exports = {
   defaultNetwork: "rinkeby",
   networks: {
     hardhat: {
     },
     rinkeby: {
       url: process.env.API_URL,
       accounts: [process.env.PRIVATE_KEY]
     }
   },
   solidity: {
     version: "0.8.7",
     settings: {
       optimizer: {
         enabled: true,
         runs: 200
       }
     }
   },
 
   paths: {
     sources: "./contracts",
     tests: "./test",
     cache: "./cache",
     artifacts: "./artifacts"
   },
   mocha: {
     timeout: 40000
   }
 }
 