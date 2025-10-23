import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, ThumbsUp, TrendingUp, Search, Plus } from "lucide-react";

const Forum = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuth = localStorage.getItem("isAuthenticated");
    if (!isAuth) {
      navigate("/login");
    }
  }, [navigate]);

  const [searchQuery, setSearchQuery] = useState("");

  const discussions = [
    {
      title: "Best practices for migrating from Slack to Mattermost?",
      author: "Alex Chen",
      category: "Migration",
      replies: 24,
      likes: 56,
      views: 342,
      timestamp: "2 hours ago",
      tags: ["Mattermost", "Slack", "Communication"],
      trending: true,
    },
    {
      title: "SuiteCRM vs Odoo - Which one should I choose?",
      author: "Maria Garcia",
      category: "Comparison",
      replies: 18,
      likes: 43,
      views: 289,
      timestamp: "5 hours ago",
      tags: ["SuiteCRM", "Odoo", "CRM"],
      trending: true,
    },
    {
      title: "How to set up PostgreSQL for production?",
      author: "John Smith",
      category: "Technical",
      replies: 31,
      likes: 78,
      views: 521,
      timestamp: "1 day ago",
      tags: ["PostgreSQL", "Database", "DevOps"],
      trending: false,
    },
    {
      title: "Success story: Saved $50k switching to open source",
      author: "Sarah Johnson",
      category: "Success Story",
      replies: 45,
      likes: 124,
      views: 892,
      timestamp: "2 days ago",
      tags: ["Case Study", "Cost Savings"],
      trending: true,
    },
    {
      title: "Plane vs Jira - Feature comparison",
      author: "David Kim",
      category: "Comparison",
      replies: 12,
      likes: 34,
      views: 234,
      timestamp: "3 days ago",
      tags: ["Plane", "Jira", "Project Management"],
      trending: false,
    },
  ];

  const categories = [
    { name: "Migration", count: 156, color: "bg-primary" },
    { name: "Technical", count: 234, color: "bg-accent" },
    { name: "Comparison", count: 89, color: "bg-primary/70" },
    { name: "Success Story", count: 67, color: "bg-accent/70" },
  ];

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
                  Discussion Forum
                </h1>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Connect with the community and share knowledge
                </p>
              </div>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl gap-2 w-full sm:w-auto">
                <Plus className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="text-sm sm:text-base">New Discussion</span>
              </Button>
            </div>

            {/* Search and Categories */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="lg:col-span-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search discussions..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 bg-background/50 border-border/50 focus:border-primary transition-colors text-sm sm:text-base"
                  />
                </div>
              </div>
              <div className="glass-card p-4 rounded-2xl shadow-card">
                <h3 className="font-heading font-semibold mb-3 text-sm sm:text-base">Categories</h3>
                <div className="space-y-2">
                  {categories.map((cat, index) => (
                    <div key={index} className="flex items-center justify-between text-xs sm:text-sm">
                      <span className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${cat.color}`} />
                        {cat.name}
                      </span>
                      <span className="text-muted-foreground">{cat.count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Discussions */}
            <div className="space-y-3 sm:space-y-4">
              {discussions.map((discussion, index) => (
                <div
                  key={index}
                  className="glass-card p-4 sm:p-6 rounded-2xl shadow-card hover:shadow-elevated transition-all group cursor-pointer"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="p-2 sm:p-3 bg-primary/20 rounded-xl group-hover:bg-primary/30 transition-colors flex-shrink-0">
                      <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-3">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start gap-2 mb-2 flex-wrap">
                            <h3 className="text-base sm:text-lg font-heading font-semibold group-hover:text-primary transition-colors">
                              {discussion.title}
                            </h3>
                            {discussion.trending && (
                              <Badge className="bg-accent/20 text-accent border-accent/30 gap-1 text-xs flex-shrink-0">
                                <TrendingUp className="h-3 w-3" />
                                <span className="hidden sm:inline">Trending</span>
                              </Badge>
                            )}
                          </div>
                          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground mb-3">
                            <span>by {discussion.author}</span>
                            <span className="hidden sm:inline">•</span>
                            <span>{discussion.timestamp}</span>
                            <Badge variant="secondary" className="bg-secondary/50 text-secondary-foreground border-border/30 text-xs">
                              {discussion.category}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                            {discussion.tags.map((tag, tagIndex) => (
                              <Badge
                                key={tagIndex}
                                variant="outline"
                                className="text-xs border-primary/30 text-primary"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 sm:gap-6 text-xs sm:text-sm text-muted-foreground flex-wrap">
                        <span className="flex items-center gap-1">
                          <MessageSquare className="h-3 w-3 sm:h-4 sm:w-4" />
                          {discussion.replies}
                        </span>
                        <span className="flex items-center gap-1">
                          <ThumbsUp className="h-3 w-3 sm:h-4 sm:w-4" />
                          {discussion.likes}
                        </span>
                        <span className="hidden sm:inline">👁️ {discussion.views} views</span>
                      </div>
                    </div>
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

export default Forum;
