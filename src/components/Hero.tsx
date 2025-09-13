import { Button } from "@/components/ui/button";
import { ArrowDown, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-4xl mx-auto">
        <div className="space-y-8">
          {/* Main heading with gradient effect */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="gradient-text">Malak AbdElHamid</span>
            </h1>
            <div className="text-xl sm:text-2xl text-muted-foreground font-medium">
              <span>AI Engineer</span>
            </div>
          </div>

          {/* Brief introduction */}
          <p className="text-lg sm:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Junior ML student building end-to-end projects from data prep to evaluation with a growing interest in AI
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-medium group"
              onClick={() => window.open('/Resume_Malak_Mohamed.pdf', '_blank')}
            >
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Download Resume
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg font-medium"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </Button>
          </div>

          {/* Scroll indicator */}
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