import { TrendingUp, DollarSign } from "lucide-react";

export function OptimizationScore() {
  const score = 78;
  const potentialSavings = 124500;

  return (
    <div className="glass-card p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl shadow-card gradient-border">
      <div className="mb-4 sm:mb-5 md:mb-6">
        <h3 className="text-base sm:text-lg font-heading font-semibold mb-1">Cost Optimization Score</h3>
        <p className="text-xs sm:text-sm text-muted-foreground">Based on your current software stack</p>
      </div>

      <div className="flex items-center justify-center mb-4 sm:mb-5 md:mb-6">
        <div className="relative w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 192 192">
            <circle
              cx="96"
              cy="96"
              r="88"
              stroke="hsl(var(--secondary))"
              strokeWidth="10"
              fill="none"
            />
            <circle
              cx="96"
              cy="96"
              r="88"
              stroke="url(#gradient)"
              strokeWidth="10"
              fill="none"
              strokeDasharray={`${2 * Math.PI * 88}`}
              strokeDashoffset={`${2 * Math.PI * 88 * (1 - score / 100)}`}
              strokeLinecap="round"
              className="transition-all duration-1000"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(280, 43%, 55%)" />
                <stop offset="100%" stopColor="hsl(290, 45%, 65%)" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading gradient-text">{score}</span>
            <span className="text-xs sm:text-sm text-muted-foreground mt-1">out of 100</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        <div className="bg-secondary/30 p-3 sm:p-4 rounded-lg sm:rounded-xl border border-border/30">
          <div className="flex items-center gap-1.5 sm:gap-2 mb-1">
            <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 text-accent" />
            <span className="text-xs text-muted-foreground">Improvement</span>
          </div>
          <p className="text-xl sm:text-2xl font-bold font-heading">+23%</p>
        </div>
        <div className="bg-secondary/30 p-3 sm:p-4 rounded-lg sm:rounded-xl border border-border/30">
          <div className="flex items-center gap-1.5 sm:gap-2 mb-1">
            <DollarSign className="h-3 w-3 sm:h-4 sm:w-4 text-accent" />
            <span className="text-xs text-muted-foreground">Potential Savings</span>
          </div>
          <p className="text-xl sm:text-2xl font-bold font-heading">${(potentialSavings / 1000).toFixed(0)}K</p>
        </div>
      </div>
    </div>
  );
}
