import type { Experience } from "../types";

export const experiences: Experience[] = [
  {
    role: "Backend Developer",
    company: "GlobalX Digital Corporation",
    period: "2025 - Present",
    description: (
      <ul className="list-disc space-y-2 pl-5">
        <li>Architect and maintain WebSocket services for high-concurrency, real-time application features.</li>
        <li>Refactor critical backend modules to improve performance, reliability, and scalability.</li>
        <li>Design and deploy robust RESTful API routes to support complex frontend functionality.</li>
        <li>Collaborate closely with frontend teams to ensure efficient system integration.</li>
      </ul>
    ),
  },
  {
    role: "Senior Developer II",
    company: "InterCommerce Network Services, Inc.",
    period: "Previous Role",
    description: (
      <ul className="list-disc space-y-2 pl-5">
        <li>Championed the adoption of Laravel and Tailwind CSS to streamline internal workflows.</li>
        <li>Led security initiatives through Vulnerability Assessment and Penetration Testing.</li>
        <li>Engineered robust data storage and retrieval solutions using MSSQL and MySQL.</li>
        <li>Facilitated seamless data exchange via SFTP, FTP, and REST API integrations.</li>
        <li>Mentored junior team members and collaborated across teams to optimize interfaces.</li>
      </ul>
    ),
  },
  {
    role: "System Developer",
    company: "Earlier Roles",
    period: "Previous Experience",
    description: (
      <ul className="list-disc space-y-2 pl-5">
        <li>Developed a fully functional e-commerce platform with a modular architecture.</li>
        <li>Used MongoDB and ExpressJS for flexible, high-performance server-side operations.</li>
        <li>Delivered responsive interfaces using the Quasar Framework.</li>
        <li>Maintained and enhanced legacy applications with OOP-based software solutions.</li>
        <li>Optimized API and database communication to improve data integrity.</li>
        <li>Resolved complex bugs through comprehensive testing and long-term code fixes.</li>
      </ul>
    ),
  },
];