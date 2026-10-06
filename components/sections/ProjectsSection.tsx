import * as React from "react";
import { ExternalLink, CheckCircle } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { portfolioData } from "@/data/portfolio";

export function ProjectsSection() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-20 sm:py-28 border-t border-zinc-200/80 dark:border-zinc-800/80">
      <Container>
        <SectionHeading
          eyebrow="Case Studies"
          title="Featured Projects"
          description="A selection of applications demonstrating technical architecture, user experience design, and measurable impact."
        />

        <div className="grid grid-cols-1 gap-8 lg:gap-10">
          {projects.map((project, idx) => (
            <Card
              key={project.id}
              interactive
              className="flex flex-col lg:flex-row overflow-hidden border-zinc-200 dark:border-zinc-800 p-0"
            >
              {/* Left/Top: Project Preview Placeholder & Numbering */}
              <div className="lg:w-2/5 bg-zinc-100 dark:bg-zinc-950 p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-zinc-200 dark:border-zinc-800">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-zinc-400 dark:text-zinc-600">
                      0{idx + 1} • CASE STUDY
                    </span>
                    <Badge variant="accent">Featured Project</Badge>
                  </div>

                  {/* Visual mockup placeholder */}
                  <div className="mt-6 flex flex-col items-center justify-center rounded-lg border border-dashed border-zinc-300 dark:border-zinc-800 bg-white/40 dark:bg-zinc-900/40 p-8 text-center min-h-[160px]">
                    <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
                      [ PROJECT SCREENSHOT / PREVIEW ]
                    </span>
                    <span className="text-[11px] text-zinc-400 dark:text-zinc-500 mt-1">
                      Replace with preview image or mockup
                    </span>
                  </div>
                </div>

                {/* Tech stack tags */}
                <div className="mt-6">
                  <span className="block text-[11px] font-mono text-zinc-500 uppercase tracking-wider mb-2">
                    Technologies
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, tIdx) => (
                      <Badge key={tIdx} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right/Bottom: Project Details & Impact */}
              <div className="lg:w-3/5 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <CardHeader className="p-0 pb-3">
                    <CardTitle className="text-xl sm:text-2xl">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-sm font-medium text-blue-600 dark:text-blue-400 mt-1">
                      {project.tagline}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="p-0 mt-3 space-y-4">
                    <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Technical Highlights */}
                    <div className="pt-2">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">
                        Key Engineering Highlights:
                      </h4>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, hIdx) => (
                          <li
                            key={hIdx}
                            className="flex items-start gap-2 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300"
                          >
                            <CheckCircle className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </div>

                {/* Project Links / CTAs */}
                <div className="mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-800 flex flex-wrap items-center gap-3">
                  {project.liveUrl && (
                    <Button
                      href={project.liveUrl}
                      external
                      variant="primary"
                      size="sm"
                      className="gap-1.5"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </Button>
                  )}

                  {project.githubUrl && (
                    <Button
                      href={project.githubUrl}
                      external
                      variant="outline"
                      size="sm"
                      className="gap-1.5"
                    >
                      <GithubIcon className="h-3.5 w-3.5" />
                      <span>Source Code</span>
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
