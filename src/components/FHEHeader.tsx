import { Button } from "@/components/ui/button";
import { Wallet, Shield, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { WalletConnect } from "./WalletConnect";
import fheLogo from "@/assets/fhe-logo.jpg";

const FHEHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center space-x-4 hover:opacity-80 transition-smooth">
            <div className="relative">
              <img 
                src={fheLogo} 
                alt="FHE Logo" 
                className="w-12 h-12 rounded-lg shadow-gold animate-gold-glow"
              />
              <div className="absolute inset-0 bg-gradient-gold opacity-20 rounded-lg animate-crypto-pulse" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-gold bg-clip-text text-transparent">
                FHE Confidential NFT Finance
              </h1>
              <p className="text-sm text-muted-foreground">Encrypted Valuations</p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/gallery" className="text-foreground hover:text-primary transition-smooth">
              Gallery
            </Link>
            <Link to="/valuations" className="text-foreground hover:text-primary transition-smooth">
              Valuations
            </Link>
            <Link to="/lending" className="text-foreground hover:text-primary transition-smooth">
              Lending
            </Link>
          </nav>

          {/* Wallet Connection */}
          <div className="flex items-center space-x-4">
            <Button variant="crypto" size="sm" className="hidden sm:flex">
              <Shield className="w-4 h-4 mr-2" />
              Secure Mode
            </Button>
            <WalletConnect />
          </div>
        </div>
      </div>
    </header>
  );
};

export default FHEHeader;