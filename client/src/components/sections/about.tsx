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
              I am a driven Computer Science undergraduate at George Mason University (Class of 2026) based in Fairfax, VA. 
              My journey in technology began with a fascination for how software shapes our world, leading me to explore full-stack development.
            </p>
            <p>
              Previously, I gained valuable experience as an Academic Intern at VIT Chennai, where I honed my skills in Java, Object-Oriented Programming, and Data Structures. 
              I am passionate about building efficient, scalable applications and am currently seeking opportunities to apply my skills in a challenging environment.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
