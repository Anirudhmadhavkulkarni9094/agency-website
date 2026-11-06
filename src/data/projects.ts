export interface ProjectCaseStudy {
  slug: string;
  number: string;
  name: string;
  category: string;
  summary: string;
  tags: readonly string[];
  status: "published" | "in-progress";
  previewImage?: string;
  previewAlt?: string;
  liveUrl?: string;
  overview?: string;
  challenge?: string;
  approach?: string;
  features?: readonly string[];
  technologyStack?: readonly string[];
  outcome?: string;
  publicationNote?: string;
}

export const projects = [
  {
    slug: "clinecxa",
    number: "01",
    name: "Clinecxa.lk",
    category: "TELEHEALTH · DIGITAL HEALTH",
    summary:
      "A telehealth platform connecting patients with healthcare professionals for remote consultations.",
    tags: ["Digital health", "Telehealth", "Patient booking"],
    status: "published",
    previewImage: "/images/projects/clinecxa.png",
    previewAlt: "Clinecxa.lk live homepage, captured from clinecxa.lk",
    liveUrl: "https://www.clinecxa.lk/",
    overview:
      "Clinecxa.lk is a Sri Lankan telehealth platform for connecting patients with healthcare professionals through remote consultations. Its public website introduces patient booking and practitioner onboarding.",
    challenge:
      "The public experience is organized around a clear patient journey: move from a needed service to a doctor and consultation time, while keeping the limits of remote care visible.",
    approach:
      "The public experience organizes booking into service, doctor, and time steps. It also brings provider-verification and privacy messaging, telehealth safety guidance, and practitioner onboarding into the same platform.",
    features: [
      "Consultation booking organized by service, doctor, and time",
      "Medical-specialty discovery and a way to request an unavailable specialty",
      "Published guidance on provider verification, privacy, and telehealth limitations",
      "Practitioner onboarding promoting appointment management and scheduling tools",
    ],
    technologyStack: ["Next.js (public-facing website)"],
  },
  {
    slug: "ipractis",
    number: "02",
    name: "iPractis",
    category: "EDUCATION TECHNOLOGY · ONLINE TUTORING",
    summary:
      "An online tutoring platform for personalized one-to-one lessons across academic, language, creative, and professional subjects.",
    tags: ["Education technology", "Tutor discovery", "Online learning"],
    status: "published",
    previewImage: "/images/projects/ipractis-preview.png",
    previewAlt: "iPractis homepage for online tutoring and lessons",
    liveUrl: "https://www.ipractis.com/",
    overview:
      "iPractis presents an online learning platform connecting learners with tutors for personalized one-to-one lessons across languages, STEM, creative subjects, and professional skills.",
    challenge:
      "The product centers on helping learners find a tutor suited to their subject, goals, level, budget, and availability, then make it practical to continue learning over time.",
    approach:
      "The public experience combines subject and tutor discovery with trial or weekly lesson booking and flexible payment options. It also promotes an integrated online classroom and a resource library to support ongoing learning.",
    features: [
      "Tutor and subject discovery across language, academic, creative, and professional topics",
      "One-to-one lessons with trial and recurring weekly booking options",
      "Flexible scheduling and lesson rescheduling",
      "Lesson bundles and student wallet payments",
      "Built-in classroom described as supporting video, screen sharing, a whiteboard, and messaging",
      "Curated learning resources between sessions",
    ],
    technologyStack: ["Next.js (public-facing website)"],
  },
] satisfies readonly ProjectCaseStudy[];

export function getProjectBySlug(slug: string): ProjectCaseStudy | undefined {
  return projects.find((project) => project.slug === slug);
}
