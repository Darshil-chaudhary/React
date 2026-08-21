import { useEffect, useState } from "react";
import logoD from "@/assets/logo-d.png";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top site-nav ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container">
        <a
          className="navbar-brand brand d-flex align-items-center gap-2"
          href="#home"
          onClick={() => setOpen(false)}
        >
          <img src={logoD} alt="Darshil Chaudhry logo" width={34} height={34} />
          Darshil<span className="brand-accent">Chaudhry</span>
        </a>

        <button
          className="navbar-toggler nav-burger"
          type="button"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
        >
          <i className={`bi ${open ? "bi-x-lg" : "bi-list"}`} />
        </button>

        <div className={`collapse navbar-collapse ${open ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-1">
            {links.map((l) => (
              <li className="nav-item" key={l.id}>
                <a className="nav-link nav-link-custom" href={`#${l.id}`} onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
            <li className="nav-item mt-2 mt-lg-0 ms-lg-2">
              <a className="btn btn-accent btn-sm px-3" href="#contact" onClick={() => setOpen(false)}>
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
