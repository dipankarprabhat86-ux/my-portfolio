import * as React from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { portfolioData } from "@/data/portfolio";

export function ExperienceSection() {
  const { experiences } = portfolioData;

  return (
    <section id="experience" className="py-20 sm:py-28 border-t border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-950/30">
      <Container>
        <SectionHeading
          eyebrow="Career Timeline"
          title="Work Experience"
          description="My professional history, engineering responsibilities, and key organizational contributions."
        />

        <div className="relative border-l border-zinc-200 dark:border-zinc-800 ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-10">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative">
              {/* Timeline marker icon */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex h-7 w-7 items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-blue-600 dark:text-blue-400 shadow-xs">
                <Briefcase className="h-3.5 w-3.5" />
              </div>

              {/* Experience Card */}
              <Card interactive className="p-6 sm:p-8">
                <CardHeader className="p-0 pb-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <CardTitle className="text-lg sm:text-xl">
                        {exp.role}
                      </CardTitle>
                      <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mt-0.5">
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {exp.period}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-0 space-y-4">
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Measurable achievements */}
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">
                      Key Contributions & Impact:
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((item, aIdx) => (
                        <li
                          key={aIdx}
                          className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 flex items-start gap-2"
                        >
                          <span className="text-blue-600 dark:text-blue-400 font-bold">
                            ›
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies tag group */}
                  <div className="pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech, tIdx) => (
                        <Badge key={tIdx} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
