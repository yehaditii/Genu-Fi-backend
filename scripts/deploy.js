require("dotenv").config();
const hre = require("hardhat");

async function main() {
  const CertNFT = await hre.ethers.getContractFactory("CertNFT");
  const certNFT = await CertNFT.deploy();
  await certNFT.waitForDeployment();

  const address = await certNFT.getAddress();
  console.log("✅ Contract deployed to:", address);
}

main().catch((error) => {
  console.error("❌ Deployment error:", error);
  process.exit(1);
});
