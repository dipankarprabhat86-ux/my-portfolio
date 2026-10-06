import * as React from "react";
import Image from "next/image";
import { ArrowDown, FileText, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { portfolioData } from "@/data/portfolio";

export function HeroSection() {
  const { profile } = portfolioData;

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case "github":
        return <GithubIcon className="h-4 w-4" />;
      case "linkedin":
        return <LinkedinIcon className="h-4 w-4" />;
      case "mail":
        return <Mail className="h-4 w-4" />;
      default:
        return null;
    }
  };

  return (
    <section className="relative overflow-hidden pt-10 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28">
      {/* Minimal subtle background grid */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(currentColor 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column (Desktop) / Main Content */}
          <div className="lg:col-span-7 flex flex-col items-start order-2 lg:order-1">
            {/* Availability Status Badge */}
            <div className="mb-5 sm:mb-6 inline-flex items-center">
              <Badge variant="status" className="gap-2 px-3 py-1 font-mono text-xs">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span>{profile.availabilityStatus}</span>
              </Badge>
            </div>

            {/* Name & Primary Role */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.1]">
              Hi, I&apos;m{" "}
              <span className="text-blue-600 dark:text-blue-400">
                {profile.name}
              </span>
            </h1>

            <p className="mt-3 font-mono text-base sm:text-lg font-medium text-zinc-700 dark:text-zinc-300">
              {profile.role} • {profile.location}
            </p>

            {/* Core Value Proposition / Tagline */}
            <p className="mt-5 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl">
              {profile.tagline}
            </p>

            {/* Call to Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <Button href="#projects" variant="primary" size="lg" className="gap-2">
                <span>View Featured Projects</span>
                <ArrowDown className="h-4 w-4" />
              </Button>

              <Button href="#contact" variant="secondary" size="lg">
                Contact Me
              </Button>

              <Button
                href={profile.resumeUrl}
                external
                variant="outline"
                size="lg"
                className="gap-2"
              >
                <FileText className="h-4 w-4" />
                <span>Resume</span>
              </Button>
            </div>

            {/* Quick Social Proof Links */}
            <div className="mt-10 flex items-center gap-3 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80 w-full">
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                Connect:
              </span>
              <div className="flex items-center gap-2">
                {profile.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.ariaLabel}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                  >
                    {getSocialIcon(social.icon)}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Hero Profile Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-center order-1 lg:order-2">
            <div className="relative w-full max-w-[240px] sm:max-w-[300px] lg:max-w-[360px] xl:max-w-[380px]">
              {/* Subtle ambient backlight glow */}
              <div
                className="pointer-events-none absolute -inset-4 sm:-inset-6 rounded-full bg-gradient-to-tr from-blue-500/20 via-indigo-500/10 to-transparent blur-3xl -z-10"
                aria-hidden="true"
              />

              {/* Natural shape image without circular crop */}
              <div className="relative flex items-center justify-center">
                <Image
                  src="/profile.png"
                  alt="Dipankar Prabhat"
                  width={1550}
                  height={1810}
                  priority
                  sizes="(max-width: 640px) 240px, (max-width: 1024px) 300px, 380px"
                  className="w-full h-auto object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.12)] dark:drop-shadow-[0_16px_32px_rgba(0,0,0,0.5)] select-none transition-transform duration-300 hover:scale-[1.01]"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
