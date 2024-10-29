'use client';

import Link from 'next/link';
import Navigation from '../navigation/Navigation';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header} role="banner" id="top">
      <div className="row">
        <Navigation />
      </div>
      <div className="row">
        <div className={styles.text}>
          <h1 className={styles.title}>
            <span>Itab Ghazouani</span>
          </h1>
          <p className={styles.description}>
            A Front-End Developer based in Barcelona, Spain
          </p>
          <Link
            href="#contact"
            className="btn btn--orange"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector('#contact')
                ?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get in touch
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
