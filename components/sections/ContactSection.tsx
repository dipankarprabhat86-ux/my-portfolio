"use client";

import * as React from "react";
import { Mail, Copy, Check, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { portfolioData } from "@/data/portfolio";

export function ContactSection() {
  const { profile } = portfolioData;
  const [copied, setCopied] = React.useState(false);
  const [formSubmitted, setFormSubmitted] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          subject: formData.get("subject"),
          message: formData.get("message"),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message.");
      }

      setFormSubmitted(true);
      form.reset();
    } catch (error) {
      console.error("Contact form submission error:", error);
      alert("Unable to send your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 border-t border-zinc-200/80 dark:border-zinc-800/80">
      <Container>
        <SectionHeading
          eyebrow="Get In Touch"
          title="Contact & Opportunities"
          description="Whether you have an upcoming role, project inquiry, or just want to discuss software engineering, my inbox is open."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Direct channels & details */}
          <div className="lg:col-span-5 space-y-6">
            <Card className="bg-zinc-50/70 dark:bg-zinc-900/40 p-6 sm:p-8">
              <CardHeader className="p-0 pb-4">
                <CardTitle className="text-base sm:text-lg">
                  Direct Inquiries
                </CardTitle>
              </CardHeader>

              <CardContent className="p-0 space-y-6">
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  The fastest way to reach me is via email. Click below to copy
                  my email or open your default mail client.
                </p>

                {/* Email copy card */}
                <div className="flex items-center justify-between rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-3 sm:p-4">
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    <Mail className="h-4 w-4 text-blue-600 dark:text-blue-400 shrink-0" />
                    <span className="font-mono text-xs sm:text-sm truncate text-zinc-800 dark:text-zinc-200">
                      {profile.email}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    aria-label="Copy email address to clipboard"
                    className="inline-flex items-center gap-1.5 rounded px-2.5 py-1 text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-600" />
                        <span className="text-emerald-600 font-mono text-[11px]">
                          Copied!
                        </span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span className="font-mono text-[11px]">Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Direct profiles */}
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 block">
                    Professional Networks
                  </span>
                  <div className="flex flex-col gap-2">
                    <a
                      href="https://github.com/dipankarprabhat86-ux"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100/70 dark:hover:bg-zinc-800/60 transition-colors text-sm text-zinc-800 dark:text-zinc-200"
                    >
                      <div className="flex items-center gap-2">
                        <GithubIcon className="h-4 w-4 text-zinc-700 dark:text-zinc-300" />
                        <span>GitHub Profile</span>
                      </div>
                      <span className="text-xs text-zinc-400 font-mono">↗</span>
                    </a>

                    <a
                      href="https://www.linkedin.com/in/dipankar-prabhat-922a2a396/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100/70 dark:hover:bg-zinc-800/60 transition-colors text-sm text-zinc-800 dark:text-zinc-200"
                    >
                      <div className="flex items-center gap-2">
                        <LinkedinIcon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        <span>LinkedIn Profile</span>
                      </div>
                      <span className="text-xs text-zinc-400 font-mono">↗</span>
                    </a>
                  </div>
                </div>

                <div className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                  Location: {profile.location}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Interactive Contact Form */}
          <div className="lg:col-span-7">
            <Card className="p-6 sm:p-8">
              <CardHeader className="p-0 pb-6">
                <CardTitle className="text-lg sm:text-xl">
                  Send a Message
                </CardTitle>
              </CardHeader>

              <CardContent className="p-0">
                {formSubmitted ? (
                  <div className="rounded-lg border border-emerald-200 dark:border-emerald-800/80 bg-emerald-50/50 dark:bg-emerald-950/20 p-6 text-center space-y-2">
                    <Check className="h-8 w-8 text-emerald-600 dark:text-emerald-400 mx-auto" />
                    <h4 className="text-base font-semibold text-emerald-900 dark:text-emerald-200">
                      Message Received!
                    </h4>
                    <p className="text-xs sm:text-sm text-emerald-700 dark:text-emerald-400 max-w-sm mx-auto">
                      Thank you for reaching out. I will respond to your inquiry
                      promptly.
                    </p>
                    <div className="pt-2">
                      <Button
                        type="button"
                        variant="secondary"
                        size="sm"
                        onClick={() => setFormSubmitted(false)}
                      >
                        Send another message
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label
                          htmlFor="name"
                          className="block text-xs font-medium text-zinc-700 dark:text-zinc-300"
                        >
                          Your Name
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          placeholder="e.g. Alex Morgan"
                          className="w-full rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-3.5 py-2.5 text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 transition-colors"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label
                          htmlFor="email"
                          className="block text-xs font-medium text-zinc-700 dark:text-zinc-300"
                        >
                          Your Email
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="alex@example.com"
                          className="w-full rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-3.5 py-2.5 text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="subject"
                        className="block text-xs font-medium text-zinc-700 dark:text-zinc-300"
                      >
                        Subject
                      </label>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        placeholder="Inquiry regarding Engineering Role / Project"
                        className="w-full rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-3.5 py-2.5 text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="message"
                        className="block text-xs font-medium text-zinc-700 dark:text-zinc-300"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        placeholder="Tell me about your team, project, or timeline..."
                        className="w-full rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-3.5 py-2.5 text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 transition-colors resize-y"
                      />
                    </div>

                    <div className="pt-2">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        variant="primary"
                        size="md"
                        className="w-full sm:w-auto gap-2"
                      >
                        <span>
                          {isSubmitting ? "Sending..." : "Send Message"}
                        </span>
                        <Send className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}
