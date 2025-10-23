import { Sparkles, AlertCircle, CheckCircle2 } from "lucide-react";

const insights = [
  {
    type: "opportunity",
    icon: Sparkles,
    title: "High Impact Opportunity",
    description: "Switching from Salesforce to SuiteCRM could save $24,480 annually while maintaining 90% of current functionality.",
    color: "accent",
  },
  {
    type: "warning",
    icon: AlertCircle,
    title: "Migration Complexity",
    description: "Jira to Plane migration requires careful planning. Estimated transition time: 2-3 weeks with team training.",
    color: "destructive",
  },
  {
    type: "success",
    icon: CheckCircle2,
    title: "Quick Win",
    description: "Mattermost can replace Slack immediately. Self-hosted solution with better security and zero licensing costs.",
    color: "accent",
  },
];

export function AIInsights() {
  return (
    <div className="glass-card p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl shadow-card">
      <div className="mb-4 sm:mb-5 md:mb-6 flex items-center gap-2 sm:gap-3">
        <div className="p-1.5 sm:p-2 bg-primary/20 rounded-lg flex-shrink-0">
          <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
        </div>
        <div>
          <h3 className="text-base sm:text-lg font-heading font-semibold">AI-Powered Insights</h3>
          <p className="text-xs sm:text-sm text-muted-foreground">Personalized recommendations for your stack</p>
        </div>
      </div>

      <div className="space-y-3 sm:space-y-4">
        {insights.map((insight, index) => (
          <div
            key={index}
            className="p-3 sm:p-4 bg-secondary/20 rounded-lg sm:rounded-xl border border-border/30 hover:border-primary/50 transition-all group"
          >
            <div className="flex gap-2 sm:gap-3">
              <div className={`p-1.5 sm:p-2 rounded-lg bg-${insight.color}/20 flex-shrink-0 h-fit`}>
                <insight.icon className={`h-4 w-4 sm:h-5 sm:w-5 text-${insight.color}`} />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-heading font-semibold mb-1 group-hover:text-primary transition-colors text-sm sm:text-base">
                  {insight.title}
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {insight.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 sm:mt-5 md:mt-6 p-3 sm:p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg sm:rounded-xl border border-primary/20">
        <p className="text-xs sm:text-sm text-foreground">
          <span className="font-semibold">💡 AI Summary:</span> Your stack has significant optimization potential. 
          Prioritize CRM and communication tools for immediate impact, estimated total annual savings of <span className="text-accent font-bold">$124,500</span>.
        </p>
      </div>
    </div>
  );
}
