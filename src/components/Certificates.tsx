import { Card } from "@/components/ui/card";
import { Award } from "lucide-react";

const certificates = [
  {
    title: "Applied Deep Learning",
    issuer: "MaharaTech",
    date: "Jun 2025",
  },
  {
    title: "AI & Machine Learning with Quantum Computing Foundations",
    issuer: "Ministry of Youth & Sports · YTA & Huawei",
    date: "Mar 2025",
  },
  {
    title: "AI and Business Training Program",
    issuer: "Commercial International Bank (CIB)",
    date: "Sep 2024 – Oct 2024",
  },
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-soft">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Certificates &amp; Courses
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
                <p className="text-xs text-muted-foreground mt-1">{c.date}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
