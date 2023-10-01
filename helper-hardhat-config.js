const { ethers } = require("hardhat")

const networkConfig = {
    31415926: {
	name: "localnet",
	tokensToBeMinted: "0x0e9b25255462C0912b2a268b078045002f980Ccd",
    },
    314159: {
        name: "calibrationnet",
        tokensToBeMinted: "0x0e9b25255462C0912b2a268b078045002f980Ccd",
    },
    314: {
        name: "filecoinmainnet",
        tokensToBeMinted: "0x0e9b25255462C0912b2a268b078045002f980Ccd",
    },
}

// const developmentChains = ["hardhat", "localhost"]

module.exports = {
    networkConfig,
    // developmentChains,
}
