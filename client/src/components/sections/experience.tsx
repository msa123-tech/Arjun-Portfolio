import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-heading font-bold mb-4">Experience</h2>
          <p className="text-muted-foreground">My professional and academic journey so far.</p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-l-4 border-l-primary shadow-sm">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                  <CardTitle className="text-xl font-bold text-primary">Academic Intern</CardTitle>
                  <div className="flex items-center text-sm text-muted-foreground bg-background px-3 py-1 rounded-full border border-border w-fit">
                    <Calendar className="w-3 h-3 mr-2" />
                    <span>Jun 2022 – Dec 2023</span>
                  </div>
                </div>
                <div className="flex items-center text-muted-foreground font-medium">
                  <span className="text-foreground">VIT Chennai</span>
                  <span className="mx-2">•</span>
                  <span className="flex items-center text-sm">
                    <MapPin className="w-3 h-3 mr-1" /> Chennai, India
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>
                    Assisted in coursework related to <strong className="text-foreground font-medium">Object-Oriented Programming (OOP)</strong> and <strong className="text-foreground font-medium">Data Structures & Algorithms (DSA)</strong>.
                  </li>
                  <li>
                    Gained hands-on experience with <strong className="text-foreground font-medium">Java</strong> development and software engineering principles.
                  </li>
                  <li>
                    Collaborated with faculty and peers to solve complex algorithmic problems and improve code efficiency.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
