import { GraduationCap, Presentation, Users, ClipboardList } from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "World-Class Faculty",
    description: "Learn from industry experts and thought leaders",
  },
  {
    icon: Presentation,
    title: "Live Classes",
    description: "Interactive sessions with real-time Q&A",
  },
  {
    icon: Users,
    title: "Discussion Forum",
    description: "Collaborate and network with peers",
  },
  {
    icon: ClipboardList,
    title: "Quiz & Assignments",
    description: "Track progress with assessments",
  },
];

export function FeatureCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {features.map((feature, index) => (
        <div
          key={index}
          className="glass-card p-6 rounded-2xl shadow-card hover:shadow-elevated transition-all group hover:border-primary/50 cursor-pointer"
        >
          <div className="mb-4 p-3 bg-primary/20 rounded-xl w-fit group-hover:bg-primary/30 transition-colors">
            <feature.icon className="h-6 w-6 text-primary" />
          </div>
          <h4 className="font-heading font-semibold mb-2 group-hover:text-primary transition-colors">
            {feature.title}
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
}
