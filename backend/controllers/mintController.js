// 📄 backend/controllers/mintController.js

const { exec } = require("child_process");
const path = require("path");

module.exports = async (req, res) => {
  const { recipient, metadataURI } = req.body;

  if (!recipient || !metadataURI) {
    return res.status(400).json({ error: "Wallet address and metadataURI required" });
  }

  const scriptPath = path.resolve(__dirname, "../../scripts/mintNFT.js");

  const command = `npx cross-env MINT_RECIPIENT=${recipient} MINT_METADATA_URI=${metadataURI} npx hardhat run ${scriptPath} --network amoy`;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error("❌ Script Error:", error.message);
      return res.status(500).json({ error: "Minting failed", details: error.message });
    }
    if (stderr) {
      console.error("❌ STDERR:", stderr);
    }

    console.log("✅ Output:", stdout);
    return res.status(200).json({ success: true, message: "NFT Minted!", output: stdout });
  });
};
