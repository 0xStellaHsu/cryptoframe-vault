import { useState } from 'react';
import { useAccount, useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Key, Database, CheckCircle, AlertCircle } from 'lucide-react';
import { CONTRACT_ADDRESSES, CRYPTOFRAME_VAULT_ABI } from '@/lib/contracts';
import { sepolia } from 'wagmi/chains';

interface EncryptedData {
  name: string;
  description: string;
  encryptedData: string;
  hash: string;
}

export function EncryptedDataUpload() {
  const { address, isConnected } = useAccount();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    data: ''
  });
  const [encryptedData, setEncryptedData] = useState<EncryptedData | null>(null);
  const [isEncrypting, setIsEncrypting] = useState(false);

  const { writeContract, data: hash, isPending, error } = useWriteContract();
  
  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  });

  // Simple encryption function (in production, use proper encryption)
  const encryptData = async (data: string): Promise<EncryptedData> => {
    // Simulate encryption process
    const encrypted = btoa(data); // Base64 encoding as simple encryption
    const hash = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(data));
    const hashHex = Array.from(new Uint8Array(hash))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('');
    
    return {
      name: formData.name,
      description: formData.description,
      encryptedData: encrypted,
      hash: hashHex
    };
  };

  const handleEncrypt = async () => {
    if (!formData.data.trim()) return;
    
    setIsEncrypting(true);
    try {
      const encrypted = await encryptData(formData.data);
      setEncryptedData(encrypted);
    } catch (error) {
      console.error('Encryption failed:', error);
    } finally {
      setIsEncrypting(false);
    }
  };

  const handleUploadToChain = async () => {
    if (!encryptedData || !isConnected) return;

    try {
      // First create a vault
      const vaultResult = await writeContract({
        address: CONTRACT_ADDRESSES[sepolia.id].CryptoFrameVault,
        abi: CRYPTOFRAME_VAULT_ABI,
        functionName: 'createVault',
        args: [
          encryptedData.name,
          encryptedData.description,
          BigInt(1000000) // Target amount for demo
        ],
      });

      // After vault creation, store encrypted data
      // Note: In a real implementation, you'd wait for the vault creation transaction
      // and get the vault ID from the event logs
      const vaultId = 1; // For demo purposes, assuming vault ID 1
      
      await writeContract({
        address: CONTRACT_ADDRESSES[sepolia.id].CryptoFrameVault,
        abi: CRYPTOFRAME_VAULT_ABI,
        functionName: 'storeEncryptedData',
        args: [
          BigInt(vaultId),
          encryptedData.encryptedData,
          `0x${encryptedData.hash}` as `0x${string}`
        ],
      });
    } catch (error) {
      console.error('Contract call failed:', error);
    }
  };

  if (!isConnected) {
    return (
      <Card className="p-6">
        <div className="text-center">
          <AlertCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">Wallet Not Connected</h3>
          <p className="text-muted-foreground">
            Please connect your wallet to upload encrypted data to the blockchain.
          </p>
        </div>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Key className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-semibold">Encrypt & Upload Data</h3>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Data Name</label>
            <Input
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              placeholder="Enter data name"
            />
          </div>
          
          <div>
            <label className="text-sm font-medium mb-2 block">Description</label>
            <Input
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              placeholder="Enter description"
            />
          </div>
          
          <div>
            <label className="text-sm font-medium mb-2 block">Sensitive Data</label>
            <Textarea
              value={formData.data}
              onChange={(e) => setFormData(prev => ({ ...prev, data: e.target.value }))}
              placeholder="Enter sensitive data to encrypt"
              rows={4}
            />
          </div>
          
          <Button 
            onClick={handleEncrypt}
            disabled={!formData.data.trim() || isEncrypting}
            className="w-full"
          >
            <Database className="w-4 h-4 mr-2" />
            {isEncrypting ? 'Encrypting...' : 'Encrypt Data'}
          </Button>
        </div>
      </Card>

      {encryptedData && (
        <Card className="p-6">
          <div className="flex items-center space-x-2 mb-4">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <h3 className="text-lg font-semibold">Encrypted Data Ready</h3>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Encrypted Data</label>
              <div className="p-3 bg-muted rounded-md font-mono text-sm break-all">
                {encryptedData.encryptedData}
              </div>
            </div>
            
            <div>
              <label className="text-sm font-medium mb-2 block">Data Hash</label>
              <div className="p-3 bg-muted rounded-md font-mono text-sm break-all">
                {encryptedData.hash}
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Badge variant="secondary">
                <Key className="w-3 h-3 mr-1" />
                Encrypted
              </Badge>
              <Badge variant="outline">
                <Database className="w-3 h-3 mr-1" />
                Ready for Upload
              </Badge>
            </div>
            
            <Button 
              onClick={handleUploadToChain}
              disabled={isPending || isConfirming}
              className="w-full"
              variant="vault"
            >
              {isPending ? 'Uploading...' : isConfirming ? 'Confirming...' : 'Upload to Blockchain'}
            </Button>
            
            {error && (
              <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-md">
                <p className="text-sm text-destructive">
                  Error: {error.message}
                </p>
              </div>
            )}
            
            {isConfirmed && (
              <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-md">
                <p className="text-sm text-green-600">
                  ✅ Data successfully uploaded to blockchain!
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Transaction Hash: {hash}
                </p>
              </div>
            )}
          </div>
        </Card>
      )}
    </div>
  );
}
