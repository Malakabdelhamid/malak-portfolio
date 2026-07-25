import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Building2 } from "lucide-react";

const experiences = [
  {
    org: "Digital Egypt Pioneers Initiative (DEPI)",
    role: "Machine Learning Intern",
    period: "Jun 2025 – Dec 2025",
    icon: Briefcase,
    accent: "primary" as const,
    heading: "Responsibilities",
    items: [
      "Machine Learning",
      "Data Processing",
      "Model Development",
      "Technical Labs",
      "Professional English",
      "Soft Skills",
      "Freelancing",
    ],
  },
  {
    org: "Commercial International Bank (CIB)",
    role: "AI & Business Training Program",
    period: "Sep 2024 – Oct 2024",
    icon: Building2,
    accent: "accent" as const,
    heading: "Topics",
    items: [
      "Digital Transformation",
      "Data Literacy",
      "Financial Literacy",
      "Entrepreneurial Skills",
      "Human-Centric Skills",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hands-on programs and roles shaping my AI engineering practice
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp) => (
            <Card key={exp.org} className="p-8 hover-lift bg-gradient-card border-0 shadow-soft">
              <div className="flex items-start space-x-4 mb-6">
                <div className={`p-3 rounded-lg ${exp.accent === "primary" ? "bg-primary-soft" : "bg-accent"}`}>
                  <exp.icon className={`w-6 h-6 ${exp.accent === "primary" ? "text-primary" : "text-accent-foreground"}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
                  <p className="text-primary font-medium">{exp.org}</p>
                  <p className="text-sm text-muted-foreground">{exp.period}</p>
                </div>
              </div>
              <h4 className="text-sm font-semibold text-foreground mb-3">{exp.heading}</h4>
              <div className="flex flex-wrap gap-2">
                {exp.items.map((item) => (
                  <Badge key={item} variant="secondary" className="px-3 py-1 text-sm">
                    {item}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
