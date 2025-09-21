# 🏦 CryptoFrame Vault

> **Next-Generation Digital Asset Vault Platform**

Transform your digital assets into secure, encrypted vaults with cutting-edge blockchain technology. CryptoFrame Vault revolutionizes how we store, manage, and interact with digital wealth in the Web3 ecosystem.

## ✨ Core Capabilities

- 🎯 **Smart Vault Creation**: Deploy intelligent vaults with customizable parameters
- 🔗 **Multi-Wallet Support**: Seamless integration with leading Web3 wallets
- 🔐 **Encrypted Operations**: Advanced cryptographic protection for sensitive data
- 🖼️ **NFT Portfolio Management**: Comprehensive digital asset gallery
- 💰 **DeFi Integration**: Secure lending and borrowing protocols
- 📊 **Real-Time Analytics**: Live asset valuation and performance tracking

## 🛠️ Technology Stack

| Category | Technology | Purpose |
|----------|------------|---------|
| **Frontend** | React 18 + TypeScript | Modern UI framework |
| **Build Tool** | Vite | Lightning-fast development |
| **Styling** | Tailwind CSS + shadcn/ui | Responsive design system |
| **Web3** | RainbowKit + Wagmi + Viem | Wallet connectivity |
| **Blockchain** | Ethereum Sepolia | Testnet deployment |
| **Smart Contracts** | Solidity 0.8.19 | Secure vault logic |
| **Privacy** | Advanced encryption | Data protection |

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git
- A Web3 wallet (MetaMask, Rainbow, etc.)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/0xStellaHsu/cryptoframe-vault.git
cd cryptoframe-vault
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. Start the development server:
```bash
npm run dev
```

### Environment Variables

Create a `.env` file with the following variables:

```env
# Chain Configuration
NEXT_PUBLIC_CHAIN_ID=11155111
NEXT_PUBLIC_RPC_URL=https://sepolia.infura.io/v3/YOUR_INFURA_KEY

# Wallet Connect Configuration
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=your_project_id

# Infura Configuration
NEXT_PUBLIC_INFURA_API_KEY=your_infura_key
```

## Smart Contract Deployment

### Prerequisites for Deployment

- Hardhat
- Sepolia ETH for gas fees
- Private key for deployment

### Deploy to Sepolia

1. Install Hardhat dependencies:
```bash
npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox @fhenixjs/hardhat-plugin
```

2. Set up your private key in environment variables:
```bash
export PRIVATE_KEY=your_private_key
```

3. Deploy the contract:
```bash
npx hardhat run scripts/deploy.ts --network sepolia
```

4. Update the contract address in your frontend configuration.

## Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── FHEHeader.tsx   # Header with wallet connection
│   └── WalletConnect.tsx
├── lib/                # Utility functions
│   ├── wallet.ts       # Wallet configuration
│   └── contracts.ts    # Contract ABIs and addresses
├── pages/              # Application pages
│   ├── Gallery.tsx     # NFT gallery
│   ├── Valuations.tsx  # Asset valuations
│   └── Lending.tsx     # Lending interface
└── assets/             # Static assets

contracts/
├── CryptoFrameVault.sol # Main vault contract
└── scripts/
    └── deploy.ts        # Deployment script
```

## Security Features

- **Privacy Protection**: Advanced privacy features for sensitive data
- **Secure Operations**: Perform operations with privacy protection
- **Secure Wallet Integration**: Industry-standard wallet connection protocols
- **Audited Smart Contracts**: Contracts follow security best practices

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support and questions, please open an issue on GitHub or contact the development team.

## Roadmap

- [ ] Multi-chain support
- [ ] Advanced privacy operations
- [ ] Mobile wallet integration
- [ ] Enhanced security features
- [ ] Community governance
