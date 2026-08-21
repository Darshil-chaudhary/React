import { useState, type FormEvent } from "react";
import SectionTitle from "./SectionTitle";

export const CONTACT = {
  email: "darshilvinodbhai@gmail.com",
  phone: "7984523299",
  github: "https://github.com/Darshil-chaudhary",
  instagram: "https://www.instagram.com/darshil__2412/",
  linkedin: "YOUR_LINKEDIN_URL",
};

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="section-pad section-alt">
      <div className="container">
        <SectionTitle
          eyebrow="Contact"
          title="Let's work together"
          subtitle="Have a project, an opportunity or a question? Send a message and I'll get back to you."
        />
        <div className="row g-4 justify-content-center">
          <div className="col-lg-4 fade-up">
            <div className="surface-card p-4 h-100">
              <h3 className="h6 mb-3">Contact details</h3>
              <ul className="list-unstyled contact-list mb-4">
                <li>
                  <i className="bi bi-envelope" />
                  <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                </li>
                <li>
                  <i className="bi bi-telephone" />
                  <a href={`tel:${CONTACT.phone}`}>{CONTACT.phone}</a>
                </li>
                <li>
                  <i className="bi bi-geo-alt" />
                  <span>Kudasan, Gandhinagar, Gujarat, India</span>
                </li>
              </ul>
              <h3 className="h6 mb-3">Find me online</h3>
              <div className="d-flex gap-2">
                <a className="social-btn" href={CONTACT.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                  <i className="bi bi-github" />
                </a>
                <a className="social-btn" href={CONTACT.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <i className="bi bi-linkedin" />
                </a>
                <a className="social-btn" href={CONTACT.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                  <i className="bi bi-instagram" />
                </a>
                <a className="social-btn" href={`mailto:${CONTACT.email}`} aria-label="Email">
                  <i className="bi bi-envelope-fill" />
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-7 fade-up delay-1">
            <form className="surface-card p-4 p-lg-5" onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label" htmlFor="name">Name</label>
                  <input className="form-control field" id="name" name="name" required />
                </div>
                <div className="col-md-6">
                  <label className="form-label" htmlFor="email">Email</label>
                  <input className="form-control field" id="email" name="email" type="email" required />
                </div>
                <div className="col-12">
                  <label className="form-label" htmlFor="subject">Subject</label>
                  <input className="form-control field" id="subject" name="subject" required />
                </div>
                <div className="col-12">
                  <label className="form-label" htmlFor="message">Message</label>
                  <textarea className="form-control field" id="message" name="message" rows={5} required />
                </div>
                <div className="col-12 d-flex flex-wrap align-items-center gap-3">
                  <button className="btn btn-accent px-4 py-2" type="submit">
                    <i className="bi bi-send me-2" />Send Message
                  </button>
                  {sent ? (
                    <span className="text-accent small" role="status">
                      Thanks! Your message has been recorded.
                    </span>
                  ) : null}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
