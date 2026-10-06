import { PortfolioData } from "@/types/portfolio";

export const portfolioData: PortfolioData = {
  profile: {
    name: "Dipankar Prabhat",
    role: "Java Developer | Aspiring Backend Developer",
    location: "Muzaffarpur, Bihar, India",
    availabilityStatus: "Available for new opportunities",
    tagline:
      "Building reliable Java applications, exploring backend development, and turning ideas into practical software.",
    bio: [
      "I am a Java developer and computer science student with a growing foundation in Java, C, HTML, and problem-solving. I enjoy building practical applications that help me understand how software works behind the scenes. My current focus is strengthening my Java fundamentals and developing backend development skills through real-world projects.",
      "I believe in learning by building, writing clean and understandable code, and continuously improving my problem-solving skills. I am currently working on projects such as a Java-based Student Management System while exploring databases, APIs, backend technologies, and software development best practices.",
    ],
    email: "dipankarprabhat86@gmail.com",
    resumeUrl: "/resume.pdf", // Place your resume PDF in the public folder as resume.pdf
    stats: [
      {
        label: "Programming Experience",
        value: "1+",
        description: "Years of learning and building",
      },
      {
        label: "Projects Built",
        value: "1",
        description: "Academic and personal projects",
      },
      {
        label: "Primary Focus",
        value: "Java",
        description: "Backend development and problem solving",
      },
    ],
    socials: [
      {
        name: "GitHub",
        url: "https://github.com/dipankarprabhat86-ux",
        icon: "github",
        ariaLabel: "Visit GitHub Profile",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/dipankar-prabhat-922a2a396/",
        icon: "linkedin",
        ariaLabel: "Visit LinkedIn Profile",
      },
      {
        name: "Email",
        url: "mailto:dipankarprabhat86@gmail.com",
        icon: "mail",
        ariaLabel: "Send Email",
      },
    ],
  },
  skills: [
    {
      title: "Programming",
      description: "Building a strong foundation in programming and object-oriented development",
      skills: [
        "Java",
        "C",
        "Object-Oriented Programming",
        "Data Structures & Algorithms",
        "Problem Solving",
        "Recursion",
        "Arrays & Collections",
      ],
    },
    {
      title: "Web Development",
      description: "Creating structured and responsive web pages using modern web fundamentals",
      skills: [
        "HTML5",
        "Semantic HTML",
        "CSS3",
        "JavaScript Basics",
        "Forms & Tables",
        "Responsive Web Design",
      ],
    },
    {
      title: "Backend & Databases",
      description: "Exploring backend development and learning how applications manage data",
      skills: [
        "Java Backend Development",
        "SQL",
        "Database Fundamentals",
        "REST API Fundamentals",
        "CRUD Operations",
        "Data Modeling",
      ],
    },
    {
      title: "Tools & Development",
      description: "Using modern development tools to build, test, and manage projects",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Java Development Tools",
        "Debugging",
        "Command Line Basics",
      ],
    },
  ],
  projects: [
    {
      id: "project-1",
      title: "Student Management System",
      tagline: "A Java-based application for managing student records, marks, grades, averages, and student operations.",
      description:
        "A console-based Student Management System developed in Java to practice object-oriented programming and real-world application design. The application allows users to add, display, update, and delete student records while automatically calculating total marks, averages, grades, and topper information. The project uses classes, constructors, encapsulation, ArrayList, methods, loops, conditional logic, and Scanner-based input handling.",
      highlights: [
        "Implemented complete CRUD operations for student records",
        "Automated total marks, average, grade, and topper calculations",
        "Used Java OOP concepts and ArrayList for structured data management",
      ],
      technologies: [
        "Java",
        "OOP",
        "ArrayList",
        "Collections",
        "Git",
        "GitHub",
      ],
      githubUrl: "https://github.com/dipankarprabhat86-ux",
      liveUrl: "",
      featured: true,
    },
    // {
    //   id: "project-2",
    //   title: "[PROJECT 2: WEB APPLICATION TITLE]",
    //   tagline: "[Brief 1-sentence value proposition of Project 2]",
    //   description:
    //     "[Detailed description of Project 2: Explain the problem solved, architectural decisions, and key technical challenges overcome.]",
    //   highlights: [
    //     "[Key impact or technical achievement 1: e.g. Integrated clean RESTful/GraphQL APIs]",
    //     "[Key impact or technical achievement 2: e.g. Implemented secure client/server authentication]",
    //     "[Key impact or technical achievement 3: e.g. Designed clean accessible UI components]",
    //   ],
    //   technologies: ["React", "TypeScript", "Node.js", "Tailwind CSS"],
    //   githubUrl: "https://github.com/[YOUR GITHUB]/[PROJECT-2-REPO]",
    //   liveUrl: "https://[PROJECT-2-DEMO-URL]",
    //   featured: true,
    // },
    // {
    //   id: "project-3",
    //   title: "[PROJECT 3: FULL-STACK / DEVELOPER TOOL]",
    //   tagline: "[Brief 1-sentence value proposition of Project 3]",
    //   description:
    //     "[Detailed description of Project 3: Explain the problem solved, architectural decisions, and key technical challenges overcome.]",
    //   highlights: [
    //     "[Key impact or technical achievement 1: e.g. Automated recurring developer workflow]",
    //     "[Key impact or technical achievement 2: e.g. Built reusable component library or CLI]",
    //     "[Key impact or technical achievement 3: e.g. Zero-layout-shift responsive performance]",
    //   ],
    //   technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    //   githubUrl: "https://github.com/[YOUR GITHUB]/[PROJECT-3-REPO]",
    //   liveUrl: "https://[PROJECT-3-DEMO-URL]",
    //   featured: true,
    // },
  ],
  experiences: [
    {
      id: "exp-1",
      role: "Java Developer — Student Project",
      company: "Personal Project",
      location: "Muzaffarpur, Bihar, India",
      period: "2026 - Present",
      description:
        "Designed and developed a console-based Student Management System in Java to apply object-oriented programming concepts and build practical software development experience.",
      achievements: [
        "Implemented student record management with add, display, update, and delete operations.",
        "Automated calculation of total marks, averages, grades, and topper information.",
        "Applied Java OOP concepts, constructors, encapsulation, methods, ArrayList, loops, and conditional logic.",
        "Designed the application with reusable methods to keep student management operations organized and maintainable.",
      ],
      technologies: [
        "Java",
        "OOP",
        "ArrayList",
        "Collections",
        "Git",
        "GitHub",
      ],
    },
    // {
    //   id: "exp-2",
    //   role: "[PREVIOUS ROLE: e.g. Frontend Engineer]",
    //   company: "[COMPANY / CLIENT NAME 2]",
    //   location: "[LOCATION / REMOTE]",
    //   period: "[START DATE] - [END DATE]",
    //   description:
    //     "[Overview of your role, team scope, and primary engineering responsibilities.]",
    //   achievements: [
    //     "[Measurable achievement 1: Engineered core features and user flows used by thousands of daily active users.]",
    //     "[Measurable achievement 2: Refactored legacy codebase into modular, reusable component patterns, cutting technical debt.]",
    //     "[Measurable achievement 3: Improved test coverage and CI/CD pipelines to ensure release reliability.]",
    //   ],
    //   technologies: ["JavaScript", "React", "CSS3 / Sass", "REST APIs"],
    // },
  ],
  education: [
    {
      id: "edu-1",
      degree: "Bachelor of Technology (B.Tech) in Information Technology",
      institution: "Muzaffarpur Institute of Technology (MIT), Muzaffarpur",
      period: "2025 - Present",
      details: "Currently pursuing B.Tech in Information Technology. Focus areas include Java, C, Object-Oriented Programming, Data Structures, Web Development, Database Fundamentals, and Problem Solving.",
    },
  ],
};
