export const contact = {
  email: "harsheary2005@gmail.com",
  location: "Toronto, Ontario",
  github: "https://github.com/Harsheary",
  linkedin: "https://www.linkedin.com/in/harsh-eary/",
  website: "https://harsheary.com",
  resume: "/HarshEary_resume.pdf",
};

export const experiences = [
  {
    role: "Application Programmer",
    company: "Government of Ontario — MPBSDP",
    location: "Toronto, ON",
    dates: "May 2026 — Aug 2026",
    summary:
      "Applied AI evaluation and metadata tooling for public-sector data workflows.",
    highlights: [
      "Led four interns testing RAG and document-generation agents, coordinating execution and reporting across 15 RAG cases covering grounding, citation accuracy, and conversation memory.",
      "Co-developed a metadata-management proof of concept with FastAPI, PostgreSQL, synthetic data assets, and interactive dashboards for catalog discovery and data lineage.",
    ],
    tags: ["RAG evaluation", "FastAPI", "PostgreSQL", "Data lineage"],
  },
  {
    role: "Software Developer Intern",
    company: "Tetra Tech",
    location: "Pickering, ON",
    dates: "Sep 2025 — Dec 2025",
    summary:
      "Full-stack engineering and applied AI for technical document workflows.",
    highlights: [
      "Owned end-to-end development of NICR, an engineering document application built with ASP.NET Core 8, React, TypeScript, SQL Server, and Entity Framework Core.",
      "Integrated Azure Document Intelligence and Azure OpenAI to extract equipment attributes from PDFs and draft editable engineering justifications.",
      "Built validated APIs and templated Word reporting, then added 39 xUnit tests and an Azure Pipelines build with test and coverage reporting.",
    ],
    tags: ["ASP.NET Core", "React", "Azure OpenAI", "SQL Server"],
  },
  {
    role: "Website Developer Intern",
    company: "Physiomed",
    location: "Oakville, ON",
    dates: "Jan 2025 — Apr 2025",
    summary:
      "Internal web tools supporting rehabilitation data collection and clinical workflows.",
    highlights: [
      "Developed internal tools for rehabilitation data tracking and consistent data capture.",
      "Tested authentication, database operations, and backend services, resolving defects affecting reliability and user experience.",
    ],
    tags: ["Web development", "Databases", "Testing"],
  },
];

export const skillGroups = [
  {
    title: "Languages",
    description: "The tools I reach for across product, data, and backend work.",
    skills: ["C#", "TypeScript", "Python", "SQL", "JavaScript", "Java"],
  },
  {
    title: "Full-stack",
    description: "Building typed, maintainable products from interface to API.",
    skills: [
      "ASP.NET Core",
      "React",
      "Next.js",
      "FastAPI",
      "Node.js",
      "Entity Framework Core",
    ],
  },
  {
    title: "AI & data",
    description: "Applied AI systems with evaluation and human review in the loop.",
    skills: [
      "Azure OpenAI",
      "Document Intelligence",
      "RAG evaluation",
      "Scikit-learn",
      "pandas",
    ],
  },
  {
    title: "Infrastructure & quality",
    description: "Shipping software with reliable data, tests, and delivery workflows.",
    skills: [
      "SQL Server",
      "PostgreSQL",
      "MongoDB",
      "Docker",
      "Azure DevOps",
      "xUnit",
    ],
  },
];

export const projects = [
  {
    title: "Mystery Message",
    eyebrow: "Full-stack product",
    description:
      "An anonymous messaging application with authenticated workflows, persistent message storage, API validation, and resilient error handling.",
    detail:
      "Designed the complete path from account authentication to private message delivery using a typed Next.js stack.",
    href: "https://mystery-message.in",
    image: "/mysteryMessage.png",
    tags: ["Next.js", "TypeScript", "NextAuth", "MongoDB"],
  },
  {
    title: "Traffic Fatality Prediction",
    eyebrow: "Machine learning",
    description:
      "An end-to-end pipeline for traffic-fatality data, including preprocessing, feature engineering, model training, and output validation.",
    detail:
      "Deployed the trained model behind a REST API and verified request and prediction response accuracy.",
    href: "https://github.com/Harsheary/supervised-learning-ksi",
    image: "/ML_KSI_project.png",
    tags: ["Python", "Scikit-learn", "SMOTE", "REST API"],
  },
  {
    title: "Quiz Master",
    eyebrow: "Real-time web app",
    description:
      "A Kahoot-inspired application for creating and playing interactive quizzes through an engaging multiplayer workflow.",
    detail:
      "Built as a MERN application with quiz creation, game participation, and real-time interaction at its core.",
    href: "https://kahoot-clonee-dll2.onrender.com/",
    image: "/Kahoot_clone.png",
    tags: ["MongoDB", "Express", "React", "Node.js"],
  },
];
