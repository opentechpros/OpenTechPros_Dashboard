import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { TrendsChart } from "@/components/TrendsChart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { TrendingUp, TrendingDown, DollarSign, Package } from "lucide-react";

const Analytics = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuth = localStorage.getItem("isAuthenticated");
    if (!isAuth) {
      navigate("/login");
    }
  }, [navigate]);

  const categoryData = [
    { name: "CRM", value: 2400, color: "hsl(280, 43%, 55%)" },
    { name: "Communication", value: 800, color: "hsl(290, 45%, 65%)" },
    { name: "Project Mgmt", value: 1200, color: "hsl(280, 60%, 45%)" },
    { name: "Design", value: 600, color: "hsl(290, 60%, 55%)" },
    { name: "Database", value: 500, color: "hsl(280, 50%, 50%)" },
  ];

  const savingsData = [
    { category: "CRM", potential: 2040 },
    { category: "Communication", potential: 800 },
    { category: "Project Mgmt", potential: 1140 },
    { category: "Design", potential: 600 },
    { category: "Database", potential: 450 },
  ];

  const stats = [
    {
      title: "Total Monthly Cost",
      value: "$5,500",
      change: "+2.5%",
      trend: "up",
      icon: DollarSign,
    },
    {
      title: "Potential Savings",
      value: "$5,030",
      change: "+23%",
      trend: "down",
      icon: TrendingDown,
    },
    {
      title: "Tools Analyzed",
      value: "28",
      change: "+4",
      trend: "up",
      icon: Package,
    },
    {
      title: "Optimization Rate",
      value: "78%",
      change: "+12%",
      trend: "up",
      icon: TrendingUp,
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
                Analytics Dashboard
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground">
                Detailed insights into your software stack and optimization opportunities
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="glass-card p-4 sm:p-6 rounded-2xl shadow-card">
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 bg-primary/20 rounded-lg">
                      <stat.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    </div>
                    <span className={`text-xs sm:text-sm font-medium ${stat.trend === 'up' ? 'text-accent' : 'text-destructive'}`}>
                      {stat.change}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading mb-1">{stat.value}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">{stat.title}</p>
                </div>
              ))}
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              <div className="glass-card p-4 sm:p-6 rounded-2xl shadow-card">
                <div className="mb-4 sm:mb-6">
                  <h3 className="text-base sm:text-lg font-heading font-semibold mb-1">Cost by Category</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">Monthly spending distribution</p>
                </div>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={categoryData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px',
                        backdropFilter: 'blur(12px)',
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="glass-card p-4 sm:p-6 rounded-2xl shadow-card">
                <div className="mb-4 sm:mb-6">
                  <h3 className="text-base sm:text-lg font-heading font-semibold mb-1">Potential Savings</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">By category (monthly)</p>
                </div>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={savingsData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
                    <XAxis 
                      dataKey="category" 
                      stroke="hsl(var(--muted-foreground))"
                      style={{ fontSize: '12px' }}
                    />
                    <YAxis 
                      stroke="hsl(var(--muted-foreground))"
                      style={{ fontSize: '12px' }}
                      tickFormatter={(value) => `$${value}`}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px',
                        backdropFilter: 'blur(12px)',
                      }}
                    />
                    <Bar dataKey="potential" fill="hsl(var(--accent))" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Cost Trends */}
            <TrendsChart />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Analytics;
