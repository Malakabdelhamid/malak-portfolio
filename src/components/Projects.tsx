import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Eye } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const [filter, setFilter] = useState("All");

  // Place these files in project-root/public and reference with a leading slash. [1]
  const projects = [
    {
      title: "VisionWalk",
      description:
        "AI-powered pedestrian detection system using computer vision to enhance urban safety and traffic management.",
      category: "AI",
      tech: ["Python", "TensorFlow", "OpenCV", "Computer Vision"],
      image: "/1.jpg",          // ✅ correct (served from public) [1][2]
      github: "",               // empty => hide Code button
      demo: "/vision.mp4",      // in public or use external URL
      featured: true,
    },
    {
      title: "EgGuide",
      description:
        "VR-based tourism platform showcasing Egyptian landmarks with immersive virtual reality experiences.",
      category: "VR",
      tech: ["Unity", "C#", "VR", "3D Modeling"],
      image: "/eg.jpg",         // ✅
      github: "",               // empty => hide Code button
      demo: "",                 // empty => hide Demo button
      featured: true,
    },
    {
      title: "Sign Language Translator",
      description:
        "Smart gloves powered by IoT and machine learning that translate sign language into text, bridging communication for the deaf and dumb community.",
      category: "IoT",
      tech: ["Machine Learning", "RandomForest", "Flutter", "ESP32", "Flex Sensors", "Heroku"],
      image: "/gloves.jpg",     // ✅
      github: "",               // empty => hide Code button
      demo: "/gloves.mp4",      // ✅
      featured: true,
    },
  ];

  const categories = ["All", "AI", "VR", "IoT"];
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
            A showcase of innovative solutions spanning AI, data science, and emerging technologies
          </p>
        </div>

        {/* Filter buttons */}
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

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const hasCode = Boolean(project.github && project.github.trim());
            const hasDemo = Boolean(project.demo && project.demo.trim());
            return (
              <Card
                key={project.title}
                className={`overflow-hidden hover-lift bg-gradient-card border-0 shadow-soft group ${
                  project.featured ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* Project image */}
                <div className="relative overflow-hidden bg-muted h-48">
                  {/* Show the image from public; falls back to title overlay if not found */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      // Hide broken image and keep the placeholder gradient/title
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-hero opacity-20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-primary font-semibold text-lg">{project.title}</div>
                  </div>
                  {project.featured && (
                    <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
                      Featured
                    </Badge>
                  )}
                </div>

                {/* Project content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action buttons — render only if links exist */}
                  <div className="flex space-x-3 pt-2">
                    {hasCode ? (
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground flex-1"
                      >
                        <a href={project.github!} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    ) : (
                      <Badge variant="secondary" className="flex-1 justify-center">
                        No Code
                      </Badge>
                    )}

                    {hasDemo ? (
                      <Button
                        asChild
                        size="sm"
                        className="bg-primary hover:bg-primary/90 text-primary-foreground flex-1"
                      >
                        <a href={project.demo!} target="_blank" rel="noopener noreferrer">
                          <Eye className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    ) : (
                      <Badge variant="secondary" className="flex-1 justify-center">
                        No Demo
                      </Badge>
                    )}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Call to action */}
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
