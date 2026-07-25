import { Heart, Mail, Linkedin, Github, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const email = "malakabdelhamid6@gmail.com";
  return (
    <footer className="bg-gradient-soft border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold gradient-text">
              Malak Abd-ElHamid
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Artificial Intelligence Graduate building AI-powered applications
              across Machine Learning, Computer Vision, and NLP.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <div className="space-y-2">
              {[
                { href: "#about", label: "About Me" },
                { href: "#skills", label: "Skills" },
                { href: "#experience", label: "Experience" },
                { href: "#projects", label: "Projects" },
                { href: "#certificates", label: "Certificates" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <button
                  key={link.href}
                  onClick={() => {
                    const element = document.querySelector(link.href);
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Connect</h4>
            <div className="space-y-3">
              <a 
                href={`mailto:${email}`}
                className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>{email}</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/malakabdelhamid1/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>LinkedIn Profile</span>
              </a>
              <a 
                href="https://github.com/Malakabdelhamid"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border">
          <div className="text-muted-foreground mb-4 md:mb-0 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-1">
              <span>© 2026 Malak Abd-ElHamid</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
            </div>
            <div className="text-sm">Artificial Intelligence Graduate</div>
            <div className="text-xs mt-1">Built with React, Tailwind CSS, and Lovable.</div>
          </div>

          <Button
            onClick={scrollToTop}
            variant="outline"
            size="sm"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <ArrowUp className="w-4 h-4 mr-2" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;