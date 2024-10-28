import { Project } from '@/types';
import ProjectCard from '../projectCard/ProjectCard';
import styles from './Work.module.css';

const projects: Project[] = [
  {
    title: 'Personal Dashboard',
    description: 'A Chrome extension to help you focus and stay up-to-date.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
    siteUrl: 'https://nisar.surge.sh',
    githubUrl: 'https://github.com/nisarhassan12/portfolio',
    imageUrl: '/assets/project-1.png',
    imageAlt: 'Personal Dashboard Project',
  },
  {
    title: 'Project number 2',
    description: 'A Chrome extension to help you focus and stay up-to-date.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
    siteUrl: 'https://nisar.surge.sh',
    githubUrl: 'https://github.com/nisarhassan12/portfolio',
    imageUrl: '/assets/project-2.png',
    imageAlt: 'Personal Dashboard Project',
  },
  // Add other projects here
];

const Work = () => {
  return (
    <section className={styles.section} id="work">
      <div className="row">
        <h2>My Work</h2>
        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
