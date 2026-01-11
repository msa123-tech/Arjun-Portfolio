import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail, FileText, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background blobs for vibrancy */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-700" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6 border border-primary/20 shadow-sm">
              <Sparkles className="w-4 h-4" />
              AI Automation Extern @ Wayfair
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold tracking-tight text-foreground mb-6">
              Hi, I'm Arjun.
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Computer Science Undergraduate at George Mason University.
              Building AI-powered automation and full-stack applications.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button size="lg" className="h-12 px-8 text-base font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all rounded-full" onClick={scrollToContact}>
              Let's Talk <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            
            <Button size="lg" variant="outline" className="h-12 px-8 text-base border-2 hover:bg-secondary/10 transition-all rounded-full" asChild>
              <a href="https://linkedin.com/in/ms-arjun-61637b230" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4 text-secondary" /> LinkedIn
              </a>
            </Button>
            
            <Button size="lg" variant="ghost" className="h-12 px-8 text-base font-semibold rounded-full hover:bg-primary/10 transition-colors" asChild>
              <a href="/Arjun_resume.pdf" target="_blank">
                <FileText className="mr-2 h-4 w-4 text-primary" /> Resume
              </a>
            </Button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="pt-12 flex justify-center gap-8 text-muted-foreground"
          >
             <a href="mailto:msa64288@gmail.com" className="hover:text-primary transition-all scale-110 hover:scale-125">
               <Mail className="h-6 w-6" />
               <span className="sr-only">Email</span>
             </a>
             <a href="https://github.com/msa123-tech" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-all hover:scale-125">
               <Github className="h-6 w-6" />
               <span className="sr-only">GitHub</span>
             </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
