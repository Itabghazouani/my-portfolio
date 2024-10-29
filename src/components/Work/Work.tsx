import ProjectCard from '../projectCard/ProjectCard';
import styles from './Work.module.css';
import { PROJECTS } from '@/lib/constants';

const Work = () => {
  return (
    <section className={styles.section} id="work">
      <div className="row">
        <h2>My Work</h2>
        <div className={styles.container}>
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
