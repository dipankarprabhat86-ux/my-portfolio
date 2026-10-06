export interface SocialLink {
  name: string;
  url: string;
  icon: "github" | "linkedin" | "mail" | "twitter" | "file-text";
  ariaLabel: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  details?: string;
}

export interface AboutHighlight {
  label: string;
  value: string;
  description: string;
}

export interface PortfolioData {
  profile: {
    name: string;
    role: string;
    location: string;
    availabilityStatus: string;
    tagline: string;
    bio: string[];
    email: string;
    resumeUrl: string;
    stats: AboutHighlight[];
    socials: SocialLink[];
  };
  skills: SkillCategory[];
  projects: Project[];
  experiences: Experience[];
  education: Education[];
}
