import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail, FileText } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
              Available for Internship Opportunities
            </span>
            <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tight text-foreground mb-6">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">Arjun</span>.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Computer Science Undergraduate at <span className="text-foreground font-medium">George Mason University</span>.
              Building the future, one line of code at a time.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button size="lg" className="h-12 px-8 text-base" onClick={scrollToContact}>
              Contact Me <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            
            <Button size="lg" variant="outline" className="h-12 px-8 text-base" asChild>
              <a href="https://linkedin.com/in/ms-arjun-61637b230" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </a>
            </Button>
            
            <Button size="lg" variant="ghost" className="h-12 px-8 text-base" disabled>
               <FileText className="mr-2 h-4 w-4" /> Resume
            </Button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="pt-12 flex justify-center gap-6 text-muted-foreground"
          >
             <a href="mailto:msa642884@gmail.com" className="hover:text-foreground transition-colors">
               <Mail className="h-6 w-6" />
               <span className="sr-only">Email</span>
             </a>
             <a href="#" className="hover:text-foreground transition-colors cursor-not-allowed opacity-50" title="Coming Soon">
               <Github className="h-6 w-6" />
               <span className="sr-only">GitHub</span>
             </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
