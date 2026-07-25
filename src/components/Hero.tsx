import { Button } from "@/components/ui/button";
import { ArrowDown, Download, FolderGit2 } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="text-center max-w-4xl mx-auto">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="gradient-text">Malak Abd-ElHamid</span>
            </h1>
            <div className="text-xl sm:text-2xl text-foreground/90 font-semibold">
              Artificial Intelligence Graduate
            </div>
            <div className="text-base sm:text-lg text-muted-foreground font-medium">
              Machine Learning &nbsp;|&nbsp; Computer Vision &nbsp;|&nbsp; NLP &nbsp;|&nbsp; Python
            </div>
          </div>

          <p className="text-lg sm:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Building AI-powered applications with hands-on experience in Machine Learning,
            Computer Vision, Natural Language Processing, and AI Backend Development.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-medium group"
            >
              <a href="/Resume_Malak_AbdElHamid.pdf" download="Resume_Malak_AbdElHamid.pdf">
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download CV
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg font-medium"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <FolderGit2 className="w-5 h-5 mr-2" />
              View Projects
            </Button>
          </div>

          <div className="pt-12">
            <div className="flex flex-col items-center space-y-2 text-muted-foreground">
              <span className="text-sm font-medium">Scroll to explore</span>
              <ArrowDown className="w-5 h-5 animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;