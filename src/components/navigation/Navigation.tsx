'use client';

import Link from 'next/link';
import styles from './navigation.module.css';

const Navigation = () => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={styles.nav} role="navigation">
      <ul className={styles.items}>
        <li className={styles.item}>
          <Link
            href="#work"
            className={styles.link}
            onClick={(e) => handleClick(e, '#work')}
          >
            Work
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            href="#about"
            className={styles.link}
            onClick={(e) => handleClick(e, '#about')}
          >
            About
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            href="#contact"
            className={styles.link}
            onClick={(e) => handleClick(e, '#contact')}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
