import { Button } from "@/components/ui/button";
import { FileDown, RefreshCw, Cloud } from "lucide-react";
import { toast } from "sonner";

export function ActionPanel() {
  const handleGenerateReport = () => {
    toast.success("Generating new optimization report...");
  };

  const handleDownload = () => {
    toast.success("Downloading report as PDF...");
  };

  const handleSync = () => {
    toast.success("Syncing company data...");
  };

  return (
    <div className="glass-card p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl shadow-card">
      <div className="mb-4 sm:mb-5 md:mb-6">
        <h3 className="text-base sm:text-lg font-heading font-semibold mb-1">Quick Actions</h3>
        <p className="text-xs sm:text-sm text-muted-foreground">Manage your optimization reports</p>
      </div>

      <div className="grid gap-2 sm:gap-3">
        <Button
          onClick={handleGenerateReport}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground justify-start gap-2 sm:gap-3 h-10 sm:h-11 md:h-12 rounded-lg sm:rounded-xl transition-all hover:glow-primary text-xs sm:text-sm"
        >
          <RefreshCw className="h-4 w-4 sm:h-5 sm:w-5" />
          <span className="font-medium">Generate New Report</span>
        </Button>

        <Button
          onClick={handleDownload}
          variant="outline"
          className="w-full justify-start gap-2 sm:gap-3 h-10 sm:h-11 md:h-12 rounded-lg sm:rounded-xl border-border/50 hover:bg-secondary/50 hover:border-primary/50 text-xs sm:text-sm"
        >
          <FileDown className="h-4 w-4 sm:h-5 sm:w-5" />
          <span className="font-medium">Download Report</span>
        </Button>

        <Button
          onClick={handleSync}
          variant="outline"
          className="w-full justify-start gap-2 sm:gap-3 h-10 sm:h-11 md:h-12 rounded-lg sm:rounded-xl border-border/50 hover:bg-secondary/50 hover:border-primary/50 text-xs sm:text-sm"
        >
          <Cloud className="h-4 w-4 sm:h-5 sm:w-5" />
          <span className="font-medium">Sync Company Data</span>
        </Button>
      </div>
    </div>
  );
}
