import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import RoleSelection from "./pages/RoleSelection";
import ManufacturerDashboard from "./pages/ManufacturerDashboard";
import SiteEngineerDashboard from "./pages/SiteEngineerDashboard";
import MaintenanceEngineerDashboard from "./pages/MaintenanceEngineerDashboard";
import PredictiveMaintenanceDashboard from "./pages/PredictiveMaintenanceDashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/roles" element={<RoleSelection />} />
          <Route path="/manufacturer" element={<ManufacturerDashboard />} />
          <Route path="/site-engineer" element={<SiteEngineerDashboard />} />
          <Route path="/maintenance-engineer" element={<MaintenanceEngineerDashboard />} />
          <Route path="/predictive-maintenance" element={<PredictiveMaintenanceDashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
