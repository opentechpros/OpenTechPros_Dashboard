import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, Clock, AlertCircle, FileText, Calendar } from "lucide-react";

const Assignments = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuth = localStorage.getItem("isAuthenticated");
    if (!isAuth) {
      navigate("/login");
    }
  }, [navigate]);

  const assignments = [
    {
      title: "Migration Planning Document",
      course: "Migrating from Commercial to Open Source",
      dueDate: "Dec 25, 2025",
      status: "pending",
      type: "Document",
      points: 100,
      submitted: false,
    },
    {
      title: "Cost Analysis Quiz",
      course: "Advanced Cost Optimization Strategies",
      dueDate: "Dec 28, 2025",
      status: "pending",
      type: "Quiz",
      points: 50,
      submitted: false,
    },
    {
      title: "Security Assessment Report",
      course: "Open Source Security Best Practices",
      dueDate: "Dec 20, 2025",
      status: "completed",
      type: "Report",
      points: 100,
      score: 95,
      submitted: true,
    },
    {
      title: "Introduction Quiz",
      course: "Introduction to Open Source Software",
      dueDate: "Dec 15, 2025",
      status: "completed",
      type: "Quiz",
      points: 50,
      score: 48,
      submitted: true,
    },
    {
      title: "PostgreSQL Setup Lab",
      course: "Advanced Cost Optimization Strategies",
      dueDate: "Dec 22, 2025",
      status: "overdue",
      type: "Lab",
      points: 75,
      submitted: false,
    },
  ];

  const stats = [
    { label: "Completed", value: 2, icon: CheckCircle2, color: "text-accent" },
    { label: "Pending", value: 2, icon: Clock, color: "text-primary" },
    { label: "Overdue", value: 1, icon: AlertCircle, color: "text-destructive" },
  ];

  const getStatusBadge = (status: string) => {
    const configs = {
      completed: { variant: "secondary" as const, className: "bg-accent/20 text-accent border-accent/30" },
      pending: { variant: "secondary" as const, className: "bg-primary/20 text-primary border-primary/30" },
      overdue: { variant: "secondary" as const, className: "bg-destructive/20 text-destructive border-destructive/30" },
    };
    return configs[status as keyof typeof configs] || configs.pending;
  };

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col">
          <Header />
          
          <main className="flex-1 p-4 sm:p-6 space-y-4 sm:space-y-6 overflow-auto">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold font-heading mb-2">
                Assignments & Quizzes
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground">
                Track and manage your course assignments
              </p>
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
                    <div className={`p-2 sm:p-3 bg-secondary/30 rounded-xl ${stat.color}`}>
                      <stat.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Overall Progress */}
            <div className="glass-card p-4 sm:p-6 rounded-2xl shadow-card">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div>
                  <h3 className="text-base sm:text-lg font-heading font-semibold mb-1">Overall Progress</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">40% of assignments completed</p>
                </div>
                <span className="text-xl sm:text-2xl font-bold font-heading text-accent">2/5</span>
              </div>
              <Progress value={40} className="h-2 sm:h-3" />
            </div>

            {/* Assignments List */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-lg sm:text-xl font-heading font-semibold">All Assignments</h3>
              {assignments.map((assignment, index) => (
                <div
                  key={index}
                  className="glass-card p-4 sm:p-6 rounded-2xl shadow-card hover:shadow-elevated transition-all group"
                >
                  <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="flex-1 w-full">
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                        <h4 className="text-base sm:text-lg font-heading font-semibold group-hover:text-primary transition-colors">
                          {assignment.title}
                        </h4>
                        <Badge {...getStatusBadge(assignment.status)} className="text-xs">
                          {assignment.status.charAt(0).toUpperCase() + assignment.status.slice(1)}
                        </Badge>
                      </div>
                      <p className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3">{assignment.course}</p>
                      
                      <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs sm:text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <FileText className="h-3 w-3 sm:h-4 sm:w-4" />
                          {assignment.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                          Due: {assignment.dueDate}
                        </span>
                        <span>🎯 {assignment.points} pts</span>
                        {assignment.submitted && assignment.score !== undefined && (
                          <span className="text-accent font-semibold">
                            Score: {assignment.score}/{assignment.points}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-2 w-full sm:w-auto">
                      {!assignment.submitted ? (
                        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl text-sm w-full sm:w-auto">
                          Start Assignment
                        </Button>
                      ) : (
                        <Button variant="outline" className="rounded-xl border-border/50 text-sm w-full sm:w-auto">
                          View Submission
                        </Button>
                      )}
                    </div>
                  </div>
                  
                  {assignment.submitted && assignment.score !== undefined && (
                    <div className="pt-4 border-t border-border/30">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-muted-foreground">Performance</span>
                        <span className="text-sm font-semibold text-accent">
                          {((assignment.score / assignment.points) * 100).toFixed(0)}%
                        </span>
                      </div>
                      <Progress value={(assignment.score / assignment.points) * 100} className="h-2" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Assignments;
