import FHEHeader from "@/components/FHEHeader";
import DigitalFooter from "@/components/DigitalFooter";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Database, TrendingUp, Calculator, Key, CheckCircle } from "lucide-react";

const Valuations = () => {
  return (
    <div className="min-h-screen bg-background">
      <FHEHeader />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-card">
          <div className="container mx-auto px-6 text-center">
            <Badge variant="secondary" className="mb-4">
              <Calculator className="w-4 h-4 mr-2" />
              AI-Powered Valuations
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-gold bg-clip-text text-transparent">
                Encrypted
              </span>{" "}
              NFT Valuations
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Get accurate, confidential NFT valuations protected by Fully Homomorphic Encryption. 
              Market data remains private until you decide to proceed with lending.
            </p>
            <Button variant="vault" size="lg" className="animate-gold-glow">
              <Database className="w-5 h-5 mr-2" />
              Request Valuation
            </Button>
          </div>
        </section>

        {/* Valuation Process */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-16">
              Confidential Valuation Process
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <Card className="p-8 text-center bg-gradient-card border-border">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <Key className="w-8 h-8 text-background" />
                </div>
                <h3 className="text-xl font-bold mb-4">Submit NFT</h3>
                <p className="text-muted-foreground">
                  Connect your wallet and submit your NFT for confidential valuation. 
                  All data is encrypted before processing.
                </p>
              </Card>

              {/* Step 2 */}
              <Card className="p-8 text-center bg-gradient-card border-border">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-background" />
                </div>
                <h3 className="text-xl font-bold mb-4">AI Analysis</h3>
                <p className="text-muted-foreground">
                  Our AI analyzes market trends, rarity, and historical data 
                  while keeping all information encrypted.
                </p>
              </Card>

              {/* Step 3 */}
              <Card className="p-8 text-center bg-gradient-card border-border">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-background" />
                </div>
                <h3 className="text-xl font-bold mb-4">Encrypted Result</h3>
                <p className="text-muted-foreground">
                  Receive your confidential valuation report. 
                  Data remains encrypted until you proceed to lending.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-24 bg-gradient-card">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-16">
              Valuation Features
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 bg-gradient-gold bg-clip-text text-transparent">
                  Advanced AI Analysis
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Real-time market data analysis</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Rarity and trait evaluation</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Historical price trends</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Collection floor price analysis</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6 bg-gradient-gold bg-clip-text text-transparent">
                  Privacy Protection
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <Database className="w-5 h-5 text-primary" />
                    <span>Fully Homomorphic Encryption</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Database className="w-5 h-5 text-primary" />
                    <span>Zero-knowledge proofs</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Database className="w-5 h-5 text-primary" />
                    <span>Confidential computing</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Database className="w-5 h-5 text-primary" />
                    <span>Data sovereignty guarantee</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <DigitalFooter />
    </div>
  );
};

export default Valuations;