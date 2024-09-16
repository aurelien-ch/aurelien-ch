export interface IReview {
  projectName: string;
  projectDescriptionKey: string;
  reviewerName: string;
  reviewerRole: string;
  reviewKey: string;
}

export interface IProject extends IReview {
  mockups: string[];
  visitLink: string;
}
