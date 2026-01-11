import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "AI Automation & Analytics Extern",
    company: "Wayfair",
    location: "Remote",
    period: "Jan 2026 – Present",
    highlights: [
      "Engineered Python-based automation pipelines to analyze market and competitor data, reducing manual research effort by 30%.",
      "Implemented structured prompt reasoning techniques to decrease LLM response latency by 25%.",
      "Built interactive dashboards to visualize AI-generated insights, expanding vendor risk data coverage by 65%.",
      "Consolidated multi-source datasets into unified analytics pipelines, reducing reporting turnaround time by 25%.",
      "Strengthened system reliability by implementing API validation and error handling, mitigating 11 potential vulnerabilities."
    ]
  },
  {
    title: "Academic Intern",
    company: "VIT Chennai",
    location: "Chennai, India",
    period: "Jun 2022 – Dec 2023",
    highlights: [
      "Developed and tested 30+ Java programs applying object-oriented principles and clean coding practices.",
      "Solved 20+ data structure and algorithm problems involving arrays, strings, hash maps, and recursion.",
      "Optimized and debugged programs to improve correctness, performance, and maintainability under academic deadlines."
    ]
  }
];

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
          <p className="text-muted-foreground">My professional journey so far.</p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-l-4 border-l-primary shadow-sm">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                    <CardTitle className="text-xl font-bold text-primary">{exp.title}</CardTitle>
                    <div className="flex items-center text-sm text-muted-foreground bg-background px-3 py-1 rounded-full border border-border w-fit">
                      <Calendar className="w-3 h-3 mr-2" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  <div className="flex items-center text-muted-foreground font-medium">
                    <span className="text-foreground">{exp.company}</span>
                    <span className="mx-2">•</span>
                    <span className="flex items-center text-sm">
                      <MapPin className="w-3 h-3 mr-1" /> {exp.location}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
