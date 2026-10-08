import Link from "next/link";
import { ArrowRight, Briefcase, Code2, Mail, Sparkles } from "lucide-react";

import { HeroSection } from "@/components/sections/HeroSection";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { portfolioData } from "@/data/portfolio";

export const metadata = {
  title: "Dipankar Prabhat | Java Developer",
  description:
    "Portfolio of Dipankar Prabhat, a Java developer and aspiring backend developer.",
};

export default function Home() {
  const { profile, skills, projects, experiences } = portfolioData;

  const featuredProject = projects.find((project) => project.featured) ?? projects[0];
  const latestExperience = experiences[0];

  return (
    <main id="main-content" className="flex-1">
      {/* Hero */}
      <HeroSection />

      {/* Home Summary */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
              <Sparkles className="h-3.5 w-3.5" />
              {profile.availabilityStatus}
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
              Building practical software with Java and backend technologies.
            </h2>

            <p className="mt-5 text-base leading-7 text-zinc-600 dark:text-zinc-400">
              {profile.bio[0]}
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Button href="/about" variant="primary">
                More About Me
                <ArrowRight className="h-4 w-4" />
              </Button>

              <Button href="/projects" variant="outline">
                View Projects
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Quick Stats */}
      <section className="border-y border-zinc-200/70 bg-zinc-50/50 py-12 dark:border-zinc-800/70 dark:bg-zinc-900/30">
        <Container>
          <div className="grid gap-4 sm:grid-cols-3">
            {profile.stats.map((stat) => (
              <Card key={stat.label} className="p-6 text-center">
                <p className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
                  {stat.value}
                </p>

                <p className="mt-2 text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                  {stat.label}
                </p>

                <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-500">
                  {stat.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Skills Preview */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-3 flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400">
                <Code2 className="h-4 w-4" />
                Skills
              </div>

              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-3xl">
                Technologies I&apos;m working with
              </h2>
            </div>

            <Link
              href="/skills"
              className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 transition-colors hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400"
            >
              View all skills
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((category) => (
              <Card key={category.title} className="p-5">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                  {category.title}
                </h3>

                <div className="mt-4 flex flex-wrap gap-2">
                  {category.skills.slice(0, 5).map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md bg-zinc-100 px-2.5 py-1 text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Project */}
      {featuredProject && (
        <section className="border-y border-zinc-200/70 bg-zinc-50/50 py-16 dark:border-zinc-800/70 dark:bg-zinc-900/30 sm:py-20">
          <Container>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="mb-3 flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400">
                  <Briefcase className="h-4 w-4" />
                  Featured Project
                </div>

                <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-3xl">
                  {featuredProject.title}
                </h2>
              </div>

              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 transition-colors hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400"
              >
                View all projects
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <Card className="mt-8 p-6 sm:p-8">
              <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
                {featuredProject.tagline}
              </p>

              <p className="mt-4 text-sm leading-6 text-zinc-500 dark:text-zinc-500">
                {featuredProject.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {featuredProject.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md border border-zinc-200 px-2.5 py-1 text-xs text-zinc-600 dark:border-zinc-800 dark:text-zinc-400"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </Card>
          </Container>
        </section>
      )}

      {/* Experience Preview */}
      {latestExperience && (
        <section className="py-16 sm:py-20">
          <Container>
            <div className="mx-auto max-w-3xl">
              <div className="mb-3 flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400">
                <Briefcase className="h-4 w-4" />
                Experience
              </div>

              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-3xl">
                {latestExperience.role}
              </h2>

              <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-500">
                {latestExperience.company} · {latestExperience.period}
              </p>

              <p className="mt-5 leading-7 text-zinc-600 dark:text-zinc-400">
                {latestExperience.description}
              </p>

              <Link
                href="/experience"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-zinc-700 transition-colors hover:text-blue-600 dark:text-zinc-300 dark:hover:text-blue-400"
              >
                View experience
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Container>
        </section>
      )}

      {/* Contact CTA */}
      <section className="border-t border-zinc-200/70 bg-zinc-50/50 py-16 dark:border-zinc-800/70 dark:bg-zinc-900/30 sm:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Mail className="mx-auto h-8 w-8 text-blue-600 dark:text-blue-400" />

            <h2 className="mt-4 text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-3xl">
              Let&apos;s build something together.
            </h2>

            <p className="mt-4 leading-7 text-zinc-600 dark:text-zinc-400">
              I&apos;m open to opportunities, software projects, and meaningful
              collaborations.
            </p>

            <div className="mt-7">
              <Button href="/contact" variant="primary">
                Get In Touch
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}