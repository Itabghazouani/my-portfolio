import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/types';
import GithubLogo from '../../../public/assets/github.svg';
import styles from './ProjectCard.module.css';

interface IProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: IProjectCardProps) => {
  return (
    <div className={styles.box}>
      <div className={styles.text}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul className={styles.list}>
          {project.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

        <div className={styles.links}>
          {project.siteUrl && (
            <Link href={project.siteUrl} target="_blank" className="link__text">
              Visit Site <span>&rarr;</span>
            </Link>
          )}
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              title="View Source Code"
              target="_blank"
            >
              <Image
                src={GithubLogo}
                width={30}
                height={30}
                alt="GitHub"
                className={styles.code}
              />
            </Link>
          )}
        </div>
      </div>
      <div className={styles.imageBox}>
        <Image
          src={project.imageUrl}
          alt={project.imageAlt}
          width={600}
          height={400}
          className="work__image"
          priority
        />
      </div>
    </div>
  );
};

export default ProjectCard;
