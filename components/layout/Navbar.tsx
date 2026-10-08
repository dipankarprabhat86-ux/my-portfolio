"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, FileText } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { portfolioData } from "@/data/portfolio";

const NAV_LINKS = [
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Accessible skip link for keyboard/screen-reader navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>

      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          scrolled
            ? "border-b border-zinc-200/80 dark:border-zinc-800/80 bg-background/85 backdrop-blur-md shadow-xs"
            : "border-b border-transparent bg-background/50 backdrop-blur-xs"
        }`}
      >
        <Container>
          <div className="flex h-16 items-center justify-between">
            {/* Brand Logo / Monogram */}
            <Link
              href="/"
              className="flex items-center gap-2 group font-mono text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded px-1"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-950 text-xs font-bold transition-transform group-hover:scale-105">
                /&gt;
              </span>

              <span className="tracking-tight hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                {portfolioData.profile.name}
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav
              aria-label="Main Navigation"
              className="hidden md:flex items-center gap-1"
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-md px-3 py-1.5 text-sm font-medium text-zinc-600 dark:text-zinc-400 transition-colors hover:text-zinc-950 dark:hover:text-zinc-50 hover:bg-zinc-100/70 dark:hover:bg-zinc-800/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Right utilities */}
            <div className="flex items-center gap-2 sm:gap-3">
              <ThemeToggle />

              <div className="hidden sm:inline-flex">
                <Button
                  href={portfolioData.profile.resumeUrl}
                  external
                  variant="outline"
                  size="sm"
                  className="gap-1.5"
                >
                  <FileText className="h-3.5 w-3.5" />
                  <span>Resume</span>
                </Button>
              </div>

              {/* Mobile Menu Hamburger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open navigation menu"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 md:hidden hover:bg-zinc-100 dark:hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                <Menu className="h-4 w-4" />
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={NAV_LINKS}
        resumeUrl={portfolioData.profile.resumeUrl}
      />
    </>
  );
}