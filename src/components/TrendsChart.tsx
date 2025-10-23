import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const data = [
  { month: "Jan", current: 5500, optimized: 3200 },
  { month: "Feb", current: 5500, optimized: 2900 },
  { month: "Mar", current: 5500, optimized: 2600 },
  { month: "Apr", current: 5500, optimized: 2300 },
  { month: "May", current: 5500, optimized: 2000 },
  { month: "Jun", current: 5500, optimized: 1500 },
];

export function TrendsChart() {
  return (
    <div className="glass-card p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl shadow-card">
      <div className="mb-4 sm:mb-5 md:mb-6">
        <h3 className="text-base sm:text-lg font-heading font-semibold mb-1">Cost Projection</h3>
        <p className="text-xs sm:text-sm text-muted-foreground">6-month savings forecast after migration</p>
      </div>

      <ResponsiveContainer width="100%" height={250} className="sm:!h-[280px] md:!h-[300px]">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorCurrent" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--destructive))" stopOpacity={0.3} />
              <stop offset="95%" stopColor="hsl(var(--destructive))" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorOptimized" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--accent))" stopOpacity={0.3} />
              <stop offset="95%" stopColor="hsl(var(--accent))" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
          <XAxis 
            dataKey="month" 
            stroke="hsl(var(--muted-foreground))"
            style={{ fontSize: '10px' }}
            className="sm:text-xs"
          />
          <YAxis 
            stroke="hsl(var(--muted-foreground))"
            style={{ fontSize: '10px' }}
            className="sm:text-xs"
            tickFormatter={(value) => `$${value}`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'hsl(var(--card))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '8px',
              backdropFilter: 'blur(12px)',
            }}
            labelStyle={{ color: 'hsl(var(--foreground))' }}
          />
          <Legend 
            wrapperStyle={{ paddingTop: '20px' }}
            iconType="line"
          />
          <Area
            type="monotone"
            dataKey="current"
            stroke="hsl(var(--destructive))"
            strokeWidth={2}
            fill="url(#colorCurrent)"
            name="Current Cost"
          />
          <Area
            type="monotone"
            dataKey="optimized"
            stroke="hsl(var(--accent))"
            strokeWidth={2}
            fill="url(#colorOptimized)"
            name="Optimized Cost"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
