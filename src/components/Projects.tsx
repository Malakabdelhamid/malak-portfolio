import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Eye } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      title: "EyeSpeak",
      description:
        "AI-powered eye tracking system enabling hands-free interaction using Computer Vision and Machine Learning. Optimized to run on Raspberry Pi Zero 2 W and integrated with Android and IoT devices.",
      category: "AI",
      tech: ["Python", "OpenCV", "Random Forest", "Raspberry Pi Zero 2 W", "Android", "IoT"],
      image: "/3.jpg",
      github: "https://github.com/Malakabdelhamid/EyeSpeak",
      demo: "",
      result: "Achieved 87% gaze estimation accuracy.",
      featured: true,
      badge: "Graduation Project",
    },
    {
      title: "Calibra8 AI Chatbot",
      description:
        "Industrial AI chatbot combining LLMs, semantic search, engineering question answering, product search, and AI-assisted recommendations.",
      category: "AI",
      tech: ["Python", "FastAPI", "Ollama", "MySQL", "LLMs"],
      image: "",
      github: "https://github.com/Malakabdelhamid",
      demo: "",
      result: "",
      featured: false,
    },
    {
      title: "VisionWalk",
      description:
        "Real-time pedestrian detection system using YOLOv5 and OpenCV trained on the Caltech Pedestrian Dataset.",
      category: "Computer Vision",
      tech: ["Python", "YOLOv5", "OpenCV", "TensorFlow"],
      image: "/1.jpg",
      github: "https://github.com/Malakabdelhamid/VisionWalk",
      demo: "/vision.mp4",
      result: "Achieved 80% detection accuracy.",
      featured: false,
    },
    {
      title: "Sign Language Translator",
      description:
        "Smart gloves powered by Machine Learning that translate sign language into text using flex sensors and ESP32.",
      category: "IoT",
      tech: ["Python", "Random Forest", "ESP32", "Flutter"],
      image: "/gloves.jpg",
      github: "https://github.com/Malakabdelhamid/Sign-Language-Translator",
      demo: "/gloves.mp4",
      result: "",
      featured: false,
    },
    {
      title: "Heart Disease Prediction",
      description:
        "Machine Learning model that predicts heart disease risk using patient medical data.",
      category: "ML",
      tech: ["Python", "Scikit-Learn", "Pandas", "NumPy"],
      image: "",
      github: "https://github.com/Malakabdelhamid/Heart-Disease-Prediction",
      demo: "",
      result: "",
      featured: false,
    },
    {
      title: "Earthquake Prediction",
      description:
        "Machine Learning model for earthquake prediction and seismic data analysis.",
      category: "ML",
      tech: ["Python", "Machine Learning", "Pandas", "NumPy"],
      image: "",
      github: "https://github.com/Malakabdelhamid/Earthquake-Prediction",
      demo: "",
      result: "",
      featured: false,
    },
  ];

  const categories = ["All", "AI", "Computer Vision", "ML", "IoT"];
  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-soft">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            End-to-end AI projects spanning Computer Vision, NLP, Machine Learning, and IoT
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category)}
              className={
                filter === category
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const hasCode = Boolean(project.github && project.github.trim());
            const hasDemo = Boolean(project.demo && project.demo.trim());
            const hasImage = Boolean(project.image && project.image.trim());
            return (
              <Card
                key={project.title}
                className={`overflow-hidden hover-lift bg-gradient-card border-0 shadow-soft group ${
                  project.featured ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="relative overflow-hidden bg-muted h-48">
                  {hasImage && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = "none";
                      }}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-hero opacity-20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-primary font-semibold text-lg">{project.title}</div>
                  </div>
                  {(project as any).badge && (
                    <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
                      {(project as any).badge}
                    </Badge>
                  )}
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                    {project.result && (
                      <p className="text-sm font-medium text-primary mt-2">
                        {project.result}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex space-x-3 pt-2">
                    {hasCode && (
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground flex-1"
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          GitHub
                        </a>
                      </Button>
                    )}
                    {hasDemo && (
                      <Button
                        asChild
                        size="sm"
                        className="bg-primary hover:bg-primary/90 text-primary-foreground flex-1"
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <Eye className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <Card className="p-8 bg-gradient-card border-0 shadow-soft inline-block">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Interested in Collaborating?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              I'm always excited to work on innovative projects that make a positive impact.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
            >
              <a href="#contact">
                <ExternalLink className="w-5 h-5 mr-2" />
                Get In Touch
              </a>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
