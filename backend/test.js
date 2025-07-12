const fetch = require("node-fetch").default;

async function testMint() {
  try {
    const response = await fetch("http://localhost:5000/api/mint", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        studentAddress: "0x95F072F2fD3d3CAc1B2DF035D6738E52BD93Dd13",
        studentName: "Aditi Jha",
        courseName: "Blockchain Essentials"
      }),
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
