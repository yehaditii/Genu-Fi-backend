# GenuFi Backend

This is the backend service for **GenuFi**, a decentralized certification platform that issues tamper-proof, soulbound NFTs to verify skill and course completion.

## 🔧 Tech Stack

- **Node.js** with **Express.js**
- **Ethers.js** for blockchain interaction
- **Hardhat** for smart contract compilation and deployment
- **MongoDB** for storing user/session data (optional)
- **dotenv** for managing environment variables
- **Deployed on**: Render

---

## 📁 Project Structure

GenuFi-backend/
├── contracts/ # Solidity smart contracts (e.g. CertNFT.sol)
├── controllers/ # Express route handlers (e.g. mintController.js)
├── routes/ # API routes (e.g. mintRoute.js)
├── scripts/ # Hardhat deployment scripts
├── artifacts/ # Compiled smart contract ABIs (generated)
├── backend/ # Server entry point and env
│ ├── server.js # Main Express server
│ ├── .env.example # Example environment variables
├── hardhat.config.js # Hardhat config for compiling/deploying
└── package.json # Project dependencies and scripts


---

## 🚀 Deployment

### Requirements

- Node.js (v18+)
- Hardhat
- `.env` file with required keys

### Environment Variables (`.env`)

PRIVATE_KEY=your_wallet_private_key
RPC_URL=https://rpc-amoy.polygon.technology
CONTRACT_ADDRESS=your_deployed_contract_address


### Steps

1. **Install dependencies**:
   ```bash
   npm install
2. Compile contracts:

bash
Copy
Edit
npx hardhat compile

3. Deploy contract to Polygon Amoy:

bash
Copy
Edit
npx hardhat run scripts/deploy.js --network amoy

4. Start the server:

bash
Copy
Edit
node backend/server.js

🔗 API Endpoints
Method	Endpoint	Description
POST	/mint	Mints a certificate NFT

🔒 Soulbound NFTs
The backend handles the minting of non-transferable (soulbound) NFTs using the deployed CertNFT smart contract.

Once a learner completes a course or quiz, this API interacts with the blockchain to issue a verifiable certificate NFT to their wallet.

🌐 Live Deployment
Backend URL: https://genu-fi-backend.onrender.com

Frontend Repo: GenuFi Frontend on GitHub

📄 License
MIT © 2025 GenuFi

yaml
Copy
Edit

---
