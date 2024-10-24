import { IProject } from "@/types/projects";

export default [
  {
    name: "The Soci3ty",
    descriptionKey: "projects.descriptions.soci3ty",
    mockups: ["/mockups/soci3ty-landing.webp", "/mockups/soci3ty-dapp.webp"],
    visitLink: "https://soci3ty.org/",
    review: {
      reviewerName: "Simon",
      reviewerRole: "CEO",
      reviewKey: "projects.reviews.soci3ty",
    },
  },
  {
    name: "LEEQUID",
    descriptionKey: "projects.descriptions.leequid",
    mockups: ["/mockups/leequid-landing.webp", "/mockups/leequid-dapp.webp"],
    visitLink: "https://leequid.io/",
    review: {
      reviewerName: "Carlos",
      reviewerRole: "CEO",
      reviewKey: "projects.reviews.leequid",
    },
    secondReview: {
      reviewerName: "Samuel",
      reviewerRole: "CTO",
      reviewKey: "projects.secondReviews.leequid",
    },
  },
  {
    name: "Appunto",
    descriptionKey: "projects.descriptions.appunto",
    mockups: ["/mockups/wedodata.webp", "/mockups/usense.webp", "/mockups/monuma.webp"],
    visitLink: "https://unehistoireduconflitpolitique.fr/",
    review: {
      reviewerName: "Mattia",
      reviewerRole: "CEO",
      reviewKey: "projects.reviews.appunto",
    },
  },
] as IProject[];
