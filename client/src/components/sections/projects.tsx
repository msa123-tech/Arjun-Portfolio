import { motion } from "framer-motion";
import { FolderGit2, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Internship & Job Application Tracker",
    description: "Backend-focused web application to manage and track internship applications. Developed 8+ RESTful APIs using Node.js and Express.",
    tech: ["Node.js", "Express", "PostgreSQL", "REST APIs"],
    period: "Jan 2025 – Present"
  },
  {
    title: "Student Course & Assignment Management",
    description: "Full-stack web application to manage academic deadlines. Implemented responsive UIs using React and Tailwind.",
    tech: ["React", "Tailwind CSS", "Node.js", "Express"],
    period: "Feb 2025"
  },
  {
    title: "AI-Powered Resume Feedback Tool",
    description: "Analyzes resume content and generates structured feedback using OpenAI API. Designed backend endpoints for user input processing.",
    tech: ["OpenAI API", "Node.js", "React", "API Design"],
    period: "Mar 2025"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-heading font-bold mb-4">Projects</h2>
          <p className="text-muted-foreground">Showcasing my technical implementations and problem-solving.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-secondary/5 border-border/50 hover:border-primary/50 transition-all group overflow-hidden">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <FolderGit2 className="w-8 h-8 text-primary opacity-80" />
                    <span className="text-xs text-muted-foreground font-mono">{project.period}</span>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">{project.title}</CardTitle>
                  <CardDescription className="line-clamp-3 mt-2">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((t) => (
                      <Badge key={t} variant="outline" className="text-[10px] bg-primary/5 border-primary/20">
                        {t}
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
