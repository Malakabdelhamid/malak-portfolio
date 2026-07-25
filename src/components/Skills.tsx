import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code2,
  Brain,
  Server,
  Database,
  Library,
  Wrench,
  Users,
} from "lucide-react";

const Skills = () => {
  const categories = [
    {
      title: "Programming",
      icon: Code2,
      items: ["Python", "Java"],
    },
    {
      title: "Artificial Intelligence",
      icon: Brain,
      items: ["Machine Learning", "Deep Learning", "Computer Vision", "Natural Language Processing"],
    },
    {
      title: "Backend",
      icon: Server,
      items: ["FastAPI", "REST APIs"],
    },
    {
      title: "Database",
      icon: Database,
      items: ["SQL", "MySQL"],
    },
    {
      title: "Libraries",
      icon: Library,
      items: ["TensorFlow", "Keras", "OpenCV", "Scikit-Learn", "Pandas", "NumPy", "YOLOv5"],
    },
    {
      title: "Tools",
      icon: Wrench,
      items: ["Git", "GitHub", "VS Code", "Raspberry Pi", "Microsoft Office"],
    },
    {
      title: "Soft Skills",
      icon: Users,
      items: ["Communication", "Teamwork", "Fast Learner", "Flexible & Adaptable"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Skills &amp; Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A focused toolkit spanning AI, backend, data, and modern engineering tooling
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Card
              key={cat.title}
              className="p-6 hover-lift bg-gradient-card border-0 shadow-soft"
            >
              <div className="flex items-center space-x-3 mb-5">
                <div className="p-3 bg-primary-soft rounded-lg">
                  <cat.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <Badge
                    key={item}
                    variant="secondary"
                    className="px-3 py-1 text-sm font-medium"
                  >
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

export default Skills;