import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Mail, Phone, MapPin, Plus, Users, UserPlus, Shield } from "lucide-react";

const Team = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuth = localStorage.getItem("isAuthenticated");
    if (!isAuth) {
      navigate("/login");
    }
  }, [navigate]);

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Lead Architect",
      email: "sarah.j@opentechpros.com",
      phone: "+1 (555) 123-4567",
      location: "San Francisco, CA",
      status: "online",
      initials: "SJ",
      color: "bg-primary",
    },
    {
      name: "Michael Chen",
      role: "DevOps Engineer",
      email: "michael.c@opentechpros.com",
      phone: "+1 (555) 234-5678",
      location: "Seattle, WA",
      status: "online",
      initials: "MC",
      color: "bg-accent",
    },
    {
      name: "Emily Rodriguez",
      role: "Security Analyst",
      email: "emily.r@opentechpros.com",
      phone: "+1 (555) 345-6789",
      location: "Austin, TX",
      status: "away",
      initials: "ER",
      color: "bg-primary/70",
    },
    {
      name: "David Kim",
      role: "Full Stack Developer",
      email: "david.k@opentechpros.com",
      phone: "+1 (555) 456-7890",
      location: "New York, NY",
      status: "online",
      initials: "DK",
      color: "bg-accent/70",
    },
    {
      name: "Alex Chen",
      role: "UI/UX Designer",
      email: "alex.c@opentechpros.com",
      phone: "+1 (555) 567-8901",
      location: "Los Angeles, CA",
      status: "offline",
      initials: "AC",
      color: "bg-primary/50",
    },
    {
      name: "Maria Garcia",
      role: "Product Manager",
      email: "maria.g@opentechpros.com",
      phone: "+1 (555) 678-9012",
      location: "Chicago, IL",
      status: "online",
      initials: "MG",
      color: "bg-accent/50",
    },
  ];

  const stats = [
    { label: "Total Members", value: "6", icon: Users },
    { label: "Active Now", value: "4", icon: UserPlus },
    { label: "Admins", value: "2", icon: Shield },
  ];

  const getStatusColor = (status: string) => {
    const colors = {
      online: "bg-accent",
      away: "bg-yellow-500",
      offline: "bg-muted-foreground",
    };
    return colors[status as keyof typeof colors] || colors.offline;
  };

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col">
          <Header />
          
          <main className="flex-1 p-4 sm:p-6 space-y-4 sm:space-y-6 overflow-auto">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold font-heading mb-2">
                  Team Members
                </h1>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Manage your organization's team
                </p>
              </div>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl gap-2 w-full sm:w-auto">
                <Plus className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="text-sm sm:text-base">Invite Member</span>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="glass-card p-4 sm:p-6 rounded-2xl shadow-card">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs sm:text-sm text-muted-foreground mb-1">{stat.label}</p>
                      <h3 className="text-2xl sm:text-3xl font-bold font-heading">{stat.value}</h3>
                    </div>
                    <div className="p-2 sm:p-3 bg-primary/20 rounded-xl">
                      <stat.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Team Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="glass-card p-4 sm:p-6 rounded-2xl shadow-card hover:shadow-elevated transition-all group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="relative">
                      <Avatar className="h-16 w-16">
                        <AvatarFallback className={`${member.color} text-white text-lg font-semibold`}>
                          {member.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div className={`absolute bottom-0 right-0 w-4 h-4 ${getStatusColor(member.status)} rounded-full border-2 border-card`} />
                    </div>
                    <Badge variant="secondary" className="bg-secondary/50 text-secondary-foreground border-border/30">
                      {member.status}
                    </Badge>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-lg font-heading font-semibold mb-1 group-hover:text-primary transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Mail className="h-4 w-4" />
                      <span className="truncate">{member.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Phone className="h-4 w-4" />
                      <span>{member.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{member.location}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 rounded-xl border-border/50 hover:bg-secondary/50"
                    >
                      Message
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 rounded-xl border-border/50 hover:bg-secondary/50"
                    >
                      View Profile
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Team;
