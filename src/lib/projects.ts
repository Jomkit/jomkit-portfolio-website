import type { ImageMetadata } from "astro";

import fab from "../images/fab.png";
import risatech from "../images/risatech-welcome.png";

export type ProjectScope = "professional" | "personal";

export interface ProjectEntry {
  id: string;
  title: string;
  scope: ProjectScope;
  period: string;
  role: string;
  summary: string;
  technologies: string[];
  externalUrl?: string;
  image?: ImageMetadata;
  imageAlt?: string;
  homeFeatured?: boolean;
  homeOverlayTitle?: string;
  homeOverlayBody?: string;
}

export const PROJECTS: ProjectEntry[] = [
  {
    id: "risatech",
    title: "risatech.ai",
    scope: "professional",
    period: "October 2024 - March 2025",
    role: "Full-Stack Software Engineer",
    summary:
      "Shipped new, business-critical product features for a hospitality platform using AI agents to help hotel teams save time, save money, and increase value.",
    technologies: ["TypeScript", "React", "Python", "Flask", "GCP"],
    externalUrl: "https://risatech.ai/",
    image: risatech,
    imageAlt: "risatech.ai welcome page",
    homeFeatured: true,
    homeOverlayTitle: "risatech.ai",
    homeOverlayBody:
      "Full-stack engineer responsible for pushing new, mission-critical features to the flagship product.",
  },
  {
    id: "fox-allen-bindery",
    title: "Fox Allen Bindery",
    scope: "professional",
    period: "September 2024 - Present",
    role: "Full-Stack Web Developer",
    summary:
      "Designed, built, and maintain a personalized portfolio website that showcases a bookbinding business and gives customers a clear path to learn more and reach out.",
    technologies: ["Astro", "TypeScript", "Tailwind CSS", "UI Design", "SEO"],
    externalUrl: "https://foxallenbindery.com/",
    image: fab,
    imageAlt: "foxallenbindery landing page",
    homeFeatured: true,
    homeOverlayTitle: "foxallenbindery portfolio website",
    homeOverlayBody:
      "Developed, designed, and currently maintain the bookbinding website of Fox Allen Maasch.",
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    scope: "personal",
    period: "Present",
    role: "Designer and Developer",
    summary:
      "This site doubles as a live portfolio and a place to iterate on Astro, React, content structure, and front-end decision making.",
    technologies: ["Astro", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "productivity-buddy",
    title: "Productivity Buddy",
    scope: "personal",
    period: "August 2024 - September 2024",
    role: "Full-Stack Developer",
    summary:
      "A pomodoro app that combines mindfulness check-ins with productivity tracking to help users understand when and how they work best.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Express",
      "Node.js",
      "Vite",
    ],
  },
];
