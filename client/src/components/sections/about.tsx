export function About() {
  return (
    <section id="about" className="border-t border-border bg-muted/20">
      <div className="container">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
          <h2 className="text-3xl md:text-4xl font-heading font-bold">About</h2>
          <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            <p>
              I am a driven Computer Science undergraduate at George Mason University (Class of 2026) based in Fairfax, VA. 
              My journey in technology began with a fascination for how software shapes our world, leading me to explore full-stack development and complex system architectures.
            </p>
            <p>
              Previously, I gained valuable experience as an Academic Intern at VIT Chennai, where I honed my skills in Java, Object-Oriented Programming, and Data Structures. 
              I am passionate about building efficient, scalable applications and am currently seeking opportunities to apply my skills in a challenging engineering environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
