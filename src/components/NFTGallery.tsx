import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, Lock, Unlock, DollarSign } from "lucide-react";
import { useState } from "react";

interface NFTItem {
  id: string;
  name: string;
  collection: string;
  encrypted: boolean;
  previewUrl: string;
  estimatedValue: string;
  confidenceLevel: number;
}

const mockNFTs: NFTItem[] = [
  {
    id: "1",
    name: "Crypto Punk #7804",
    collection: "CryptoPunks",
    encrypted: true,
    previewUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=400&fit=crop",
    estimatedValue: "ENCRYPTED",
    confidenceLevel: 95
  },
  {
    id: "2", 
    name: "Bored Ape #8817",
    collection: "BAYC",
    encrypted: true,
    previewUrl: "https://images.unsplash.com/photo-1634017839464-5c339ade8ade?w=400&h=400&fit=crop",
    estimatedValue: "ENCRYPTED",
    confidenceLevel: 88
  },
  {
    id: "3",
    name: "Moonbird #2642",
    collection: "Moonbirds",
    encrypted: false,
    previewUrl: "https://images.unsplash.com/photo-1640161704729-cbe966a08476?w=400&h=400&fit=crop",
    estimatedValue: "$45,000",
    confidenceLevel: 92
  },
  {
    id: "4",
    name: "Azuki #4521",
    collection: "Azuki",
    encrypted: true,
    previewUrl: "https://images.unsplash.com/photo-1635322966219-b75ed372eb01?w=400&h=400&fit=crop",
    estimatedValue: "ENCRYPTED",
    confidenceLevel: 89
  },
  {
    id: "5",
    name: "Art Blocks #156",
    collection: "Art Blocks",
    encrypted: false,
    previewUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=400&fit=crop",
    estimatedValue: "$28,500",
    confidenceLevel: 96
  },
  {
    id: "6",
    name: "CloneX #3847",
    collection: "CloneX",
    encrypted: true,
    previewUrl: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=400&h=400&fit=crop",
    estimatedValue: "ENCRYPTED",
    confidenceLevel: 91
  }
];

const NFTGallery = () => {
  const [viewMode, setViewMode] = useState<'encrypted' | 'preview'>('encrypted');

  return (
    <section id="gallery" className="py-24 bg-gradient-card">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Lock className="w-4 h-4 mr-2" />
            Confidential Gallery
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-gold bg-clip-text text-transparent">
              Encrypted
            </span>{" "}
            NFT Valuations
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            High-value NFT collateral valuations protected by FHE encryption 
            until lending terms are secured.
          </p>

          {/* View Mode Toggle */}
          <div className="flex justify-center">
            <div className="flex items-center space-x-2 bg-card rounded-lg p-1 border border-border">
              <Button
                variant={viewMode === 'encrypted' ? 'vault' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('encrypted')}
                className="flex items-center space-x-2"
              >
                <EyeOff className="w-4 h-4" />
                <span>Encrypted</span>
              </Button>
              <Button
                variant={viewMode === 'preview' ? 'vault' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('preview')}
                className="flex items-center space-x-2"
              >
                <Eye className="w-4 h-4" />
                <span>Preview</span>
              </Button>
            </div>
          </div>
        </div>

        {/* NFT Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockNFTs.map((nft) => (
            <Card key={nft.id} className="group hover:shadow-luxury transition-smooth overflow-hidden bg-gradient-card border-border">
              <div className="relative">
                {/* NFT Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={nft.previewUrl}
                    alt={nft.name}
                    className={`w-full h-64 object-cover transition-smooth ${
                      viewMode === 'encrypted' && nft.encrypted
                        ? 'filter blur-lg animate-encrypted-blur'
                        : 'group-hover:scale-105'
                    }`}
                  />
                  
                  {/* Encryption Overlay */}
                  {viewMode === 'encrypted' && nft.encrypted && (
                    <div className="absolute inset-0 bg-gradient-encrypted flex items-center justify-center">
                      <div className="text-center">
                        <Lock className="w-8 h-8 text-primary mx-auto mb-2 animate-crypto-pulse" />
                        <span className="text-sm font-medium text-muted-foreground">
                          FHE ENCRYPTED
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge 
                      variant={nft.encrypted ? "destructive" : "secondary"}
                      className="flex items-center space-x-1"
                    >
                      {nft.encrypted ? (
                        <Lock className="w-3 h-3" />
                      ) : (
                        <Unlock className="w-3 h-3" />
                      )}
                      <span className="text-xs">
                        {nft.encrypted ? 'ENCRYPTED' : 'REVEALED'}
                      </span>
                    </Badge>
                  </div>
                </div>

                {/* NFT Info */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-bold text-lg text-foreground mb-1">
                        {nft.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {nft.collection}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-1 text-primary mb-1">
                        <DollarSign className="w-4 h-4" />
                        <span className="font-bold">
                          {nft.estimatedValue}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {nft.confidenceLevel}% confidence
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    <Button 
                      variant="crypto" 
                      size="sm" 
                      className="flex-1"
                      disabled={nft.encrypted}
                    >
                      {nft.encrypted ? 'Encrypted' : 'View Details'}
                    </Button>
                    <Button 
                      variant="vault" 
                      size="sm"
                      className="px-4"
                    >
                      <Lock className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="crypto" size="lg">
            Load More NFTs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NFTGallery;