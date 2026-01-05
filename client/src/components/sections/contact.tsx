import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Linkedin, Github } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="border-t border-border bg-muted/20">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Let's Connect</h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-md">
              I'm always open to discussing new opportunities, creative projects, or mentorship.
            </p>
            
            <div className="space-y-8">
              <a href="mailto:msa642884@gmail.com" className="flex items-center gap-4 group">
                <div className="p-4 bg-background rounded-2xl shadow-sm border border-border group-hover:border-primary/50 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Email</p>
                  <p className="text-lg font-semibold group-hover:text-primary transition-colors">msa642884@gmail.com</p>
                </div>
              </a>
              
              <div className="flex items-center gap-4">
                <div className="p-4 bg-background rounded-2xl shadow-sm border border-border">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Location</p>
                  <p className="text-lg font-semibold">Fairfax, VA</p>
                </div>
              </div>
              
              <div className="flex gap-4 pt-4">
                <Button variant="outline" size="lg" className="h-14 w-14 rounded-2xl" asChild>
                  <a href="https://linkedin.com/in/ms-arjun-61637b230" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-6 h-6" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="h-14 w-14 rounded-2xl cursor-not-allowed opacity-40" disabled>
                  <Github className="w-6 h-6" />
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-background p-8 md:p-12 rounded-[2rem] border border-border shadow-xl shadow-muted/20">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Name</label>
                  <Input placeholder="John Doe" className="h-12 bg-muted/30 border-none focus-visible:ring-primary" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Email</label>
                  <Input type="email" placeholder="john@example.com" className="h-12 bg-muted/30 border-none focus-visible:ring-primary" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Subject</label>
                <Input placeholder="How can I help?" className="h-12 bg-muted/30 border-none focus-visible:ring-primary" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Message</label>
                <Textarea placeholder="Tell me more..." className="min-h-[150px] bg-muted/30 border-none focus-visible:ring-primary resize-none" />
              </div>
              <Button type="submit" className="w-full h-14 text-lg font-bold rounded-2xl">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
