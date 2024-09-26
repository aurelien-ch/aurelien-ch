export interface IReview {
  reviewerName: string;
  reviewerRole: string;
  reviewKey: string;
}

export interface IProject {
  name: string;
  descriptionKey: string;
  review: IReview;
  secondReview?: IReview;
  mockups?: string[];
  visitLink?: string;
}
