// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@fhenixjs/contracts/FHE.sol";
import "@fhenixjs/contracts/access/Permission.sol";

/**
 * @title CryptoFrameVault
 * @dev A fully homomorphic encryption (FHE) based vault system for confidential NFT finance
 * @notice This contract enables encrypted storage and operations on sensitive financial data
 */
contract CryptoFrameVault {
    using FHE for euint32;
    using FHE for euint64;
    using FHE for euint256;
    using FHE for ebool;

    // Events
    event VaultCreated(uint256 indexed vaultId, address indexed creator, string name);
    event ContributionMade(uint256 indexed vaultId, address indexed contributor, uint256 amount);
    event WithdrawalMade(uint256 indexed vaultId, address indexed withdrawer, uint256 amount);
    event VaultStatusChanged(uint256 indexed vaultId, bool isActive);

    // Struct for vault information
    struct VaultInfo {
        string name;
        string description;
        euint256 targetAmount; // Encrypted target amount
        euint256 currentAmount; // Encrypted current amount
        address creator;
        ebool isActive; // Encrypted active status
        euint256 contributionCount; // Encrypted contribution count
    }

    // State variables
    uint256 public vaultCount;
    mapping(uint256 => VaultInfo) public vaults;
    mapping(address => uint256[]) public userVaults;
    mapping(uint256 => mapping(address => euint256)) public userContributions;

    // Modifiers
    modifier onlyVaultCreator(uint256 _vaultId) {
        require(vaults[_vaultId].creator == msg.sender, "Only vault creator can perform this action");
        _;
    }

    modifier vaultExists(uint256 _vaultId) {
        require(_vaultId > 0 && _vaultId <= vaultCount, "Vault does not exist");
        _;
    }

    /**
     * @dev Create a new vault with encrypted target amount
     * @param _name Name of the vault
     * @param _description Description of the vault
     * @param _targetAmount Encrypted target amount for the vault
     * @return vaultId The ID of the created vault
     */
    function createVault(
        string memory _name,
        string memory _description,
        euint256 _targetAmount
    ) public returns (uint256) {
        vaultCount++;
        uint256 vaultId = vaultCount;

        vaults[vaultId] = VaultInfo({
            name: _name,
            description: _description,
            targetAmount: _targetAmount,
            currentAmount: FHE.asEuint256(0),
            creator: msg.sender,
            isActive: FHE.asEbool(true),
            contributionCount: FHE.asEuint256(0)
        });

        userVaults[msg.sender].push(vaultId);

        emit VaultCreated(vaultId, msg.sender, _name);
        return vaultId;
    }

    /**
     * @dev Contribute to a vault with encrypted amount
     * @param _vaultId ID of the vault to contribute to
     * @param _amount Encrypted amount to contribute
     */
    function contributeToVault(uint256 _vaultId, euint256 _amount) 
        public 
        payable 
        vaultExists(_vaultId) 
    {
        require(msg.value > 0, "Contribution amount must be greater than 0");
        
        // Update vault current amount (encrypted)
        vaults[_vaultId].currentAmount = vaults[_vaultId].currentAmount + FHE.asEuint256(msg.value);
        
        // Update user contribution (encrypted)
        userContributions[_vaultId][msg.sender] = userContributions[_vaultId][msg.sender] + FHE.asEuint256(msg.value);
        
        // Update contribution count (encrypted)
        vaults[_vaultId].contributionCount = vaults[_vaultId].contributionCount + FHE.asEuint256(1);

        emit ContributionMade(_vaultId, msg.sender, msg.value);
    }

    /**
     * @dev Withdraw from a vault (only creator can withdraw)
     * @param _vaultId ID of the vault to withdraw from
     * @param _amount Amount to withdraw
     */
    function withdrawFromVault(uint256 _vaultId, uint256 _amount) 
        public 
        onlyVaultCreator(_vaultId)
        vaultExists(_vaultId)
    {
        require(_amount > 0, "Withdrawal amount must be greater than 0");
        require(address(this).balance >= _amount, "Insufficient contract balance");

        // Transfer funds to creator
        payable(msg.sender).transfer(_amount);

        // Update vault current amount (encrypted)
        vaults[_vaultId].currentAmount = vaults[_vaultId].currentAmount - FHE.asEuint256(_amount);

        emit WithdrawalMade(_vaultId, msg.sender, _amount);
    }

    /**
     * @dev Get vault information (returns encrypted data)
     * @param _vaultId ID of the vault
     * @return VaultInfo struct with encrypted data
     */
    function getVaultInfo(uint256 _vaultId) 
        public 
        view 
        vaultExists(_vaultId) 
        returns (VaultInfo memory) 
    {
        return vaults[_vaultId];
    }

    /**
     * @dev Check if vault target is reached (encrypted comparison)
     * @param _vaultId ID of the vault
     * @return ebool Encrypted boolean indicating if target is reached
     */
    function isTargetReached(uint256 _vaultId) 
        public 
        view 
        vaultExists(_vaultId) 
        returns (ebool) 
    {
        return vaults[_vaultId].currentAmount >= vaults[_vaultId].targetAmount;
    }

    /**
     * @dev Get user's contribution to a vault (encrypted)
     * @param _vaultId ID of the vault
     * @param _user Address of the user
     * @return euint256 Encrypted contribution amount
     */
    function getUserContribution(uint256 _vaultId, address _user) 
        public 
        view 
        vaultExists(_vaultId) 
        returns (euint256) 
    {
        return userContributions[_vaultId][_user];
    }

    /**
     * @dev Get all vaults created by a user
     * @param _user Address of the user
     * @return uint256[] Array of vault IDs
     */
    function getUserVaults(address _user) public view returns (uint256[] memory) {
        return userVaults[_user];
    }

    /**
     * @dev Get total number of vaults
     * @return uint256 Total vault count
     */
    function getTotalVaults() public view returns (uint256) {
        return vaultCount;
    }

    /**
     * @dev Toggle vault active status (encrypted)
     * @param _vaultId ID of the vault
     */
    function toggleVaultStatus(uint256 _vaultId) 
        public 
        onlyVaultCreator(_vaultId)
        vaultExists(_vaultId)
    {
        vaults[_vaultId].isActive = !vaults[_vaultId].isActive;
        emit VaultStatusChanged(_vaultId, true); // Note: actual status is encrypted
    }

    /**
     * @dev Emergency function to withdraw all funds (only creator)
     * @param _vaultId ID of the vault
     */
    function emergencyWithdraw(uint256 _vaultId) 
        public 
        onlyVaultCreator(_vaultId)
        vaultExists(_vaultId)
    {
        uint256 balance = address(this).balance;
        require(balance > 0, "No funds to withdraw");

        payable(msg.sender).transfer(balance);
        
        // Reset vault current amount
        vaults[_vaultId].currentAmount = FHE.asEuint256(0);
    }

    // Fallback function to receive ETH
    receive() external payable {}
}
