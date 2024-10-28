export type Project = {
  title: string;
  description: string;
  technologies: string[];
  siteUrl?: string;
  githubUrl?: string;
  imageUrl: string;
  imageAlt: string;
};

export type SocialLink = {
  platform: string;
  url: string;
  icon: string;
};
