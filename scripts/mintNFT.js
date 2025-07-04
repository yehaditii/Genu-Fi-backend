const hre = require("hardhat");
require("dotenv").config();

async function main() {
  const recipient = process.env.MINT_RECIPIENT;
  const metadataURI = process.env.MINT_METADATA_URI;

  if (!recipient || !metadataURI) {
    console.error("❌ Missing recipient or metadata URI in env");
    process.exit(1);
  }

  const contractAddress = process.env.CONTRACT_ADDRESS;
  if (!contractAddress) {
    console.error("❌ CONTRACT_ADDRESS not found in .env file");
    process.exit(1);
  }

  const CertNFT = await hre.ethers.getContractFactory("CertNFT");
  const certNFT = await CertNFT.attach(contractAddress);

  const tx = await certNFT.issueCertificate(recipient, metadataURI);
  await tx.wait();

  console.log(`✅ NFT minted successfully to ${recipient}`);
}

main().catch((error) => {
  console.error("❌ Error in minting script:", error);
  process.exit(1);
});
