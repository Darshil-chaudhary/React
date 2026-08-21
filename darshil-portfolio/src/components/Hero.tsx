import heroImage from "@/assets/images/hero-illustration.jpg";

export default function Hero() {
  return (
    <section id="home" className="hero-section section-pad">
      <div className="hero-glow" aria-hidden="true" />
      <div className="container position-relative">
        <div className="row align-items-center g-5">
          <div className="col-lg-7 fade-up">
            <span className="pill mb-3 d-inline-flex align-items-center gap-2">
              <span className="pill-dot" /> Available for opportunities
            </span>
            <h1 className="hero-title">
              Hello, I&apos;m <span className="text-gradient">Darshil Chaudhry</span>
            </h1>
            <p className="hero-subtitle">React Developer | Web Developer</p>
            <p className="lead-muted">
              I build responsive and modern web applications using React, JavaScript, Bootstrap, HTML
              and CSS.
            </p>
            <div className="d-flex flex-wrap gap-3 mt-4">
              <a href="#projects" className="btn btn-accent px-4 py-2">
                View My Work
              </a>
              <a href="#contact" className="btn btn-ghost px-4 py-2">
                Contact Me
              </a>
            </div>
            <div className="d-flex flex-wrap gap-4 mt-5 hero-stats">
              <div>
                <strong>7+</strong>
                <span>Technologies</span>
              </div>
              <div>
                <strong>6+</strong>
                <span>Projects Built</span>
              </div>
              <div>
                <strong>BCA</strong>
                <span>Computer Applications</span>
              </div>
            </div>
          </div>
          <div className="col-lg-5 fade-up delay-2">
            <div className="hero-image-wrap">
              <img
                src={heroImage}
                alt="Illustration of a developer workspace with code editor"
                width={1024}
                height={1024}
                className="img-fluid rounded-4"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
