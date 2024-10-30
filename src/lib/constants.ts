import { Project, Resume, SocialLink } from '@/types';
import InstagramIcon from '../../public/assets/icons/instagram.svg';
import FacebookIcon from '../../public/assets/icons/facebook.svg';
import XIcon from '../../public/assets/icons/x.svg';
import LinkedinIcon from '../../public/assets/icons/linkedin.svg';
import GithubIcon from '../../public/assets/icons/github.svg';

export const PROJECTS: Project[] = [
  // {
  //   title: 'Snap And Eat',
  //   description:
  //     'A mobile app allowing users to search for restaurants based on dishes they crave, view a list of options, and book a table directly.',
  //   technologies: ['HTML', 'SCSS', 'Ruby on Rails', 'Javascript'],
  //   siteUrl: '****',
  //   githubUrl: 'https://github.com/Itabghazouani/snap_and_eat',
  //   imageUrl: '/assets/restaurant_41.jpg',
  //   imageAlt: 'Snap And Eat',
  // },
  {
    title: 'My Coding Journey',
    description:
      'A personal website showcasing my coding journey, featuring projects, skills, and progress made during the Scrimba course.',
    technologies: ['HTML', 'CSS', 'Javascript'],
    siteUrl: 'https://my-coding-journey.netlify.app/',
    githubUrl: 'https://github.com/Itabghazouani/my-coding-journey',
    imageUrl: '/assets/codingwallpaper.jpeg',
    imageAlt: 'My Coding Journey',
  },
  {
    title: 'Restaurant Ordering App',
    description:
      'Burger Order App is a React application that enables users to customize and place orders for their favorite burgers, fully deployed on Netlify.',
    technologies: ['HTML', 'CSS', 'Javascript'],
    siteUrl: 'https://restaurant-order-thegoat-burger.netlify.app/',
    githubUrl: 'https://github.com/Itabghazouani/Restaurant-Ordering-App',
    imageUrl: '/assets/burgerwallpaper.jpg',
    imageAlt: 'Restaurant Ordering App',
  },
  {
    title: 'At Least I have My List',
    description:
      'A shopping list app, At Least I Have My List, created to simplify grocery trips and keep essentials organized."',
    technologies: ['HTML', 'CSS', 'Javascript', 'Firebase'],
    siteUrl: 'https://at-least-i-have-my-list.netlify.app/',
    githubUrl: 'https://github.com/Itabghazouani/Shopping-List-App',
    imageUrl: '/assets/shoppinglist.jpeg',
    imageAlt: 'At Least I have My List',
  },
  {
    title: 'VanLife',
    description:
      'A React-based app, designed for users to easily browse and rent vans for their next adventure.',
    technologies: ['HTML', 'CSS', 'Javascript', 'React'],
    siteUrl: 'https://itab-vanlife.netlify.app/',
    githubUrl: 'https://github.com/Itabghazouani/VanLife',
    imageUrl: '/assets/vanlife-home.png',
    imageAlt: 'Van Life',
  },
  {
    title: 'Marvel Heroes',
    description:
      'A project titled Marvel Heroes List, built with Next.js, that displays detailed information about Marvel characters using an API.',
    technologies: ['HTML', 'Tailwind CSS', 'TypeScript', 'NextJS'],
    siteUrl: 'https://next-marvel-heroes.vercel.app/',
    githubUrl: 'https://github.com/Itabghazouani/next-marvel-heroes',
    imageUrl: '/assets/mheroes.jpeg',
    imageAlt: 'Marvel Heroes List',
  },
  {
    title: 'CaseCobra',
    description:
      'An app that allows users to upload personal images to create and purchase custom phone cases, integrating Stripe for payments and Kinde for authentication.',
    technologies: ['Tailwind CSS', 'TypeScript', 'NextJS', 'Kinde', 'Stripe'],
    siteUrl: 'https://case-cobra-swart.vercel.app/',
    githubUrl: 'https://github.com/Itabghazouani/casecobra',
    imageUrl: '/assets/casecobra.png',
    imageAlt: 'Case Cobra',
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'Linkedin',
    url: 'https://www.linkedin.com/in/itab-ghazouani/',
    icon: LinkedinIcon,
  },
  {
    platform: 'Github',
    url: 'https://github.com/Itabghazouani',
    icon: GithubIcon,
  },
  {
    platform: 'Instagram',
    url: 'https://www.instagram.com/itab_ghazouani',
    icon: InstagramIcon,
  },
  {
    platform: 'Facebook',
    url: 'https://www.facebook.com/itab.ghazouani',
    icon: FacebookIcon,
  },
  {
    platform: 'X',
    url: 'https://x.com/GhazouaniI45118',
    icon: XIcon,
  },
  // ... other social links
];

export const RESUMES: Resume[] = [
  {
    language: 'English',
    flag: '🇬🇧',
    file: '/resumes/ItabResumeEnglish.pdf',
    fileName: 'Itab_Ghazouani_Resume_EN.pdf',
  },
  {
    language: 'Français',
    flag: '🇫🇷',
    file: '/resumes/ItabResumeFrench.pdf',
    fileName: 'Itab_Ghazouani_CV_FR.pdf',
  },
  {
    language: 'Español',
    flag: '🇪🇸',
    file: '/resumes/ItabResumeSpanish.pdf',
    fileName: 'Itab_Ghazouani_CV_ES.pdf',
  },
];
