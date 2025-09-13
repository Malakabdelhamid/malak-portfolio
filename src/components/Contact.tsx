import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  Send,
  MessageCircle,
} from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const mailtoHref =
    "mailto:malakabdelhamid6@example.com" +
    "?subject=" +
    encodeURIComponent("Portfolio Inquiry") +
    "&body=" +
    encodeURIComponent(
      "Hi Malak,\n\nI saw your portfolio and would love to connect.\n\nBest regards,"
    );

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's connect and explore opportunities to collaborate on exciting projects
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Let's Connect
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                I'm always interested in discussing new opportunities, innovative projects,
                or simply connecting with fellow tech enthusiasts. Whether you're a
                recruiter, collaborator, or someone who shares my passion for AI and data science,
                I'd love to hear from you.
              </p>
            </div>

            {/* Contact methods */}
            <div className="space-y-6">
              {/* Email card */}
              <a href={mailtoHref}>
                <Card className="p-6 hover-lift bg-gradient-card border-0 shadow-soft group">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary-soft rounded-lg group-hover:scale-110 transition-transform">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Email</h4>
                      <p className="text-muted-foreground">
                        malakabdelhamid6@example.com
                      </p>
                    </div>
                  </div>
                </Card>
              </a>

              {/* LinkedIn card */}
              <a
                href="https://www.linkedin.com/in/malakabdelhamid1/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card className="p-6 hover-lift bg-gradient-card border-0 shadow-soft group">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-accent rounded-lg group-hover:scale-110 transition-transform">
                      <Linkedin className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">LinkedIn</h4>
                      <p className="text-muted-foreground">
                        Malak Abd-ElHamid
                      </p>
                    </div>
                  </div>
                </Card>
              </a>

              {/* GitHub card */}
              <a
                href="https://github.com/Malakabdelhamid"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card className="p-6 hover-lift bg-gradient-card border-0 shadow-soft group">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary-soft rounded-lg group-hover:scale-110 transition-transform">
                      <Github className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">GitHub</h4>
                      <p className="text-muted-foreground">
                        Malakabdelhamid
                      </p>
                    </div>
                  </div>
                </Card>
              </a>

              {/* Location card */}
              <Card className="p-6 hover-lift bg-gradient-card border-0 shadow-soft group">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-accent rounded-lg group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Location</h4>
                    <p className="text-muted-foreground">
                      Cairo, Egypt and available for remote work
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Contact form */}
          <Card className="p-8 bg-gradient-card border-0 shadow-soft">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-foreground mb-2 flex items-center">
                <MessageCircle className="w-5 h-5 mr-2 text-primary" />
                Send a Message
              </h3>
              <p className="text-muted-foreground">
                Drop me a line and I'll get back to you as soon as possible.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground font-medium">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="bg-background border-border focus:border-primary focus:ring-primary"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground font-medium">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="bg-background border-border focus:border-primary focus:ring-primary"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground font-medium">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, opportunity, or just say hello..."
                  className="bg-background border-border focus:border-primary focus:ring-primary min-h-[120px]"
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group"
              >
                <Send className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
