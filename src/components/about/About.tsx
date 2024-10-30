'use client';

import Image from 'next/image';
import ItabPhoto from '../../../public/assets/itab-photo.jpg';
import styles from './about.module.css';
import { useState } from 'react';
import { RESUMES } from '@/lib/constants';

const About = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);

  const handleDownload = async (file: string, fileName: string) => {
    setIsDownloading(true);
    try {
      const response = await fetch(file);
      if (!response.ok) throw new Error('Download failed');

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading resume:', error);
      alert('Failed to download resume. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  };

  const handleClickOutside = () => {
    setShowLanguages(false);
  };

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
            <div className={styles.resumeContainer}>
              <button
                onClick={() => setShowLanguages(!showLanguages)}
                className={`btn ${styles.downloadingButton} ${
                  isDownloading ? styles.downloading : ''
                }`}
                disabled={isDownloading}
              >
                {isDownloading ? 'Downloading...' : 'Get my Resume ▾'}
              </button>

              {showLanguages && (
                <>
                  <div
                    className="overlay"
                    onClick={handleClickOutside}
                    style={{
                      position: 'fixed',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      zIndex: 5,
                    }}
                  />
                  <div className={styles.languageSelector}>
                    {RESUMES.map((resume) => (
                      <button
                        key={resume.language}
                        onClick={() =>
                          handleDownload(resume.file, resume.fileName)
                        }
                        className={styles.languageOption}
                      >
                        <span>{resume.flag}</span>
                        {resume.language}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
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
