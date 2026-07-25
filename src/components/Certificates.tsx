import { Card } from "@/components/ui/card";
import { Award } from "lucide-react";

const certificates = [
  {
    title: "Microsoft Machine Learning Engineer",
    issuer: "Digital Egypt Pioneers Program",
  },
  {
    title: "AI & Machine Learning with Quantum Computing Foundations",
    issuer: "Youth Technology Academy · Huawei",
  },
  {
    title: "Applied Deep Learning",
    issuer: "MaharaTech",
  },
  {
    title: "AI & Business Training Program",
    issuer: "Commercial International Bank (CIB)",
  },
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-soft">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Certificates
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuous learning across AI, ML, and applied engineering
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certificates.map((c) => (
            <Card
              key={c.title}
              className="p-6 hover-lift bg-gradient-card border-0 shadow-soft flex items-start space-x-4"
            >
              <div className="p-3 bg-primary-soft rounded-lg">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground leading-snug">
                  {c.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">{c.issuer}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
