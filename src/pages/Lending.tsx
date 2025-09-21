import FHEHeader from "@/components/FHEHeader";
import DigitalFooter from "@/components/DigitalFooter";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Coins, Database, Clock, Percent, ArrowRight, Key, Users, TrendingUp } from "lucide-react";

const Lending = () => {
  return (
    <div className="min-h-screen bg-background">
      <FHEHeader />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-card">
          <div className="container mx-auto px-6 text-center">
            <Badge variant="secondary" className="mb-4">
              <Coins className="w-4 h-4 mr-2" />
              Confidential Lending
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-gold bg-clip-text text-transparent">
                Secure
              </span>{" "}
              NFT Lending
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Access liquidity using your NFTs as collateral while keeping valuations 
              private through our encrypted lending protocol.
            </p>
            <Button variant="vault" size="lg" className="animate-gold-glow">
              <Database className="w-5 h-5 mr-2" />
              Start Lending Process
            </Button>
          </div>
        </section>

        {/* Lending Stats */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <Card className="p-6 text-center bg-gradient-card border-border">
                <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">$50M+</h3>
                <p className="text-muted-foreground">Total Volume Lent</p>
              </Card>
              
              <Card className="p-6 text-center bg-gradient-card border-border">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">2,500+</h3>
                <p className="text-muted-foreground">Active Borrowers</p>
              </Card>
              
              <Card className="p-6 text-center bg-gradient-card border-border">
                <Percent className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">8.5%</h3>
                <p className="text-muted-foreground">Average APR</p>
              </Card>
              
              <Card className="p-6 text-center bg-gradient-card border-border">
                <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">24/7</h3>
                <p className="text-muted-foreground">Instant Approval</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Lending Process */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-16">
              How Confidential Lending Works
            </h2>
            
            <div className="max-w-4xl mx-auto">
              {/* Step 1 */}
              <div className="flex items-center mb-12">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mr-8 flex-shrink-0">
                  <span className="text-2xl font-bold text-background">1</span>
                </div>
                <Card className="flex-1 p-6 bg-gradient-card border-border">
                  <h3 className="text-xl font-bold mb-3">Submit Collateral</h3>
                  <p className="text-muted-foreground">
                    Connect your wallet and select NFTs to use as collateral. 
                    All asset information is encrypted before submission.
                  </p>
                </Card>
              </div>

              <div className="flex justify-center mb-12">
                <ArrowRight className="w-8 h-8 text-primary animate-pulse" />
              </div>

              {/* Step 2 */}
              <div className="flex items-center mb-12">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mr-8 flex-shrink-0">
                  <span className="text-2xl font-bold text-background">2</span>
                </div>
                <Card className="flex-1 p-6 bg-gradient-card border-border">
                  <h3 className="text-xl font-bold mb-3">Encrypted Valuation</h3>
                  <p className="text-muted-foreground">
                    Our AI performs confidential valuation using FHE. 
                    Your NFT value remains private throughout the process.
                  </p>
                </Card>
              </div>

              <div className="flex justify-center mb-12">
                <ArrowRight className="w-8 h-8 text-primary animate-pulse" />
              </div>

              {/* Step 3 */}
              <div className="flex items-center mb-12">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mr-8 flex-shrink-0">
                  <span className="text-2xl font-bold text-background">3</span>
                </div>
                <Card className="flex-1 p-6 bg-gradient-card border-border">
                  <h3 className="text-xl font-bold mb-3">Instant Approval</h3>
                  <p className="text-muted-foreground">
                    Receive loan terms based on encrypted valuation. 
                    Accept terms and get instant liquidity in your wallet.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Loan Terms */}
        <section className="py-24 bg-gradient-card">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-16">
              Competitive Loan Terms
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-8 bg-background border-border">
                <div className="text-center mb-6">
                  <Badge variant="secondary" className="mb-4">Standard</Badge>
                  <h3 className="text-2xl font-bold mb-2">60% LTV</h3>
                  <p className="text-muted-foreground">Loan-to-Value Ratio</p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-sm">30-90 day terms</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Percent className="w-4 h-4 text-primary" />
                    <span className="text-sm">8-12% APR</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Database className="w-4 h-4 text-primary" />
                    <span className="text-sm">Fully encrypted</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full mt-6">
                  Learn More
                </Button>
              </Card>

              <Card className="p-8 bg-gradient-gold text-background border-primary scale-105">
                <div className="text-center mb-6">
                  <Badge variant="secondary" className="mb-4 bg-background text-foreground">Premium</Badge>
                  <h3 className="text-2xl font-bold mb-2">75% LTV</h3>
                  <p className="text-background/80">High-Value Collections</p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-background" />
                    <span className="text-sm">30-180 day terms</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Percent className="w-4 h-4 text-background" />
                    <span className="text-sm">6-10% APR</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Database className="w-4 h-4 text-background" />
                    <span className="text-sm">Priority processing</span>
                  </li>
                </ul>
                <Button variant="secondary" className="w-full mt-6 bg-background text-primary hover:bg-background/90">
                  Get Started
                </Button>
              </Card>

              <Card className="p-8 bg-background border-border">
                <div className="text-center mb-6">
                  <Badge variant="secondary" className="mb-4">Institutional</Badge>
                  <h3 className="text-2xl font-bold mb-2">85% LTV</h3>
                  <p className="text-muted-foreground">Blue-Chip NFTs</p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-sm">90-365 day terms</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Percent className="w-4 h-4 text-primary" />
                    <span className="text-sm">4-8% APR</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Database className="w-4 h-4 text-primary" />
                    <span className="text-sm">White-glove service</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full mt-6">
                  Contact Sales
                </Button>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <DigitalFooter />
    </div>
  );
};

export default Lending;