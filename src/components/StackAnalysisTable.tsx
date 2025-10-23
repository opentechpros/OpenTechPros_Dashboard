import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const stackData = [
  {
    tool: "Salesforce",
    type: "CRM",
    cost: "$2,400/mo",
    alternative: "SuiteCRM",
    savings: "85%",
    savingsAmount: 2040,
  },
  {
    tool: "Slack",
    type: "Communication",
    cost: "$800/mo",
    alternative: "Mattermost",
    savings: "100%",
    savingsAmount: 800,
  },
  {
    tool: "Jira",
    type: "Project Management",
    cost: "$1,200/mo",
    alternative: "Plane",
    savings: "95%",
    savingsAmount: 1140,
  },
  {
    tool: "Adobe Creative Cloud",
    type: "Design",
    cost: "$600/mo",
    alternative: "GIMP + Inkscape",
    savings: "100%",
    savingsAmount: 600,
  },
  {
    tool: "MongoDB Atlas",
    type: "Database",
    cost: "$500/mo",
    alternative: "PostgreSQL",
    savings: "90%",
    savingsAmount: 450,
  },
];

export function StackAnalysisTable() {
  return (
    <div className="glass-card p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl shadow-card">
      <div className="mb-4 sm:mb-5 md:mb-6">
        <h3 className="text-base sm:text-lg font-heading font-semibold mb-1">Software Stack Analysis</h3>
        <p className="text-xs sm:text-sm text-muted-foreground">Recommended open-source alternatives</p>
      </div>

      <div className="overflow-x-auto -mx-4 sm:mx-0">
        <Table>
          <TableHeader>
            <TableRow className="border-border/50 hover:bg-transparent">
              <TableHead className="font-heading text-xs sm:text-sm whitespace-nowrap px-2 sm:px-4">Current Tool</TableHead>
              <TableHead className="font-heading text-xs sm:text-sm whitespace-nowrap px-2 sm:px-4 hidden md:table-cell">Type</TableHead>
              <TableHead className="font-heading text-xs sm:text-sm whitespace-nowrap px-2 sm:px-4 hidden sm:table-cell">Monthly Cost</TableHead>
              <TableHead className="font-heading text-xs sm:text-sm whitespace-nowrap px-2 sm:px-4">Alternative</TableHead>
              <TableHead className="font-heading text-xs sm:text-sm text-right whitespace-nowrap px-2 sm:px-4">Savings</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {stackData.map((item, index) => (
              <TableRow key={index} className="border-border/30 hover:bg-secondary/20 transition-colors">
                <TableCell className="font-medium text-xs sm:text-sm px-2 sm:px-4">{item.tool}</TableCell>
                <TableCell className="px-2 sm:px-4 hidden md:table-cell">
                  <Badge variant="secondary" className="bg-secondary/50 text-secondary-foreground border-border/30 text-xs">
                    {item.type}
                  </Badge>
                </TableCell>
                <TableCell className="text-muted-foreground text-xs sm:text-sm px-2 sm:px-4 hidden sm:table-cell">{item.cost}</TableCell>
                <TableCell className="px-2 sm:px-4">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 text-accent flex-shrink-0" />
                    <span className="font-medium text-accent text-xs sm:text-sm">{item.alternative}</span>
                  </div>
                </TableCell>
                <TableCell className="text-right px-2 sm:px-4">
                  <span className="text-sm sm:text-lg font-bold font-heading text-accent">{item.savings}</span>
                  <div className="text-xs text-muted-foreground">${item.savingsAmount}/mo</div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
