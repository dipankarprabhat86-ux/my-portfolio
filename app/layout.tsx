import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { portfolioData } from "@/data/portfolio";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${portfolioData.profile.name} | ${portfolioData.profile.role}`,
  description: `${portfolioData.profile.name} - ${portfolioData.profile.role}. ${portfolioData.profile.tagline}`,
  keywords: [
    "Portfolio",
    "Frontend Engineer",
    "Software Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
  ],
  authors: [{ name: portfolioData.profile.name }],
  creator: portfolioData.profile.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    title: `${portfolioData.profile.name} | ${portfolioData.profile.role}`,
    description: portfolioData.profile.tagline,
    siteName: `${portfolioData.profile.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolioData.profile.name} | ${portfolioData.profile.role}`,
    description: portfolioData.profile.tagline,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Anti-FOUC script for dark mode detection */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const stored = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (stored === 'dark' || (!stored && prefersDark)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors selection:bg-blue-600 selection:text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
