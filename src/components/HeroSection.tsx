import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Lock, Shield, Zap, ArrowRight } from "lucide-react";
import heroImage from "@/assets/nft-gallery-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="NFT Gallery" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-gradient-encrypted" />
      </div>

      {/* Cryptographic Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 gap-4 h-full w-full animate-crypto-pulse">
          {Array.from({ length: 144 }).map((_, i) => (
            <div 
              key={i} 
              className="border border-crypto-grid rounded-sm"
              style={{ animationDelay: `${i * 0.05}s` }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Status Badge */}
          <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm">
            <Lock className="w-4 h-4 mr-2" />
            Fully Homomorphic Encryption Enabled
          </Badge>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-gold bg-clip-text text-transparent">
              Confidential
            </span>
            <br />
            <span className="text-foreground">NFT Valuations</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Prevent market manipulation with encrypted high-value NFT collateral 
            valuations until lending terms are finalized.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center space-x-2 bg-card/50 backdrop-blur-sm rounded-full px-4 py-2 border border-border">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm">End-to-End Encryption</span>
            </div>
            <div className="flex items-center space-x-2 bg-card/50 backdrop-blur-sm rounded-full px-4 py-2 border border-border">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm">Instant Valuations</span>
            </div>
            <div className="flex items-center space-x-2 bg-card/50 backdrop-blur-sm rounded-full px-4 py-2 border border-border">
              <Lock className="w-4 h-4 text-primary" />
              <span className="text-sm">Zero Knowledge Proofs</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Button variant="vault" size="lg" className="text-lg px-8 py-4">
              Submit NFT Collateral
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="crypto" size="lg" className="text-lg px-8 py-4">
              View Encrypted Gallery
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">$2.3B+</div>
              <div className="text-sm text-muted-foreground">Secured Volume</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">15,000+</div>
              <div className="text-sm text-muted-foreground">NFTs Valued</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;