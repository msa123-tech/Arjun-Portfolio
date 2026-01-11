import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Database, Layout, Server, Terminal, Wrench, Brain } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: <Code2 className="w-5 h-5 text-primary" />,
    skills: ["Python", "Java", "JavaScript", "SQL"],
  },
  {
    title: "Frontend",
    icon: <Layout className="w-5 h-5 text-primary" />,
    skills: ["React", "HTML", "CSS", "Responsive Design"],
  },
  {
    title: "Backend",
    icon: <Server className="w-5 h-5 text-primary" />,
    skills: ["REST APIs", "Django REST Framework", "FastAPI", "Microservices"],
  },
  {
    title: "Databases",
    icon: <Database className="w-5 h-5 text-primary" />,
    skills: ["PostgreSQL", "Relational Schema Design"],
  },
  {
    title: "Tools & Platforms",
    icon: <Terminal className="w-5 h-5 text-primary" />,
    skills: ["Git", "GitHub", "Linux"],
  },
  {
    title: "AI & Concepts",
    icon: <Brain className="w-5 h-5 text-primary" />,
    skills: ["LLM APIs", "Prompt Engineering", "AI-Assisted Dev", "OOP", "Data Structures", "Algorithms"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-heading font-bold mb-4">Technical Skills</h2>
          <p className="text-muted-foreground">My technical toolkit and areas of expertise.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border border-border/50 hover:border-primary/50 transition-colors shadow-sm hover:shadow-md">
                <CardHeader className="flex flex-row items-center space-x-3 pb-2">
                  <div className="p-2 bg-primary/5 rounded-md">
                    {category.icon}
                  </div>
                  <CardTitle className="text-lg font-semibold">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="font-normal text-muted-foreground hover:text-foreground transition-colors">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
