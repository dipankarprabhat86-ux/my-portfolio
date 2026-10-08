"use client";

import * as React from "react";
import Link from "next/link";
import { X, FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface NavLink {
  name: string;
  href: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: NavLink[];
  resumeUrl: string;
}

export function MobileMenu({
  isOpen,
  onClose,
  navLinks,
  resumeUrl,
}: MobileMenuProps) {
  // Lock body scroll when mobile menu is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close on Escape key press
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
      className="fixed inset-0 z-50 flex flex-col bg-background/95 backdrop-blur-md md:hidden"
    >
      <div className="flex h-16 items-center justify-between border-b border-zinc-200 dark:border-zinc-800 px-4 sm:px-6">
        <span className="font-mono text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
          Navigation
        </span>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close navigation menu"
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto px-6 py-8">
        <ul className="flex flex-col space-y-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={onClose}
                className="flex items-center justify-between py-3 text-lg font-medium text-zinc-800 dark:text-zinc-200 hover:text-blue-600 dark:hover:text-blue-400 border-b border-zinc-100 dark:border-zinc-900 transition-colors"
              >
                <span>{link.name}</span>
                <ArrowRight className="h-4 w-4 text-zinc-400" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-8 pt-6">
          <Button
            href={resumeUrl}
            external
            variant="primary"
            size="lg"
            className="w-full gap-2"
          >
            <FileText className="h-4 w-4" />
            Download Resume
          </Button>
        </div>
      </nav>
    </div>
  );
}