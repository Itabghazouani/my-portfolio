import Image from 'next/image';
import Link from 'next/link';
import { SOCIAL_LINKS } from '@/lib/constants';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="row">
        <ul className={styles.socialList}>
          {SOCIAL_LINKS.map((link) => (
            <li key={link.platform} className={styles.socialItem}>
              <Link
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                title={`Link to ${link.platform} Profile`}
              >
                <Image
                  src={link.icon}
                  width={40}
                  height={40}
                  alt={link.platform}
                  className={styles.socialIcon}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
