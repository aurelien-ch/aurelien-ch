export interface ICurrentSection {
  index: number;
  scrollPercentage: number;
};

export interface ISkillCategory {
  name: string;
  skills: (INamedSkill | IIconsSkill)[],
};

export interface INamedSkill {
  icon: string;
  name: string;
};

export interface IIconsSkill {
  icons: string[];
};


export interface IProject {
  name: string;
  logo: string;
  mockup: string;
};

export interface IExperience {
  title: string;
  details: string;
  description: string;
};

export interface IReview {
  name: string;
  stars: number;
  company: string;
  reviews: string[];
};