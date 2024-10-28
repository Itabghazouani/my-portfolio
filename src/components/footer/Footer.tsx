import Image from 'next/image';
import Link from 'next/link';
import { SOCIAL_LINKS } from '@/lib/constants';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="row">
        <ul className="footer__social-links">
          {SOCIAL_LINKS.map((link) => (
            <li key={link.platform} className="footer__social-link-item">
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
                  className="footer__social-image"
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
