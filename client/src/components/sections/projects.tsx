import { motion } from "framer-motion";
import { FolderGit2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
          <h2 className="text-3xl font-heading font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground">What I've been working on.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <Card className="bg-muted/30 border-dashed border-2">
            <CardContent className="flex flex-col items-center justify-center py-16 text-center">
              <div className="bg-background p-4 rounded-full shadow-sm mb-6">
                <FolderGit2 className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Projects Coming Soon</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                I'm currently brewing some exciting projects to showcase my full-stack capabilities. 
                Stay tuned for updates!
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
