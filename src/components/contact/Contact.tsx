import Link from 'next/link';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="row">
        <h2>Get in Touch</h2>
        <div className="contact__info">
          <p>
            Are you looking for a fast-performing and user-friendly website...
          </p>
          <Link href="mailto:you@example.com" className="btn">
            you@example.com
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
