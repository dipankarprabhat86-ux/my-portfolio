import * as React from "react";
import { GraduationCap, Code2, Sparkles, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { portfolioData } from "@/data/portfolio";

export function AboutSection() {
  const { profile, education } = portfolioData;

  const corePrinciples = [
    {
      title: "Performance First",
      description:
        "Optimizing Core Web Vitals, minimal client bundle sizes, and snappy rendering pipelines.",
    },
    {
      title: "Accessible & Responsive",
      description:
        "Engineered for all users with semantic HTML, keyboard-navigable controls, and WCAG AA standards.",
    },
    {
      title: "Maintainable Systems",
      description:
        "Clean component architecture, typed interfaces, and scalable design patterns that teams love working with.",
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 border-t border-zinc-200/80 dark:border-zinc-800/80">
      <Container>
        <SectionHeading
          eyebrow="Overview"
          title="About & Engineering Philosophy"
          description="A look at my professional focus, development philosophy, and foundational background."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Bio text column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="prose prose-zinc dark:prose-invert max-w-none space-y-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {profile.bio.map((paragraph, index) => (
                <p key={index} className="bg-zinc-50/50 dark:bg-zinc-900/30 p-4 rounded-lg border border-dashed border-zinc-200 dark:border-zinc-800">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Core Principles */}
            <div className="pt-4">
              <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 mb-4 flex items-center gap-2">
                <Code2 className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                <span>How I Approach Engineering</span>
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {corePrinciples.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 rounded-lg border border-zinc-200/80 dark:border-zinc-800/80 bg-white/60 dark:bg-zinc-900/40 p-4"
                  >
                    <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column: Highlights bento & Education */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick stats bento */}
            <div className="grid grid-cols-1 gap-4">
              {profile.stats.map((stat, i) => (
                <Card key={i} className="bg-zinc-50/70 dark:bg-zinc-900/50">
                  <div className="flex items-baseline justify-between">
                    <span className="font-mono text-3xl font-extrabold text-blue-600 dark:text-blue-400">
                      {stat.value}
                    </span>
                    <Sparkles className="h-4 w-4 text-zinc-400" />
                  </div>
                  <h4 className="mt-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                    {stat.label}
                  </h4>
                  <p className="mt-0.5 text-xs text-zinc-500 dark:text-zinc-400">
                    {stat.description}
                  </p>
                </Card>
              ))}
            </div>

            {/* Education */}
            {education.length > 0 && (
              <Card className="border-zinc-200 dark:border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <GraduationCap className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    <span>Education & Qualifications</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {education.map((edu) => (
                    <div key={edu.id} className="text-sm">
                      <p className="font-semibold text-zinc-900 dark:text-zinc-100">
                        {edu.degree}
                      </p>
                      <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm">
                        {edu.institution}
                      </p>
                      <p className="text-xs font-mono text-zinc-500 mt-1">
                        {edu.period}
                      </p>
                      {edu.details && (
                        <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                          {edu.details}
                        </p>
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
