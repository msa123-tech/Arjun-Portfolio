import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-heading font-bold mb-8 text-center">About Me</h2>
          
          <div className="prose prose-lg dark:prose-invert mx-auto text-muted-foreground leading-relaxed text-center">
            <p className="mb-6">
              I am a Computer Science undergraduate at George Mason University (Expected Dec 2026) based in Fairfax, VA. 
              Currently working as an AI Automation & Analytics Extern at Wayfair, where I build Python-based automation pipelines and AI-driven analytics solutions.
            </p>
            <p>
              My expertise spans full-stack development, REST APIs, and AI integration. I'm passionate about leveraging LLMs, prompt engineering, and automation to solve complex business problems efficiently.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
