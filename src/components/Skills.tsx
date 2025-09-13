import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Database, 
  Brain, 
  Users, 
  MessageCircle, 
  BarChart3,
  Zap,
  Network,
  Crown,
  Shuffle,
  BrainCircuit, 
  Brackets
} from "lucide-react";

const Skills = () => {
  const technicalSkills = [
    { name: "Python", level: 90, icon: Code2 },
    { name: "Data Preparation & EDA", level: 88, icon: BarChart3 },
    { name: "Machine Learning", level: 85, icon: Brain },
    { name: "Pandas", level: 85, icon: Database },
    { name: "Scikit-learn", level: 75, icon: Network },
    { name: "NumPy", level: 85, icon: Brackets  },
    { name: "Deep Learning", level: 60, icon: BrainCircuit },
    { name: "Computer Vision", level: 50, icon: Brain },
  ];

  const softSkills = [
    { name: "Communication", icon: MessageCircle, color: "primary" },
    { name: "Teamwork", icon: Users, color: "accent" },
    { name: "Fast Learner", icon: Zap, color: "primary" },
    { name: "Leadership", icon: Crown, color: "accent" },
    { name: "Flexible and adaptable", icon: Shuffle, color: "primary" },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of technical capabilities and interpersonal strengths
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center lg:text-left">
              Technical Skills
            </h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <Card key={skill.name} className="p-6 hover-lift bg-gradient-card border-0 shadow-soft">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary-soft rounded-lg">
                      <skill.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground font-medium">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-gradient-hero h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center lg:text-left">
              Soft Skills
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <Card key={skill.name} className="p-6 hover-lift bg-gradient-card border-0 shadow-soft group cursor-default">
                  <div className="text-center space-y-4">
                    <div className={`p-4 rounded-xl mx-auto w-fit transition-all duration-300 group-hover:scale-110 ${
                      skill.color === 'primary' ? 'bg-primary-soft' : 'bg-accent'
                    }`}>
                      <skill.icon className={`w-8 h-8 ${
                        skill.color === 'primary' ? 'text-primary' : 'text-accent-foreground'
                      }`} />
                    </div>
                    <h4 className="font-semibold text-foreground text-sm">
                      {skill.name}
                    </h4>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-16">
          <Card className="p-8 bg-gradient-card border-0 shadow-soft text-center">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              What I Bring to the Table
            </h3>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I combine strong technical skills in AI and data science with excellent communication 
              and leadership abilities. My experience spans from hands-on coding and model development 
              to project management and cross-functional collaboration, making me well-equipped to 
              bridge the gap between technical innovation and business impact.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              <Badge variant="secondary" className="px-3 py-1">AI & ML</Badge>
              <Badge variant="secondary" className="px-3 py-1">Data Science</Badge>
              <Badge variant="secondary" className="px-3 py-1">Project Leadership</Badge>
              <Badge variant="secondary" className="px-3 py-1">Problem Solving</Badge>
              <Badge variant="secondary" className="px-3 py-1">Innovation</Badge>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;