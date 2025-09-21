import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Lock, 
  Twitter, 
  Github, 
  MessageCircle,
  Mail,
  Square,
  Circle,
  Triangle,
  Hexagon
} from "lucide-react";

const DigitalFooter = () => {
  // Rotating frame icons
  const frameIcons = [Square, Circle, Triangle, Hexagon];

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative">
                <Shield className="w-8 h-8 text-primary animate-gold-glow" />
                <div className="absolute inset-0 bg-gradient-gold opacity-20 rounded animate-crypto-pulse" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">FHE Finance</h3>
                <p className="text-xs text-muted-foreground">Confidential NFTs</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Secure NFT valuations with fully homomorphic encryption technology.
            </p>
            <Badge variant="secondary" className="text-xs">
              <Lock className="w-3 h-3 mr-1" />
              Enterprise Grade Security
            </Badge>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                  Encrypted Valuations
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                  NFT Collateral
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                  Lending Protocol
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                  API Access
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                  FHE Technology
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                  Security Audit
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                  Whitepaper
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Rotating Frames */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            
            {/* Rotating Digital Frame Icons */}
            <div className="flex space-x-3 mb-6">
              {frameIcons.map((Icon, index) => (
                <div
                  key={index}
                  className="relative w-10 h-10 bg-gradient-card border border-border rounded-lg flex items-center justify-center group cursor-pointer"
                  style={{ animationDelay: `${index * 0.5}s` }}
                >
                  <Icon 
                    className="w-5 h-5 text-crypto-vault animate-rotate-frame group-hover:text-primary transition-smooth" 
                  />
                  <div className="absolute inset-0 bg-gradient-gold opacity-0 group-hover:opacity-20 rounded-lg transition-smooth" />
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex space-x-3 mb-4">
              <Button variant="ghost" size="sm" className="p-2">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <Github className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <MessageCircle className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <Mail className="w-4 h-4" />
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              Join our community of secure NFT traders
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <span>© 2024 FHE Confidential NFT Finance</span>
              <a href="#" className="hover:text-primary transition-smooth">Privacy</a>
              <a href="#" className="hover:text-primary transition-smooth">Terms</a>
              <a href="#" className="hover:text-primary transition-smooth">Security</a>
            </div>
            
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="text-xs">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                All Systems Operational
              </Badge>
              <div className="text-xs text-muted-foreground">
                Encrypted: 15,847 NFTs
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default DigitalFooter;