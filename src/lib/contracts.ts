import { sepolia } from 'wagmi/chains';

// Contract addresses (to be updated after deployment)
export const CONTRACT_ADDRESSES = {
  [sepolia.id]: {
    CryptoFrameVault: '0x0000000000000000000000000000000000000000', // Update after deployment
  },
} as const;

// Contract ABIs
export const CRYPTOFRAME_VAULT_ABI = [
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_description",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_targetAmount",
        "type": "uint256"
      }
    ],
    "name": "createVault",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_vaultId",
        "type": "uint256"
      }
    ],
    "name": "contributeToVault",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_vaultId",
        "type": "uint256"
      }
    ],
    "name": "withdrawFromVault",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_vaultId",
        "type": "uint256"
      }
    ],
    "name": "getVaultInfo",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "description",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "targetAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "currentAmount",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "creator",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "isActive",
            "type": "bool"
          }
        ],
        "internalType": "struct CryptoFrameVault.VaultInfo",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
] as const;
