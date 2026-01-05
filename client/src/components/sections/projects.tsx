import { FolderGit2 } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="border-t border-border">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Projects</h2>
        <div className="py-24 max-w-2xl mx-auto border-2 border-dashed border-border rounded-3xl bg-muted/5">
          <div className="bg-background w-16 h-16 rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-6">
            <FolderGit2 className="w-8 h-8 text-muted-foreground" />
          </div>
          <h3 className="text-2xl font-bold mb-3">Building something great...</h3>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            I'm currently working on several full-stack applications to showcase my skills. Check back soon for my first project release!
          </p>
        </div>
      </div>
    </section>
  );
}
