import * as React from "react";
import { Layers } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { portfolioData } from "@/data/portfolio";

export function SkillsSection() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-20 sm:py-28 border-t border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-950/30">
      <Container>
        <SectionHeading
          eyebrow="Capabilities"
          title="Skills & Technical Proficiencies"
          description="A breakdown of my technical stack, development tools, and engineering standards."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((category, index) => (
            <Card
              key={index}
              interactive
              className="flex flex-col justify-between"
            >
              <div>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Layers className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    <CardTitle className="text-base sm:text-lg">
                      {category.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-xs sm:text-sm">
                    {category.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, sIdx) => (
                      <Badge
                        key={sIdx}
                        variant="secondary"
                        className="text-xs hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
