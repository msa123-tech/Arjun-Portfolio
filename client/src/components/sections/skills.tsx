import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Database, Layout, Server, Terminal, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: <Code2 className="w-5 h-5" />,
    skills: ["JavaScript", "TypeScript", "Java", "SQL", "HTML5", "CSS3"],
  },
  {
    title: "Frontend",
    icon: <Layout className="w-5 h-5" />,
    skills: ["React", "Tailwind CSS", "Next.js", "Responsive Design"],
  },
  {
    title: "Backend",
    icon: <Server className="w-5 h-5" />,
    skills: ["Node.js", "Express", "RESTful APIs", "JWT Auth"],
  },
  {
    title: "Databases",
    icon: <Database className="w-5 h-5" />,
    skills: ["PostgreSQL", "MongoDB", "Mongoose"],
  },
  {
    title: "Tools",
    icon: <Terminal className="w-5 h-5" />,
    skills: ["Git", "Docker", "AWS", "Postman", "VS Code"],
  },
  {
    title: "Concepts",
    icon: <Wrench className="w-5 h-5" />,
    skills: ["Data Structures", "Algorithms", "OOP", "SDLC", "Agile"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="border-t border-border">
      <div className="container">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Technical Skills</h2>
          <p className="text-lg text-muted-foreground">Specialized toolkit for full-stack engineering.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="space-y-4">
              <div className="flex items-center gap-3 text-foreground font-semibold">
                <div className="p-2 bg-secondary rounded-lg">
                  {category.icon}
                </div>
                {category.title}
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-3 py-1 font-medium bg-muted/50 text-muted-foreground border-transparent hover:bg-muted transition-colors">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
