import { Project, SocialLink } from '@/types';
import TwitterLogo from '../../public/assets/twitter.svg';

export const PROJECTS: Project[] = [
  {
    title: 'Personal Dashboard',
    description: 'A Chrome extension to help you focus and stay up-to-date.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
    siteUrl: 'https://nisar.surge.sh',
    githubUrl: 'https://github.com/nisarhassan12/portfolio',
    imageUrl: '/assets/dashboard-2.png',
    imageAlt: 'Personal Dashboard',
  },
  // ... other projects
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'Twitter',
    url: 'https://twitter.com/yourhandle',
    icon: TwitterLogo,
  },
  // ... other social links
];
