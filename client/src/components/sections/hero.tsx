import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail, FileText } from "lucide-react";

export function Hero() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-[90vh] flex items-center pt-20">
      <div className="container">
        <div className="max-w-3xl space-y-8">
          <div>
            <span className="inline-block py-1 px-3 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold uppercase tracking-wider mb-6">
              Available for Internship Opportunities
            </span>
            <h1 className="text-5xl md:text-8xl font-heading font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
              Arjun <br />
              <span className="text-muted-foreground">Marimuthu.</span>
            </h1>
            <p className="text-lg md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
              Computer Science Undergraduate at <span className="text-foreground font-semibold">George Mason University</span>.
              Specializing in full-stack development and backend systems.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button size="lg" className="h-14 px-8 text-base rounded-full" onClick={scrollToContact}>
              Contact Me <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            
            <Button size="lg" variant="outline" className="h-14 px-8 text-base rounded-full" asChild>
              <a href="https://linkedin.com/in/ms-arjun-61637b230" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </a>
            </Button>
            
            <Button size="lg" variant="ghost" className="h-14 px-8 text-base rounded-full" disabled title="Coming Soon">
               <FileText className="mr-2 h-4 w-4" /> Resume
            </Button>
          </div>
          
          <div className="pt-8 flex gap-8 text-muted-foreground border-t border-border mt-12 max-w-fit">
             <a href="mailto:msa642884@gmail.com" className="hover:text-foreground transition-colors flex items-center gap-2 text-sm font-medium">
               <Mail className="h-5 w-5" />
               msa642884@gmail.com
             </a>
             <span className="cursor-not-allowed opacity-40 flex items-center gap-2 text-sm font-medium">
               <Github className="h-5 w-5" />
               GitHub (Soon)
             </span>
          </div>
        </div>
      </div>
    </section>
  );
}
