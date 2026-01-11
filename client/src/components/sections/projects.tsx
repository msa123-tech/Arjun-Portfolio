import { motion } from "framer-motion";
import { FolderGit2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Internship & Job Application Tracker",
    description: "Developed 7 REST API endpoints using Python and Django REST Framework. Designed normalized relational schemas and integrated 5 data sources into a unified data store, reducing report generation time by 25%.",
    tech: ["Python", "Django REST", "PostgreSQL", "REST APIs"],
  },
  {
    title: "AI Resume Evaluation Tool",
    description: "Automated resume evaluation workflows using Python and LLM APIs. Reduced manual resume review time by 30% through structured scoring and rule-based evaluation with strict input validation.",
    tech: ["Python", "LLM APIs", "Prompt Engineering", "Automation"],
  },
  {
    title: "Document Question Answering System",
    description: "Designed a document-based Q&A system using vector similarity search and LLM-generated responses across 850+ documents. Reduced query latency by 150ms through modular architecture.",
    tech: ["Python", "Vector Search", "LLM", "NLP"],
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
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">{project.title}</CardTitle>
                  <CardDescription className="line-clamp-4 mt-2">{project.description}</CardDescription>
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
