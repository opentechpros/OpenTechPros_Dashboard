import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  BarChart3,
  Settings,
  Users,
  BookOpen,
  MessageSquare,
  FileText,
  Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  { name: "Learning Center", href: "/learning", icon: BookOpen },
  { name: "Discussion Forum", href: "/forum", icon: MessageSquare },
  { name: "Assignments", href: "/assignments", icon: FileText },
  { name: "Team", href: "/team", icon: Users },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <aside
      className={`glass-card border-r border-border/50 transition-all duration-300 ${
        isCollapsed ? "w-14 sm:w-16 md:w-20" : "w-56 sm:w-60 md:w-64"
      } min-h-screen`}
    >
      <div className="p-3 sm:p-4 md:p-6">
        <div className="flex items-center justify-between mb-6 sm:mb-8">
         <a href="https://opentechpros.com/" target="_blank" rel="noopener noreferrer">
              <img
                src="/logo.png" // replace with your logo path
                alt="OpenTechPros Logo"
                className="mx-auto mb-4 w-40 h-auto object-contain"
              />
            </a>
        </div>

        <nav className="space-y-1 sm:space-y-2">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                `flex items-center gap-2 sm:gap-3 px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl transition-all group ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-lg glow-primary"
                    : "hover:bg-secondary/50 text-muted-foreground hover:text-foreground"
                }`
              }
            >
              <item.icon className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              {!isCollapsed && (
                <span className="font-medium text-xs sm:text-sm">{item.name}</span>
              )}
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  );
}
