import { Card } from "@/components/ui/card";
import { GraduationCap, Briefcase, Sparkles } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-soft">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            AI Graduate turning research and data into production-ready applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-foreground/80 leading-relaxed">
                I'm an <span className="font-semibold text-primary">Artificial Intelligence graduate</span> with hands-on experience in
                <span className="font-medium text-accent-foreground"> Machine Learning</span>,
                <span className="font-medium text-accent-foreground"> Deep Learning</span>,
                <span className="font-medium text-accent-foreground"> Computer Vision</span>, and
                <span className="font-medium text-accent-foreground"> Natural Language Processing (NLP)</span>.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                I enjoy building AI-powered applications that solve practical problems and continuously
                improving my technical skills through real-world projects.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                My graduation project, <span className="font-semibold text-primary">EyeSpeak</span>, focuses on
                AI-based eye tracking for hands-free interaction using Computer Vision and Machine Learning.
                I have also developed projects in pedestrian detection, sign language translation, earthquake
                prediction, heart disease prediction, and AI-powered industrial chatbots.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                I enjoy learning modern AI technologies and building production-ready AI applications using
                <span className="font-semibold text-primary"> Python</span> and
                <span className="font-semibold text-primary"> FastAPI</span>.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="p-6 hover-lift bg-gradient-card border-0 shadow-soft">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary-soft rounded-lg">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    Education
                  </h3>
                  <p className="text-muted-foreground mb-2">2022 – 2026</p>
                  <p className="text-sm text-foreground/70">
                    Bachelor of Technology in Artificial Intelligence
                    <br />
                    Helwan International Technological University
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
                    Experience
                  </h3>
                  <p className="text-muted-foreground mb-2">Jun 2025 – Dec 2025</p>
                  <p className="text-sm text-foreground/70">
                    Microsoft Machine Learning Engineer Track
                    <br />
                    Digital Egypt Pioneers Initiative (DEPI)
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover-lift bg-gradient-card border-0 shadow-soft">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary-soft rounded-lg">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    Interests
                  </h3>
                  <p className="text-muted-foreground mb-2">Focus Areas</p>
                  <p className="text-sm text-foreground/70">
                    Machine Learning · Computer Vision · Natural Language Processing ·
                    AI Engineering · AI Backend Development
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