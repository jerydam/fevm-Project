require("hardhat-deploy")
require("hardhat-deploy-ethers")

const { networkConfig } = require("../helper-hardhat-config")


const private_key = network.config.accounts[0]
const wallet = new ethers.Wallet(private_key, ethers.provider)

module.exports = async ({ deployments }) => {
    const { deploy } = deployments;
    console.log("Wallet Ethereum Address:", wallet.address)
    const chainId = network.config.chainId
    const tokensToBeMinted = networkConfig[chainId]["tokensToBeMinted"]

    
    //deploy Simplecoin
    const simpleCoin = await deploy("TicketFactory", {
        from: wallet.address,
        args: [tokensToBeMinted],
        log: true,
        gasLimit: 5000000,
    });

    //deploy FilecoinMarketConsumer
    const filecoinMarketConsumer = await deploy("FilecoinMarketConsumer", {
        from: wallet.address,
        args: [],
        log: true,
    });

    //deploy DealRewarder
    const dealRewarder = await deploy("DealRewarder", {
        from: wallet.address,
        args: [],
        log: true,
    });
    
    //deploy DealClient
    const dealClient = await deploy("DealClient", {
        from: wallet.address,
        args: [],
        log: true,
    });
}


///////////// My Script /////////////
// const { ethers } = require("ethers");

// async function main() {
//   const [deployer] = await ethers.getSigners();

//   console.log("Deploying contracts with the account:", deployer.address);

//   // Replace 'Token' with the actual contract name you are deploying
//   const contractFactory = await ethers.getContractFactory("TicketFactory");

//   // Replace 'addressToAdd' with the address you want to pass to the constructor
//   const addressToAdd = "0x0e9b25255462C0912b2a268b078045002f980Ccd"; // Replace with the actual address

//   // Deploy the contract with the address as an argument
//   const token = await contractFactory.deploy(addressToAdd);

//   await token.deployed();

//   console.log("Token address:", token.address);
// }

// main()
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error(error);
//     process.exit(1);
//   });
