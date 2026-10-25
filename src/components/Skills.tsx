import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code2,
  Brain,
  Server,
  Eye,
  MessageSquare,
  Bot,
  Wrench,
} from "lucide-react";

const Skills = () => {
  const categories = [
    {
      title: "Programming",
      icon: Code2,
      items: ["Python"],
    },
    {
      title: "Machine Learning",
      icon: Brain,
      items: ["Scikit-learn", "NumPy", "Pandas", "Feature Engineering", "Model Training and Evaluation"],
    },
    {
      title: "Deep Learning",
      icon: Brain,
      items: ["PyTorch", "TensorFlow", "CNNs"],
    },
    {
      title: "Computer Vision",
      icon: Eye,
      items: ["OpenCV", "YOLO", "Image Processing"],
    },
    {
      title: "NLP and Generative AI",
      icon: MessageSquare,
      items: ["NLP", "LLMs", "Prompt Engineering", "RAG", "LangChain", "Hugging Face Transformers"],
    },
    {
      title: "AI Agents and Backend",
      icon: Bot,
      items: ["AI Agents", "Tool Calling", "Multi-Agent Systems", "FastAPI", "Model Inference", "Model Deployment"],
    },
    {
      title: "Tools",
      icon: Wrench,
      items: ["Git", "GitHub", "Jupyter Notebook"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A focused toolkit spanning Machine Learning, Deep Learning, Computer Vision,
            Generative AI, and AI engineering
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
