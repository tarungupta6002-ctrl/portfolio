export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  image: string;
  gradient: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl: string;
  location: string;
  period: string;
  isCurrent: boolean;
  isRemote: boolean;
  points: string[];
  skills: string[];
}

export interface TechSkill {
  name: string;
  category: "Frontend" | "Backend" | "Tools";
  iconName: string;
  color: string;
  glowColor: string;
}

export const portfolioData = {
  personal: {
    name: "Tarun Gupta",
    role: "Full Stack Developer",
    tagline: "Creating responsive, fast, and visually polished web experiences with modern technologies.",
    location: "India",
    email: "tarungupta07.dev@gmail.com",
    phone: "+91 9260937621",
    statusBadge: "Open to Work",
    locationBadge: "Remote Ready",
    resumeUrl: "#",
    avatar: "/tarun.jpg",
    web3formsKey: "dd6f7148-6e8b-4a64-97e1-f7fe059d6203",
    aboutBio:
      "I'm a Full-Stack Developer passionate about building robust, high-performance web applications using React, Next.js, TypeScript, Node.js, and modern databases. I leverage AI-augmented engineering workflows to prototype rapidly, scaffold architectures, and write well-tested code without compromising core CS fundamentals. From architecting sub-50ms WebSockets and client-side AES-GCM encryption in ChatHub to deploying cloud CI/CD pipelines, I bring deep curiosity and high execution velocity to every project I build.",
    highlights: [
      {
        title: "Full-Stack Craft",
        description: "End-to-end web architecture & design",
        icon: "Code2",
      },
      {
        title: "AI-Augmented",
        description: "High-velocity shipping with modern AI tooling",
        icon: "Zap",
      },
      {
        title: "Remote Ready",
        description: "Available for global teams & fast collaboration",
        icon: "Globe",
      },
    ],
  },
  socials: {
    github: "https://github.com/tarungupta6002-ctrl",
    linkedin: "https://www.linkedin.com/in/tarun-gupta-847209329/",
    twitter: "https://x.com/tarungupta6002",
  },
  skills: [
    // Frontend
    { name: "React 19", category: "Frontend", iconName: "Atom", color: "#61DAFB", glowColor: "rgba(97, 218, 251, 0.4)" },
    { name: "Next.js 15", category: "Frontend", iconName: "Layers", color: "#FFFFFF", glowColor: "rgba(255, 255, 255, 0.3)" },
    { name: "TypeScript", category: "Frontend", iconName: "Code", color: "#3178C6", glowColor: "rgba(49, 120, 198, 0.4)" },
    { name: "JavaScript", category: "Frontend", iconName: "FileCode", color: "#F7DF1E", glowColor: "rgba(247, 223, 30, 0.4)" },
    { name: "Tailwind CSS", category: "Frontend", iconName: "Palette", color: "#06B6D4", glowColor: "rgba(6, 182, 212, 0.4)" },
    { name: "HTML5 / CSS3", category: "Frontend", iconName: "Layout", color: "#E34F26", glowColor: "rgba(227, 79, 38, 0.4)" },
    { name: "Framer Motion", category: "Frontend", iconName: "Sparkles", color: "#0055FF", glowColor: "rgba(0, 85, 255, 0.4)" },
    { name: "Zustand", category: "Frontend", iconName: "Boxes", color: "#B87333", glowColor: "rgba(184, 115, 51, 0.4)" },
    
    // Backend
    { name: "Node.js", category: "Backend", iconName: "Server", color: "#339933", glowColor: "rgba(51, 153, 51, 0.4)" },
    { name: "Express.js", category: "Backend", iconName: "Cpu", color: "#FFFFFF", glowColor: "rgba(255, 255, 255, 0.3)" },
    { name: "PostgreSQL", category: "Backend", iconName: "Database", color: "#4169E1", glowColor: "rgba(65, 105, 225, 0.4)" },
    { name: "MongoDB", category: "Backend", iconName: "Database", color: "#47A248", glowColor: "rgba(71, 162, 72, 0.4)" },
    { name: "Prisma ORM", category: "Backend", iconName: "Share2", color: "#2D3748", glowColor: "rgba(100, 116, 139, 0.4)" },
    { name: "REST & GraphQL", category: "Backend", iconName: "Workflow", color: "#E10098", glowColor: "rgba(225, 0, 152, 0.4)" },
    { name: "Better Auth", category: "Backend", iconName: "ShieldCheck", color: "#10B981", glowColor: "rgba(16, 185, 129, 0.4)" },
    { name: "Socket.io", category: "Backend", iconName: "Radio", color: "#010101", glowColor: "rgba(255, 255, 255, 0.3)" },

    // Tools
    { name: "Git & GitHub", category: "Tools", iconName: "GitBranch", color: "#F05032", glowColor: "rgba(240, 80, 50, 0.4)" },
    { name: "VS Code", category: "Tools", iconName: "Terminal", color: "#007ACC", glowColor: "rgba(0, 122, 204, 0.4)" },
    { name: "Docker", category: "Tools", iconName: "Container", color: "#2496ED", glowColor: "rgba(36, 150, 237, 0.4)" },
    { name: "Postman", category: "Tools", iconName: "Send", color: "#FF6C37", glowColor: "rgba(255, 108, 55, 0.4)" },
    { name: "Vite", category: "Tools", iconName: "Zap", color: "#646CFF", glowColor: "rgba(100, 108, 255, 0.4)" },
    { name: "Vercel", category: "Tools", iconName: "Triangle", color: "#FFFFFF", glowColor: "rgba(255, 255, 255, 0.4)" },
    { name: "Figma", category: "Tools", iconName: "Figma", color: "#F24E1E", glowColor: "rgba(242, 78, 30, 0.4)" },
  ] as TechSkill[],
  experiences: [
    {
      id: "exp-1",
      role: "Open Source Contributor & Developer",
      company: "GitHub & Open Source Ecosystem",
      companyUrl: "https://github.com",
      location: "Remote",
      period: "2024 — Present",
      isCurrent: true,
      isRemote: true,
      points: [
        "Building and publishing production-ready open-source tools and web applications using Next.js 15, React 19, and TypeScript.",
        "Actively exploring and contributing to open-source developer repositories, resolving issues, and refining documentation.",
        "Writing modular, type-safe code following modern clean code architecture, Git branching conventions, and atomic commits.",
        "Implementing full-stack integrations including secure authentication, modern ORMs, and real-time WebSockets."
      ],
      skills: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Git & GitHub", "Open Source"]
    },
    {
      id: "exp-2",
      role: "Hackathon Participant & Full-Stack Lead",
      company: "College Innovation Hackathon",
      companyUrl: "https://github.com",
      location: "On-Campus / Hybrid",
      period: "2024",
      isCurrent: false,
      isRemote: false,
      points: [
        "Collaborated with a 4-member cross-functional team to ideate, prototype, and build a full-stack web MVP under a 36-hour sprint.",
        "Engineered the responsive frontend user interface and hooked up backend REST endpoints for real-time data flow.",
        "Demonstrated fast-paced problem solving, agile collaboration, and pitched the live working prototype directly to evaluators."
      ],
      skills: ["React", "Node.js", "Express", "Tailwind CSS", "REST APIs", "Rapid Prototyping"]
    }
  ] as Experience[],
  projects: [
    {
      id: "proj-1",
      title: "ChatHub — Real-Time Messaging & Calling Platform",
      category: "Full-Stack Web & Android App",
      year: "2025",
      description:
        "A WhatsApp-inspired, end-to-end encrypted real-time communication platform and native Android app. Built with sub-50ms WebSocket messaging, client-side AES-GCM zero-knowledge encryption, WebRTC video calling, Google Gemini AI smart replies & 10+ language translation, 25MB disk streaming, and automated GitHub Actions CI/CD release pipeline.",
      tags: ["React 19", "Node.js", "Socket.IO", "WebRTC", "Turso DB", "Gemini AI", "AES-GCM", "Capacitor 8"],
      liveUrl: "https://chat-app-pmab.onrender.com",
      githubUrl: "https://github.com/tarungupta6002-ctrl/CHAT-APP",
      image: "/assets/images/chathub.png",
      gradient: "from-emerald-500/20 via-sky-500/10 to-transparent",
    },
  ] as Project[],
  marqueeItems: [
    "🚀 Open to Opportunities",
    "✦ Remote Ready",
    "⚡ Full Stack Dev",
    "✦ AI-First Workflow",
    "🔥 Next.js 15 & React 19",
    "✦ TypeScript Enthusiast",
    "💡 Clean Architecture",
    "✦ Available Now",
  ],
};

