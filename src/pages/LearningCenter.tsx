import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Play, Clock, BookOpen, Award, Video } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const LearningCenter = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuth = localStorage.getItem("isAuthenticated");
    if (!isAuth) {
      navigate("/login");
    }
  }, [navigate]);

  const courses = [
    {
      title: "Introduction to Open Source Software",
      instructor: "Dr. Sarah Johnson",
      duration: "2h 30m",
      lessons: 12,
      progress: 75,
      thumbnail: "bg-gradient-to-br from-primary to-accent",
    },
    {
      title: "Migrating from Commercial to Open Source",
      instructor: "Prof. Michael Chen",
      duration: "3h 15m",
      lessons: 18,
      progress: 45,
      thumbnail: "bg-gradient-to-br from-accent to-primary",
    },
    {
      title: "Advanced Cost Optimization Strategies",
      instructor: "Dr. Emily Rodriguez",
      duration: "4h 00m",
      lessons: 24,
      progress: 20,
      thumbnail: "bg-gradient-to-br from-primary/80 to-accent/80",
    },
    {
      title: "Open Source Security Best Practices",
      instructor: "Prof. David Kim",
      duration: "2h 45m",
      lessons: 15,
      progress: 0,
      thumbnail: "bg-gradient-to-br from-accent/80 to-primary/80",
    },
  ];

  const liveClasses = [
    {
      title: "Live Q&A: Salesforce to SuiteCRM Migration",
      instructor: "Sarah Johnson",
      time: "Tomorrow, 2:00 PM EST",
      participants: 234,
    },
    {
      title: "Workshop: Setting Up Self-Hosted Mattermost",
      instructor: "Michael Chen",
      time: "Friday, 10:00 AM EST",
      participants: 156,
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
                Learning Center
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground">
                Master open source alternatives with expert-led courses
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
              <div className="glass-card p-4 sm:p-6 rounded-2xl shadow-card">
                <div className="p-2 bg-primary/20 rounded-lg w-fit mb-2 sm:mb-3">
                  <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-heading mb-1">24</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">Courses Enrolled</p>
              </div>
              <div className="glass-card p-4 sm:p-6 rounded-2xl shadow-card">
                <div className="p-2 bg-accent/20 rounded-lg w-fit mb-2 sm:mb-3">
                  <Video className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-heading mb-1">156</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">Hours Watched</p>
              </div>
              <div className="glass-card p-4 sm:p-6 rounded-2xl shadow-card">
                <div className="p-2 bg-primary/20 rounded-lg w-fit mb-2 sm:mb-3">
                  <Award className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-heading mb-1">12</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">Certificates Earned</p>
              </div>
              <div className="glass-card p-4 sm:p-6 rounded-2xl shadow-card">
                <div className="p-2 bg-accent/20 rounded-lg w-fit mb-2 sm:mb-3">
                  <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-heading mb-1">8.5h</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">This Week</p>
              </div>
            </div>

            {/* Live Classes */}
            <div className="glass-card p-4 sm:p-6 rounded-2xl shadow-card">
              <div className="flex items-center gap-2 mb-4 sm:mb-6">
                <div className="p-2 bg-destructive/20 rounded-lg">
                  <Video className="h-4 w-4 sm:h-5 sm:w-5 text-destructive" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-heading font-semibold">Upcoming Live Classes</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">Join interactive sessions</p>
                </div>
              </div>
              <div className="space-y-3 sm:space-y-4">
                {liveClasses.map((liveClass, index) => (
                  <div key={index} className="p-3 sm:p-4 bg-secondary/20 rounded-xl border border-border/30 hover:border-primary/50 transition-all">
                    <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                      <div className="flex-1 w-full">
                        <h4 className="font-heading font-semibold mb-2 text-sm sm:text-base">{liveClass.title}</h4>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                          <span>👨‍🏫 {liveClass.instructor}</span>
                          <span>🕐 {liveClass.time}</span>
                          <span className="hidden sm:inline">👥 {liveClass.participants} registered</span>
                        </div>
                      </div>
                      <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl w-full sm:w-auto text-sm">
                        Register
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Courses */}
            <div>
              <h3 className="text-lg sm:text-xl font-heading font-semibold mb-3 sm:mb-4">My Courses</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {courses.map((course, index) => (
                  <div key={index} className="glass-card rounded-2xl shadow-card overflow-hidden hover:shadow-elevated transition-all group">
                    <div className={`h-32 sm:h-40 ${course.thumbnail} flex items-center justify-center`}>
                      <Button size="lg" className="bg-background/20 backdrop-blur-md hover:bg-background/30 text-white rounded-full text-sm sm:text-base">
                        <Play className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
                        Continue
                      </Button>
                    </div>
                    <div className="p-4 sm:p-6">
                      <h4 className="font-heading font-semibold text-base sm:text-lg mb-2 group-hover:text-primary transition-colors">
                        {course.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">by {course.instructor}</p>
                      
                      <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                          {course.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <BookOpen className="h-3 w-3 sm:h-4 sm:w-4" />
                          {course.lessons} lessons
                        </span>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Progress</span>
                          <span className="font-semibold text-accent">{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default LearningCenter;
