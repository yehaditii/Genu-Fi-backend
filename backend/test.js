// 📄 backend/test.js

const fetch = require("node-fetch").default;

const recipient = "0x95F072F2fD3d3CAc1B2DF035D6738E52BD93Dd13"; // Change this to recipient wallet address
const metadataURI = "ipfs://bafkreiet3v6ymxee36en7h3d5ygxltzcjjyuxhcltbxbz2jlcolixtt4i4"; // Change to your actual IPFS metadata URI

async function testMint() {
  try {
    const response = await fetch("http://localhost:3000/api/mint", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ recipient, metadataURI }),
    });

    const data = await response.json();
    if (response.ok) {
      console.log("✅ NFT Minted Successfully:", data);
    } else {
      console.error("❌ Minting failed:", data);
    }
  } catch (error) {
    console.error("❌ Minting request failed:", error.message);
  }
}

testMint();
