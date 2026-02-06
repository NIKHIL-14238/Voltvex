# AptosVerse - Blockchain Gaming Platform

## 📌 Overview
AptosVerse is a blockchain-integrated gaming platform built on **Aptos**. The platform includes:
- **On-Chain Player Progress Tracking**
- **Mission System for On-Chain Quests**
- **PvP Coding Battles (Gas Optimization & Debugging Challenges)**
- **NFT Rewards (Badges & Achievements)**
- **On-Chain Economy with APT Coins & Marketplace**

This repository contains the **Move smart contracts** and **TypeScript SDK integration** to interact with Aptos blockchain.

## 🚀 Features
- **Immutable Player Profiles** (XP, achievements, completed quests)
- **Smart contract-driven quests** with on-chain validation
- **PvP challenges rewarding gas-efficient Move code**
- **NFT-based achievements using Aptos Token Standards**
- **In-game APT Coin economy & marketplace**
- **Petra, Martian Wallet Integration for Transactions**

---

## 🛠 Installation & Setup

### **1️⃣ Prerequisites**
- **Node.js & npm** (Latest LTS)
- **Aptos CLI** ([Install Guide](https://aptos.dev/cli-tools/aptos-cli/install-cli))
- **Git**

### **2️⃣ Clone the Repository**
```bash
 git clone https://github.com/YOUR_USERNAME/AptosVerse.git
 cd AptosVerse
```

### **3️⃣ Install Dependencies**
```bash
npm install
```

### **4️⃣ Setup TypeScript & Aptos SDK**
```bash
npm init -y
npm install -D typescript @types/node ts-node
npx tsc --init
npm install @aptos-labs/ts-sdk
```

---

## 📜 Move Smart Contracts

### **Deploy Move Contracts**
```bash
aptos move compile --named-addresses named_account=default
aptos move publish --named-addresses named_account=default
```

### **Smart Contracts Included**
- `game.move` → Core game mechanics (missions, quests, achievements)
- `player_progress.move` → Player XP, achievements tracking
- `marketplace.move` → In-game APT Coin transactions
- `nft_rewards.move` → NFT-based rewards for achievements

---

## 🔌 Blockchain Integration

### **1️⃣ Generate a New Aptos Account**
```bash
aptos init
```

### **2️⃣ Check Account Balance**
```bash
aptos account balance --account default
```

### **3️⃣ Run the TypeScript Scripts**
```bash
npx ts-node src/index.ts
```

---

## 👨‍💻 Contributors
- **[Your Name]** - Aptos Blockchain Development

---

## 📜 License
This project is licensed under the MIT License. See `LICENSE` for details.

---

## 📢 Support & Community
Join the **Aptos Developer Community**: [Discord](https://discord.gg/aptos)

