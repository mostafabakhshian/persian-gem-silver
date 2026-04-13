import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import PLPRings from "./pages/PLPRings.tsx";
import PLPBracelets from "./pages/PLPBracelets.tsx";
import PLPSilverSets from "./pages/PLPSilverSets.tsx";
import PLPGemstones from "./pages/PLPGemstones.tsx";
import PLPBullion from "./pages/PLPBullion.tsx";
import PDPRing from "./pages/PDPRing.tsx";
import PDPBracelet from "./pages/PDPBracelet.tsx";
import PDPSet from "./pages/PDPSet.tsx";
import PDPGemstone from "./pages/PDPGemstone.tsx";
import PDPBullion from "./pages/PDPBullion.tsx";
import PDPBespoke from "./pages/PDPBespoke.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/rings" element={<PLPRings />} />
          <Route path="/bracelets" element={<PLPBracelets />} />
          <Route path="/silver-sets" element={<PLPSilverSets />} />
          <Route path="/gemstones" element={<PLPGemstones />} />
          <Route path="/bullion" element={<PLPBullion />} />
          <Route path="/product/ring" element={<PDPRing />} />
          <Route path="/product/bracelet" element={<PDPBracelet />} />
          <Route path="/product/set" element={<PDPSet />} />
          <Route path="/product/gemstone" element={<PDPGemstone />} />
          <Route path="/product/bullion" element={<PDPBullion />} />
          <Route path="/bespoke" element={<PDPBespoke />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
