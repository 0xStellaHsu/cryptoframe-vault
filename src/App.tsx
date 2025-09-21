import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WagmiProvider } from 'wagmi';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { config, chains } from './lib/wallet';
import FHEHeader from "./components/FHEHeader";
import HeroSection from "./components/HeroSection";
import DigitalFooter from "./components/DigitalFooter";
import Gallery from "./pages/Gallery";
import Valuations from "./pages/Valuations";
import Lending from "./pages/Lending";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <WagmiProvider config={config}>
    <QueryClientProvider client={queryClient}>
      <RainbowKitProvider chains={chains}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={
                <div className="min-h-screen bg-background">
                  <FHEHeader />
                  <main>
                    <HeroSection />
                  </main>
                  <DigitalFooter />
                </div>
              } />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/valuations" element={<Valuations />} />
              <Route path="/lending" element={<Lending />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </RainbowKitProvider>
    </QueryClientProvider>
  </WagmiProvider>
);

export default App;
