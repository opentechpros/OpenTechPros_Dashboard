import { Search, Bell, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    toast.success("Logged out successfully");
    navigate("/login");
  };

  return (
    <header className="glass-card border-b border-border/50 sticky top-0 z-50">
      <div className="flex items-center justify-between px-3 sm:px-4 md:px-6 py-3 sm:py-3.5 md:py-4">
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
          <SidebarTrigger className="text-foreground" />
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search tools, reports..."
              className="pl-10 w-60 lg:w-80 bg-background/50 border-border/50 focus:border-primary transition-colors text-sm"
            />
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="relative hover:bg-secondary/50 rounded-lg sm:rounded-xl h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10"
          >
            <Bell className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 h-1.5 w-1.5 sm:h-2 sm:w-2 bg-primary rounded-full" />
          </Button>
          
          <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg sm:rounded-xl bg-secondary/30 border border-border/50">
            <User className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
            <span className="text-xs sm:text-sm font-medium hidden sm:inline">Admin User</span>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={handleLogout}
            className="hover:bg-destructive/20 hover:text-destructive rounded-lg sm:rounded-xl h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10"
          >
            <LogOut className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
