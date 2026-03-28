import type { Project } from "../types";

export const projects: Project[] = [
  {
    title: "Make Vision Board",
    category: "Full Stack • React • Laravel • MySQL",
    description:
      "Built a full stack vision board application for organizing goals, inspiration, and visual planning. Implemented a Laravel backend with secure authentication and API integration, connected to a modern React frontend for a seamless user experience.",
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Laravel",
      "Laravel Sanctum",
      "MySQL",
      "Vercel",
      "Railway"
    ],
    status: "Live Project",
    link: "https://make-vision-board.vercel.app/",
    image: "/vision-board-preview.png",
    highlight: "Full stack self-made project with authentication and API integration",
    bullets: [
      "Interactive drag-and-arrange vision board interface",
      "Built RESTful API using Laravel and Laravel Sanctum",
      "Secure authentication and session handling",
      "MySQL database design and backend data management",
      "Frontend and backend integration using API endpoints",
      "Deployed frontend on Vercel and backend on Railway",
    ],
    backend: "https://vision-board-api.up.railway.app/docs"
  },
  {
    title: "Nice Bites – Food Ordering Platform",
    category: "Full Stack • Node.js • React • PostgreSQL",
    description:
      "Developed a full stack food ordering platform with user authentication, product management, and order processing. Designed backend APIs, handled database integration, and built a responsive frontend for a smooth user experience.",
    tech: ["Node.js", "React", "PostgreSQL", "Railway"],
    status: "Live Project",
    link: "https://nice-bites.up.railway.app/",
    image: "/nice-bites-preview.png",
    highlight: "End-to-end full stack application deployed online",
    bullets: [
      "User authentication and account flow",
      "Product and order management features",
      "Frontend and backend API integration",
      "Deployed online using Railway",
    ],
  },
  {
    title: "Government Trade Systems",
    category: "CodeIgniter • REST API • MySQL",
    description:
      "Built and maintained customs-related government platforms from scratch, implementing backend logic, REST APIs, database workflows, and structured validation for trade processing systems.",
    tech: ["CodeIgniter", "PHP", "REST API", "MySQL"],
    status: "Public Systems",
    highlight: "Built core backend workflows for government platforms",
  },
  {
    title: "Enterprise Manifest System",
    category: "PHP • MSSQL • Business Systems",
    description:
      "Developed and maintained backend features for a business-critical manifest platform, handling structured data, enterprise workflows, and ongoing platform enhancements.",
    tech: ["PHP", "MSSQL", "Backend Logic"],
    status: "Enterprise Platform",
    highlight: "Maintained and enhanced core enterprise workflows",
  },
  {
    title: "API Integration Platform",
    category: "Laravel • Passport • MySQL",
    description:
      "Developed APIs for integration with external company-owned systems, including authentication, audit logs, dashboard support, and backend communication flows.",
    tech: ["Laravel", "Passport", "REST API", "MySQL"],
    status: "Internal Platform",
    highlight: "Built integration APIs and audit logging features",
  },
  {
    title: "Real-Time Betting Game Backend",
    category: "Node.js • Fastify • PostgreSQL • Redis",
    description:
      "Worked on a real-time betting game backend using Fastify, PostgreSQL, Redis, and WebSocket-based updates to support transactional flows and real-time gameplay interactions.",
    tech: ["Node.js", "Fastify", "PostgreSQL", "Redis", "WebSocket"],
    status: "Real-Time System",
    highlight: "Built backend logic for live betting interactions",
  },
  {
    title: "MNL48 Website Enhancements",
    category: "PHP • API Features • Platform Maintenance",
    description:
      "Maintained and enhanced an active public entertainment platform, building API-backed features and implementing voting-related functionality for user engagement.",
    tech: ["PHP", "API", "Feature Development"],
    status: "Live Website",
    link: "https://www.mnl48.ph/",
    highlight: "Added features and voting-related backend support",
  },
  {
    title: "Legacy E-Commerce and Job Platforms",
    category: "PHP • Full Stack",
    description:
      "Worked on full stack development, enhancement, and maintenance for marketplace and job platform products, including feature development, business logic, and backend operations.",
    tech: ["PHP", "Full Stack", "Maintenance"],
    status: "Legacy Systems",
    highlight: "Contributed to multi-feature product platforms",
  },
];