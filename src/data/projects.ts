import { IProject } from "@/types/projects";

export default [
  {
    projectName: "The Soci3ty",
    mockups: ["/mockups/soci3ty-landing.webp", "/mockups/soci3ty-dapp.webp"],
    projectDescriptionKey: "projects.descriptions.soci3ty",
    reviewerName: "Simon",
    reviewerRole: "CEO",
    reviewKey: "projects.reviews.soci3ty",
    visitLink: "https://soci3ty-landing.vercel.app/",
  },
  {
    projectName: "LEEQUID",
    mockups: ["/mockups/leequid-landing.webp", "/mockups/leequid-dapp.webp"],
    projectDescriptionKey: "projects.descriptions.leequid",
    reviewerName: "Samuel",
    reviewerRole: "CTO",
    reviewKey: "projects.reviews.leequid",
    visitLink: "https://leequid.io/",
  },
  {
    projectName: "Appunto",
    mockups: ["/mockups/wedodata.webp", "/mockups/usense.webp", "/mockups/monuma.webp"],
    projectDescriptionKey: "projects.descriptions.appunto",
    reviewerName: "Mattia",
    reviewerRole: "CEO",
    reviewKey: "projects.reviews.appunto",
    visitLink: "https://unehistoireduconflitpolitique.fr/",
  },
] as IProject[];
