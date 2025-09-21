import { ethers } from "hardhat";

async function main() {
  console.log("Deploying CryptoFrameVault contract...");

  const CryptoFrameVault = await ethers.getContractFactory("CryptoFrameVault");
  const cryptoFrameVault = await CryptoFrameVault.deploy();

  await cryptoFrameVault.waitForDeployment();

  const address = await cryptoFrameVault.getAddress();
  console.log(`CryptoFrameVault deployed to: ${address}`);

  // Save deployment info
  const deploymentInfo = {
    contractName: "CryptoFrameVault",
    address: address,
    network: "sepolia",
    timestamp: new Date().toISOString(),
  };

  console.log("Deployment completed successfully!");
  console.log("Contract Address:", address);
  console.log("Network: Sepolia Testnet");
  console.log("Please update the contract address in your frontend configuration.");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
