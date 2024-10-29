import Link from 'next/link';
import styles from './contact.module.css';

const Contact = () => {
  return (
    <section className={styles.section} id="contact">
      <div className="row">
        <h2>Get in Touch</h2>
        <div className={styles.container}>
          <p className={styles.text}>
            Are you looking for a committed front-end developer ready to bring
            fresh ideas to your team? 🚀 If you need a fast learner who’s eager
            to dive into new projects and deliver high-quality results, I’d love
            to connect. I’m available to start right away and ready to make an
            impact from day one! 🌟 Reach out by email or phone, and I’ll
            respond as soon as possible—I look forward to working together! 📞💼
          </p>
          <div className={styles.contactContainer}>
            <Link
              href="mailto:you@example.com"
              className={`btn ${styles.email}`}
            >
              itab.ghazouani@gmail.com
            </Link>
            <Link href="#contact" className={`btn ${styles.email}`}>
              +34 722 308 413
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
