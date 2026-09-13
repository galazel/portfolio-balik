// Content as config — add a project, award, or tech badge here without touching
// any layout/animation code. Sourced from the Glyzel Galagar Design System
// handoff (project/ui_kits/portfolio/data.jsx) plus the full-stack brief.

// The floating background stack in the Hero. Limited to the 14 tools we have
// real logo assets for (project/assets/tech) — see README "Caveats" for the
// stack items (FastAPI, LangChain, LangGraph, TypeScript, RabbitMQ) that have
// no distinct icon asset and are represented via their closest sibling logo
// elsewhere (e.g. tech pills fall back to the Python/JS mark).
export const TECH_HERO = [
  { label: "React", icon: "react.png" },
  { label: "Spring Boot", icon: "spring-boot.png" },
  { label: "Python", icon: "python.png" },
  { label: "PostgreSQL", icon: "postgres.png" },
  { label: "Java", icon: "java.png" },
  { label: "AWS", icon: "aws.png" },
  { label: "Docker", icon: "docker.png" },
  { label: "Git", icon: "git.png" },
  { label: "JavaScript", icon: "js.png" },
  { label: "HTML", icon: "html.png" },
  { label: "CSS", icon: "css.png" },
  { label: "Tailwind", icon: "tailwind.png" },
  { label: "MySQL", icon: "mysql.png" },
  { label: "GitHub", icon: "github.png" },
];

// Hand-placed hero badge spots: x/right are % from the left/right edge, y is %
// from the top, r is rotation in degrees. Keeps a clear safe zone around the
// centered name/roles/CTA stack (x 15–85%, y 20–72%).
export const HERO_SPOTS = [
  { x: 2, y: 8, r: -12 }, { x: 6, y: 48, r: 9 }, { x: 3, y: 76, r: 14 }, { x: 8, y: 36, r: -8 }, { x: 4, y: 14, r: 7 },
  { right: 4, y: 12, r: 10 }, { right: 8, y: 58, r: -9 }, { right: 12, y: 30, r: -6 }, { right: 18, y: 80, r: 12 }, { right: 6, y: 42, r: 5 },
  { x: 14, y: 2, r: -7 }, { x: 78, y: 4, r: 8 }, { x: 26, y: 90, r: 11 }, { right: 24, y: 88, r: -10 },
];

