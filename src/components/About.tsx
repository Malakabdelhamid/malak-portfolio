import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, GraduationCap, Briefcase, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-soft">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know the person behind the projects and passion for technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile content */}
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-foreground/80 leading-relaxed">
                AI student and ML developer passionate about end-to-end workflows—from data preparation 
                and exploratory analysis to baseline modeling and thorough evaluation. I have a growing 
                interest in advancing my expertise in AI.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Currently, I am part of the DEPI national ML internship and have undergone comprehensive 
                training in core machine learning, deep learning fundamentals, and modern AI techniques. 
                My core skills include Python, data cleaning, exploratory data analysis, and building 
                scikit-learn pipelines.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                I pride myself on clear and honest communication, adhering to conservative timelines, 
                delivering well-documented, tidy notebooks, and being consistently open to feedback 
                for continuous improvement.
              </p>
            </div>

            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 font-medium group"
            >
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Download Full Resume
            </Button>
          </div>

          {/* Experience cards */}
          <div className="space-y-6">
            <Card className="p-6 hover-lift bg-gradient-card border-0 shadow-soft">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary-soft rounded-lg">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    DEPI ML Internship
                  </h3>
                  <p className="text-muted-foreground mb-2">Current</p>
                  <p className="text-sm text-foreground/70">
                    Part of the national ML internship program with comprehensive training 
                    in machine learning, deep learning fundamentals, and modern AI techniques.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover-lift bg-gradient-card border-0 shadow-soft">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-accent rounded-lg">
                  <Briefcase className="w-6 h-6 text-accent-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    Technical Skills
                  </h3>
                  <p className="text-muted-foreground mb-2">Core Competencies</p>
                  <p className="text-sm text-foreground/70">
                    Python programming, data cleaning, exploratory data analysis, 
                    and building robust scikit-learn pipelines for ML projects.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover-lift bg-gradient-card border-0 shadow-soft">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary-soft rounded-lg">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    Professional Approach
                  </h3>
                  <p className="text-muted-foreground mb-2">Work Ethics</p>
                  <p className="text-sm text-foreground/70">
                    Clear communication, conservative timelines, well-documented notebooks, 
                    and consistently open to feedback for continuous improvement.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;