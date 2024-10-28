'use client';

import Image from 'next/image';
import Link from 'next/link';
import JaneImage from '../../../public/assets/jane.jpg';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="row">
        <h2>About Me</h2>
        <div className="about__content">
          <div className="about__text">
            <p>
              I&apos;m a web developer and designer based out of London, UK...
            </p>
            <p>My background is in teaching and marketing...</p>
            <Link href="/resume.pdf" className="btn">
              My Resume
            </Link>
          </div>
          <div className="about__photo-container">
            <Image
              src={JaneImage}
              alt="Jane Smith"
              width={400}
              height={400}
              className="about__photo"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