export const PROJECTS = [
  {
    slug: "rebyu", title: "REBYU", year: "2024", accent: "grape",
    tagline: "AI-powered review & learning management platform (capstone).",
    tech: ["React", "Spring Boot", "FastAPI", "PostgreSQL", "AWS", "LangGraph", "Qdrant", "RabbitMQ", "Docker", "Vercel", "Hostinger"],
    description: "A multi-tenant SaaS platform for IT certification review spanning 20+ bounded domains — certifications, assessments, enrollment, gamification, community, billing and enterprise management — with a modular Spring Boot core and a dedicated FastAPI service for AI and learning analytics.",
    built: [
      "Modular Spring Boot backend with Spring Data JPA, transactional outbox processing and projection-based queries",
      "LangChain/LangGraph pipelines that generate curricula, lessons, quizzes, mock exams, flashcards and study plans, with per-task model routing and strict JSON-schema validation",
      "Adaptive assessment engine with multiple question types, retakes, scoring and validation",
      "Bayesian Knowledge Tracing to estimate per-skill mastery and drive personalized recommendations",
    ],
    repo: "https://github.com/galazel/rebyu",
  },
  {
    slug: "infrastrack", title: "INFRASTRACK", year: "2026", accent: "mint",
    tagline: "AI-powered construction monitoring platform.",
    tech: ["React", "Spring Boot", "Spring Security", "PostgreSQL", "pgvector", "LangChain4j", "AWS", "Docker", "Vercel"],
    description: "Clients track their construction project's progress and ask a natural-language assistant about milestones, dates, costs and plans — answered only from the project's own records.",
    built: [
      "LangChain4j RAG pipeline that ingests PDF, Word, Excel, PowerPoint and text reports into PostgreSQL/pgvector, with no paid document-processing service",
      "Amazon Cognito role-based access control with Spring Security OAuth2/JWT validation",
      "S3 presigned URLs for protected project files and photos",
      "Role-aware React dashboards and end-to-end project workflows",
    ],
    repo: "https://github.com/galazel/infrastrack",
  },
  {
    slug: "interbyu", title: "INTERBYU", year: "2026", accent: "sky",
    tagline: "AI interview simulation platform.",
    tech: ["Python", "FastAPI", "LangGraph", "Groq", "PostgreSQL", "Qdrant", "React", "AWS", "Vercel"],
    description: "Screens resumes against real job postings and runs voice-driven mock interviews with per-answer scoring and structured feedback.",
    built: [
      "8 LLM agents orchestrated through LangGraph state machines with schema-validated structured outputs",
      "RAG over resume embeddings in Qdrant to ground questions in the candidate's real experience",
      "Voice-driven interview flow with per-answer scoring",
    ],
    repo: "https://github.com/galazel/interbyu",
  },
  {
    slug: "e-boto", title: "E-BOTO", year: "2025", accent: "pink",
    tagline: "University election management system.",
    tech: ["C#", "Windows Forms", "Entity Framework", "SQL Server"],
    description: "A desktop election management system for university-wide student elections, covering candidates, positions, voters, ballot casting and automated result tallying.",
    built: [
      "Entity relationship diagram and relational schema design",
      "One vote per student enforced through unique constraints and validation logic",
      "Full CRUD with Entity Framework and a Windows Forms administrator interface",
    ],
    repo: "https://github.com/galazel/WindowsFormsApp1",
  },
  {
    slug: "oh-oh-peace", title: "OH-OH-PEACE", year: "2026", accent: "lemon",
    tagline: "A coding practice platform for OOP concepts only.",
    tech: ["React", "Spring Boot", "AWS", "LangChain4j"],
    description: "LeetCode-style practice scoped entirely to object-oriented programming concepts.",
    built: [
      "Problem catalogue and submissions",
      "Amazon Cognito accounts",
      "LangChain4j integration",
    ],
    repo: "https://github.com/galazel/oh-oh-peace",
  },
  {
    slug: "springboot-roadmap", title: "SPRING BOOT ROADMAP", year: "2025", accent: "grape",
    tagline: "A repository of Spring Boot roadmap projects.",
    tech: ["Spring Boot", "Java", "React", "AWS", "Keycloak"],
    description: "Hands-on Spring Boot projects worked through while following a backend roadmap, including AWS S3, EC2 and RDS deployment and Keycloak authentication.",
    built: [
      "Spring Boot REST APIs",
      "AWS S3, EC2 and RDS integration",
      "Keycloak authentication",
    ],
    repo: "https://github.com/galazel/spring-boot-roadmap",
  },
  {
    slug: "chatmate", title: "CHATMATE", year: "2026", accent: "sky",
    tagline: "A contractor bot assistant for house monitoring.",
    tech: ["React", "Spring Boot"],
    description: "A contractor bot assistant for following a house build.",
    built: ["React front end", "Spring Boot back end"],
    repo: "https://github.com/galazel/chatmate",
  },
  {
    slug: "cancan", title: "CANCAN", year: "2025", accent: "lemon",
    tagline: "My first full-stack e-commerce application.",
    tech: ["React", "Spring Boot"],
    description: "My first full-stack e-commerce application.",
    built: ["React front end", "Spring Boot back end"],
    repo: "https://github.com/galazel/cencen",
  },
  {
    slug: "pizzeria", title: "PIZZERIA", year: "2025", accent: "pink",
    tagline: "My first front-end design in React and Tailwind CSS.",
    tech: ["React", "Tailwind CSS"],
    description: "My first front-end design built with React and Tailwind CSS.",
    built: ["Responsive React and Tailwind CSS interface"],
    repo: "https://github.com/galazel/pizzeria",
  },
  {
    slug: "artstream", title: "ARTSTREAM", year: "2023", accent: "mint",
    tagline: "A commission system connecting clients with artists.",
    tech: ["Java", "JavaFX"],
    description: "A commission system where clients send requests to different artists.",
    built: ["JavaFX desktop interface", "Commission request flow"],
    repo: "https://github.com/galazel/Revised-Artstream-Project",
  },
  {
    slug: "ethereal-vision", title: "ETHEREAL VISION", year: "2023", accent: "grape",
    tagline: "An e-commerce website for art.",
    tech: ["HTML", "CSS", "JavaScript"],
    description: "An e-commerce website for art, where clients can purchase artworks and commission custom pieces from artists.",
    built: ["Artwork catalogue", "Commission request pages"],
    repo: "https://github.com/galazel/ethereal-vision",
  },
];

export const EDUCATION = [
  { title: "Bachelor of Science in Information Technology", org: "University of Cebu Lapu-Lapu and Mandaue", date: "2023 – Present", tag: "OWWA Education for Development Scholar" },
  { title: "Senior High School — STEM Strand", org: "University of Cebu Lapu-Lapu and Mandaue", date: "2022 – 2023" },
];

export const AWARDS = [
  { title: "2nd Place, General Information Technology Quiz", org: "11th ICT Congress 2025, SM Seaside Cebu", date: "April 2025", accent: "lemon" },
  { title: "Champion, General Information Technology Quiz", org: "UCLM CCS Days 2025, Mandaue City, Cebu", date: "February 2025", accent: "pink" },
  { title: "OWWA Education for Development Scholarship Program Scholar", org: "Overseas Workers Welfare Administration", date: "July 2023 – Present", accent: "mint" },
  { title: "Blockchain Technology Workshop — CashScript smart contracts", org: "Certificate of Participation, Mandaue City, Cebu", date: "November 2025", accent: "grape" },
];
