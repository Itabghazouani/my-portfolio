'use client';

import Image from 'next/image';
import Link from 'next/link';
import ItabPhoto from '../../../public/assets/itab-photo.jpg';
import styles from './about.module.css';

const About = () => {
  return (
    <section className={styles.section} id="about">
      <div className="row">
        <h2>About Me</h2>
        <div className={styles.content}>
          <div className={styles.text}>
            <p>
              With a foundation from Le Wagon’s intensive bootcamp, I began my
              journey into web development, mastering Ruby on Rails and gaining
              a solid understanding of front-end fundamentals. Driven by a
              passion for building interactive applications, I delved into
              JavaScript and React through an online class with Scrimba. I
              continued to advance my skills by learning Next.js independently,
              creating various projects that allowed me to apply and strengthen
              my knowledge.
            </p>
            <p>
              After a year of hands-on practice, including an internship,
              I&apos;m eager to take on new challenges as a front-end developer,
              ready to contribute to innovative projects with my growing
              expertise.
            </p>
            <Link href="/resume.pdf" className="btn">
              My Resume
            </Link>
          </div>
          <div className={styles.photoContainer}>
            <Image
              src={ItabPhoto}
              alt="Jane Smith"
              width={400}
              height={400}
              className={styles.photo}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
