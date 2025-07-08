// controllers/mintController.js
require("dotenv").config();
const { ethers } = require("ethers");
const pinataSDK = require("@pinata/sdk");

const pinata = new pinataSDK(process.env.PINATA_PRIVATE_KEY, process.env.PINATA_SECRET_API_KEY); // ✅ updated key
const CertNFT = require('../../artifacts/contracts/CertNFT.sol/CertNFT.json');

const provider = new ethers.JsonRpcProvider(process.env.ALCHEMY_API_URL);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const contract = new ethers.Contract(process.env.CONTRACT_ADDRESS, CertNFT.abi, wallet);

const mintCertificate = async (req, res) => {
  try {
    const { studentAddress, studentName, courseName } = req.body;

    if (!studentAddress || !studentName || !courseName) {
      return res.status(400).json({ success: false, error: "Missing fields in request" });
    }

    const metadata = {
      name: `Certificate: ${courseName}`,
      description: `Awarded to ${studentName} for completing ${courseName}`,
      image: "ipfs://bafybeifmseec7syex3rhps4gn2lvqn5osktqh6tn4v63yd4yglsb3xso74"
    };

    const pinataRes = await pinata.pinJSONToIPFS(metadata);
    const tokenURI = `ipfs://${pinataRes.IpfsHash}`;

    console.log("Minting to address:", studentAddress);
    console.log("Token URI:", tokenURI);

    const tx = await contract.mint(studentAddress, tokenURI);
    await tx.wait();

    res.json({ success: true, message: "Certificate minted!", txHash: tx.hash });
  } catch (err) {
    console.error("Minting error:", err);
    res.status(500).json({ success: false, error: err.message || "Minting failed" });
  }
};

module.exports = { mintCertificate };
