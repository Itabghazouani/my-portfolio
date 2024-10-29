import Link from 'next/link';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section className={styles.section} id="contact">
      <div className="row">
        <h2>Get in Touch</h2>
        <div className={styles.container}>
          <p className={styles.text}>
            Are you looking for a fast-performing and user-friendly website to
            represent your product or business? or looking for any kind of
            consultation? or want to ask questions? or have some advice for me
            or just want to say &quot;Hi 👋&quot; in any case feel free to Let
            me know. I will do my best to respond back. 😊 The quickest way to
            reach out to me is via an email.
          </p>
          <Link href="mailto:you@example.com" className={`btn ${styles.email}`}>
            you@example.com
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
