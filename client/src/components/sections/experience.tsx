import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="border-t border-border bg-muted/20">
      <div className="container">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Experience</h2>
            <p className="text-muted-foreground">Professional journey and internships.</p>
          </div>

          <div className="space-y-8">
            <Card className="border-none shadow-none bg-transparent">
              <CardHeader className="p-0 mb-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl font-bold mb-1">Academic Intern</CardTitle>
                    <div className="flex items-center text-foreground font-semibold">
                      VIT Chennai
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Jun 2022 – Dec 2023
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      Chennai, India
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <ul className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-primary mt-2">●</span>
                    <span>Assisted in coursework related to <strong className="text-foreground">Object-Oriented Programming (OOP)</strong> and <strong className="text-foreground">Data Structures & Algorithms (DSA)</strong>.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary mt-2">●</span>
                    <span>Gained hands-on experience with <strong className="text-foreground">Java</strong> development and software engineering principles within an academic environment.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary mt-2">●</span>
                    <span>Collaborated with faculty to solve complex algorithmic problems and improve student code efficiency.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
