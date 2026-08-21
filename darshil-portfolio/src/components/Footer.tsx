import { CONTACT } from "./Contact";
import logoD from "@/assets/logo-d.png";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container py-5">
        <div className="row g-4 align-items-start">
          <div className="col-lg-7">
            <p className="brand mb-2 d-flex align-items-center gap-2">
              <img src={logoD} alt="Darshil Chaudhry logo" width={32} height={32} loading="lazy" />
              Darshil<span className="brand-accent">Chaudhry</span>
            </p>
            <p className="text-muted-soft mb-0">Building modern and responsive web experiences.</p>
          </div>
          <div className="col-lg-5">
            <h2 className="h6 mb-3">Connect</h2>
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
        <hr className="footer-rule" />
        <p className="text-center text-muted-soft small mb-0">
          © 2026 Darshil Chaudhry. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
