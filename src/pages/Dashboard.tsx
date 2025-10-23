import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { OptimizationScore } from "@/components/OptimizationScore";
import { StackAnalysisTable } from "@/components/StackAnalysisTable";
import { AIInsights } from "@/components/AIInsights";
import { TrendsChart } from "@/components/TrendsChart";
import { ActionPanel } from "@/components/ActionPanel";
import { FeatureCards } from "@/components/FeatureCards";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuth = localStorage.getItem("isAuthenticated");
    if (!isAuth) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col">
          <Header />
          
          <main className="flex-1 p-4 sm:p-6 space-y-4 sm:space-y-6 overflow-auto">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold font-heading mb-2">
                Software Stack Dashboard
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground">
                AI-powered cost optimization and open-source recommendations
              </p>
            </div>

            {/* Learning Features */}
            <FeatureCards />

            {/* Top row - Score and Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="lg:col-span-2">
                <OptimizationScore />
              </div>
              <div>
                <ActionPanel />
              </div>
            </div>

            {/* Stack Analysis Table */}
            <StackAnalysisTable />

            {/* Bottom row - Insights and Chart */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              <AIInsights />
              <TrendsChart />
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
