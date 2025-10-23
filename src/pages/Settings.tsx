import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { User, Bell, Shield, Palette, Globe, Save } from "lucide-react";
import { toast } from "sonner";

const Settings = () => {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    weekly: false,
    marketing: false,
  });

  useEffect(() => {
    const isAuth = localStorage.getItem("isAuthenticated");
    if (!isAuth) {
      navigate("/login");
    }
  }, [navigate]);

  const handleSave = () => {
    toast.success("Settings saved successfully!");
  };

  const sections = [
    {
      id: "profile",
      title: "Profile Settings",
      icon: User,
      description: "Manage your personal information",
    },
    {
      id: "notifications",
      title: "Notifications",
      icon: Bell,
      description: "Configure notification preferences",
    },
    {
      id: "security",
      title: "Security & Privacy",
      icon: Shield,
      description: "Manage security settings",
    },
    {
      id: "appearance",
      title: "Appearance",
      icon: Palette,
      description: "Customize your experience",
    },
    {
      id: "preferences",
      title: "Preferences",
      icon: Globe,
      description: "General preferences",
    },
  ];

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col">
          <Header />
          
          <main className="flex-1 p-4 sm:p-6 space-y-4 sm:space-y-6 overflow-auto">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold font-heading mb-2">
                Settings
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground">
                Manage your account settings and preferences
              </p>
            </div>

            {/* Profile Section */}
            <div className="glass-card p-4 sm:p-6 rounded-2xl shadow-card">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <User className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-heading font-semibold">Profile Settings</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">Update your personal information</p>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                  <Avatar className="h-16 w-16 sm:h-20 sm:w-20">
                    <AvatarFallback className="bg-primary text-white text-xl sm:text-2xl font-semibold">
                      AU
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <Button variant="outline" className="rounded-xl border-border/50 mb-2 text-sm w-full sm:w-auto">
                      Change Avatar
                    </Button>
                    <p className="text-xs text-muted-foreground">JPG, GIF or PNG. Max size 2MB</p>
                  </div>
                </div>

                <Separator className="bg-border/50" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input
                      id="fullName"
                      defaultValue="Admin User"
                      className="bg-background/50 border-border/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      defaultValue="admin@opentechpros.com"
                      className="bg-background/50 border-border/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      defaultValue="OpenTechPros Inc."
                      className="bg-background/50 border-border/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="role">Role</Label>
                    <Input
                      id="role"
                      defaultValue="Administrator"
                      className="bg-background/50 border-border/50"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Notifications Section */}
            <div className="glass-card p-4 sm:p-6 rounded-2xl shadow-card">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="p-2 bg-accent/20 rounded-lg">
                  <Bell className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-heading font-semibold">Notification Preferences</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">Choose how you receive notifications</p>
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center justify-between p-3 sm:p-4 bg-secondary/20 rounded-xl border border-border/30">
                  <div>
                    <p className="font-medium mb-1 text-sm sm:text-base">Email Notifications</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Receive updates via email</p>
                  </div>
                  <Switch
                    checked={notifications.email}
                    onCheckedChange={(checked) =>
                      setNotifications({ ...notifications, email: checked })
                    }
                  />
                </div>

                <div className="flex items-center justify-between p-3 sm:p-4 bg-secondary/20 rounded-xl border border-border/30">
                  <div>
                    <p className="font-medium mb-1 text-sm sm:text-base">Push Notifications</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Get real-time updates</p>
                  </div>
                  <Switch
                    checked={notifications.push}
                    onCheckedChange={(checked) =>
                      setNotifications({ ...notifications, push: checked })
                    }
                  />
                </div>

                <div className="flex items-center justify-between p-3 sm:p-4 bg-secondary/20 rounded-xl border border-border/30">
                  <div>
                    <p className="font-medium mb-1 text-sm sm:text-base">Weekly Reports</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Receive weekly summary emails</p>
                  </div>
                  <Switch
                    checked={notifications.weekly}
                    onCheckedChange={(checked) =>
                      setNotifications({ ...notifications, weekly: checked })
                    }
                  />
                </div>

                <div className="flex items-center justify-between p-3 sm:p-4 bg-secondary/20 rounded-xl border border-border/30">
                  <div>
                    <p className="font-medium mb-1 text-sm sm:text-base">Marketing Updates</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">News and product updates</p>
                  </div>
                  <Switch
                    checked={notifications.marketing}
                    onCheckedChange={(checked) =>
                      setNotifications({ ...notifications, marketing: checked })
                    }
                  />
                </div>
              </div>
            </div>

            {/* Security Section */}
            <div className="glass-card p-4 sm:p-6 rounded-2xl shadow-card">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-heading font-semibold">Security & Privacy</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">Manage your security settings</p>
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <Button
                  variant="outline"
                  className="w-full justify-start rounded-xl border-border/50 hover:bg-secondary/50 text-sm"
                >
                  Change Password
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start rounded-xl border-border/50 hover:bg-secondary/50 text-sm"
                >
                  Enable Two-Factor Authentication
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start rounded-xl border-border/50 hover:bg-secondary/50 text-sm"
                >
                  Manage Sessions
                </Button>
              </div>
            </div>

            {/* Save Button */}
            <div className="flex justify-end">
              <Button
                onClick={handleSave}
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl gap-2 px-6 sm:px-8 w-full sm:w-auto text-sm sm:text-base"
              >
                <Save className="h-4 w-4 sm:h-5 sm:w-5" />
                Save Changes
              </Button>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Settings;
