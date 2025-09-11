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
                I'm an AI student and enthusiast with a passion for exploring the intersection of 
                technology and real-world impact. My journey combines academic learning with 
                hands-on project management and data analysis experience.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                I believe in the power of artificial intelligence and data science to solve 
                complex problems and create meaningful change. Whether it's developing computer 
                vision systems, analyzing datasets, or managing innovative projects, I'm driven 
                by curiosity and the desire to make a difference.
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
                    AI Student
                  </h3>
                  <p className="text-muted-foreground mb-2">Current</p>
                  <p className="text-sm text-foreground/70">
                    Pursuing advanced studies in artificial intelligence, machine learning, 
                    and data science with focus on practical applications.
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
                    Project Manager & Data Analyst
                  </h3>
                  <p className="text-muted-foreground mb-2">Professional Experience</p>
                  <p className="text-sm text-foreground/70">
                    Leading innovative projects and analyzing complex datasets to drive 
                    informed decision-making and strategic planning.
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
                    Passionate Innovator
                  </h3>
                  <p className="text-muted-foreground mb-2">Always</p>
                  <p className="text-sm text-foreground/70">
                    Committed to continuous learning, creative problem-solving, 
                    and building technology that makes a positive impact.
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