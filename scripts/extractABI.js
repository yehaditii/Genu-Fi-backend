// scripts/extractAbi.js

const fs = require("fs");
const path = require("path");

// Load compiled contract
const contractJson = require(path.join(__dirname, "../artifacts/contracts/CertNFT.sol/CertNFT.json"));

// Extract ABI
const output = {
  abi: contractJson.abi
};

// Save to file
fs.writeFileSync(path.join(__dirname, "../backend/ethereum-cert.json"), JSON.stringify(output, null, 2));

console.log("✅ ABI extracted to backend/ethereum-cert.json");
