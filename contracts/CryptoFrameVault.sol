// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

/**
 * @title CryptoFrameVault
 * @dev A secure vault system for NFT finance with privacy features
 * @notice This contract enables secure storage and operations on financial data
 */
contract CryptoFrameVault {
    // Events
    event VaultCreated(uint256 indexed vaultId, address indexed creator, string name);
    event ContributionMade(uint256 indexed vaultId, address indexed contributor, uint256 amount);
    event WithdrawalMade(uint256 indexed vaultId, address indexed withdrawer, uint256 amount);
    event VaultStatusChanged(uint256 indexed vaultId, bool isActive);

    // Struct for vault information
    struct VaultInfo {
        string name;
        string description;
        uint256 targetAmount;
        uint256 currentAmount;
        address creator;
        bool isActive;
        uint256 contributionCount;
    }

    // State variables
    uint256 public vaultCount;
    mapping(uint256 => VaultInfo) public vaults;
    mapping(address => uint256[]) public userVaults;
    mapping(uint256 => mapping(address => uint256)) public userContributions;

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
     * @dev Create a new vault
     * @param _name Name of the vault
     * @param _description Description of the vault
     * @param _targetAmount Target amount for the vault
     * @return vaultId The ID of the created vault
     */
    function createVault(
        string memory _name,
        string memory _description,
        uint256 _targetAmount
    ) public returns (uint256) {
        vaultCount++;
        uint256 vaultId = vaultCount;

        vaults[vaultId] = VaultInfo({
            name: _name,
            description: _description,
            targetAmount: _targetAmount,
            currentAmount: 0,
            creator: msg.sender,
            isActive: true,
            contributionCount: 0
        });

        userVaults[msg.sender].push(vaultId);

        emit VaultCreated(vaultId, msg.sender, _name);
        return vaultId;
    }

    /**
     * @dev Contribute to a vault
     * @param _vaultId ID of the vault to contribute to
     */
    function contributeToVault(uint256 _vaultId) 
        public 
        payable 
        vaultExists(_vaultId) 
    {
        require(msg.value > 0, "Contribution amount must be greater than 0");
        require(vaults[_vaultId].isActive, "Vault is not active");
        
        // Update vault current amount
        vaults[_vaultId].currentAmount += msg.value;
        
        // Update user contribution
        userContributions[_vaultId][msg.sender] += msg.value;
        
        // Update contribution count
        vaults[_vaultId].contributionCount += 1;

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
        require(vaults[_vaultId].currentAmount >= _amount, "Insufficient vault balance");

        // Transfer funds to creator
        payable(msg.sender).transfer(_amount);

        // Update vault current amount
        vaults[_vaultId].currentAmount -= _amount;

        emit WithdrawalMade(_vaultId, msg.sender, _amount);
    }

    /**
     * @dev Get vault information
     * @param _vaultId ID of the vault
     * @return VaultInfo struct
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
     * @dev Check if vault target is reached
     * @param _vaultId ID of the vault
     * @return bool indicating if target is reached
     */
    function isTargetReached(uint256 _vaultId) 
        public 
        view 
        vaultExists(_vaultId) 
        returns (bool) 
    {
        return vaults[_vaultId].currentAmount >= vaults[_vaultId].targetAmount;
    }

    /**
     * @dev Get user's contribution to a vault
     * @param _vaultId ID of the vault
     * @param _user Address of the user
     * @return uint256 contribution amount
     */
    function getUserContribution(uint256 _vaultId, address _user) 
        public 
        view 
        vaultExists(_vaultId) 
        returns (uint256) 
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
     * @dev Toggle vault active status
     * @param _vaultId ID of the vault
     */
    function toggleVaultStatus(uint256 _vaultId) 
        public 
        onlyVaultCreator(_vaultId)
        vaultExists(_vaultId)
    {
        vaults[_vaultId].isActive = !vaults[_vaultId].isActive;
        emit VaultStatusChanged(_vaultId, vaults[_vaultId].isActive);
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
        vaults[_vaultId].currentAmount = 0;
    }

    // Fallback function to receive ETH
    receive() external payable {}
}