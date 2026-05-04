import type { ImageMetadata } from "astro";

import fab from "../images/fab.png";
import kitchensync from "../images/kitchensync-thumb.png";
import risatech from "../images/risatech-welcome.png";

export type ProjectScope = "professional" | "personal";

export interface ProjectEntry {
  id: string;
  title: string;
  scope: ProjectScope;
  period: string;
  role: string;
  summary: string;
  highlights?: string[];
  technologies: string[];
  externalUrl?: string;
  image?: ImageMetadata;
  imageAlt?: string;
  homeFeatured?: boolean;
  homeFeaturedOrder?: number;
  homeOverlayTitle?: string;
  homeOverlayBody?: string;
}

export const PROJECTS: ProjectEntry[] = [
  {
    id: "risatech",
    title: "risatech.ai",
    scope: "professional",
    period: "October 2024 - Present",
    role: "Full-Stack Software Engineer",
    summary:
      "I build and ship customer-driven features for a hospitality platform, including tailored hotel profiles with custom AI assistants, improved file uploads, and review workflows for tracking and responding to guest feedback.",
    highlights: [
      "Build hotel profile workflows that let users create tailored property profiles backed by custom AI assistants.",
      "Improve file upload flows so hotel teams can get documents into the product more reliably and use them more effectively.",
      "Ship reviews tooling for tracking, managing, and responding to guest feedback in one product surface.",
    ],
    technologies: ["TypeScript", "React", "Python", "Flask", "GCP"],
    externalUrl: "https://risatech.ai/",
    image: risatech,
    imageAlt: "risatech.ai welcome page",
    homeFeatured: true,
    homeFeaturedOrder: 2,
    homeOverlayTitle: "risatech.ai",
    homeOverlayBody:
      "Ship customer-driven product features across hotel profiles, file uploads, and review management.",
  },
  {
    id: "fox-allen-bindery",
    title: "Fox Allen Bindery",
    scope: "professional",
    period: "September 2024 - August 2025",
    role: "Full-Stack Web Developer",
    summary:
      "Designed, built, and maintained a personalized portfolio website that showcases a bookbinding business and gives customers a clear path to learn more and reach out.",
    technologies: ["Astro", "TypeScript", "Tailwind CSS", "UI Design", "SEO"],
    externalUrl: "https://foxallenbindery.com/",
    image: fab,
    imageAlt: "foxallenbindery landing page",
    homeFeatured: true,
    homeFeaturedOrder: 3,
    homeOverlayTitle: "foxallenbindery portfolio website",
    homeOverlayBody:
      "Developed, designed, and currently maintain the bookbinding website of Fox Allen Maasch.",
  },
  {
    id: "kitchensync",
    title: "KitchenSync",
    scope: "personal",
    period: "March 2026",
    role: "Full-Stack Developer",
    summary:
      "KitchenSync is an order and inventory management proof of concept that helps restaurants keep their menu state aligned with real ingredient availability. It reduces the mental overhead of manual inventory tracking by updating kitchen, front-of-house, and online ordering workflows from the same source of truth.",
    highlights: [
      "Built as part of an interview process and successfully used to land a role with the same company.",
      "Uses a Python and Flask backend with a TypeScript and React frontend to connect order flow with inventory state.",
      "Solves the real-world problem of staff overselling menu items when ingredient shortages are not reflected quickly enough across teams and ordering channels.",
    ],
    technologies: ["Python", "Flask", "TypeScript", "React"],
    externalUrl: "https://github.com/Jomkit/KitchenSync",
    image: kitchensync,
    imageAlt: "KitchenSync order and inventory management dashboard",
    homeFeatured: true,
    homeFeaturedOrder: 1,
    homeOverlayTitle: "KitchenSync",
    homeOverlayBody:
      "Built an order and inventory proof of concept that keeps kitchen, FOH, and online ordering aligned.",
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
