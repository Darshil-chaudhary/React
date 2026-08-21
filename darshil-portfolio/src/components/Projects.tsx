import projectImage from "@/assets/images/project-placeholder.jpg";
import SectionTitle from "./SectionTitle";

const projects = [
  {
    title: "React + Bootstrap Material Kit 2 Website",
    desc: "A multi-section marketing website built with React components and the Material Kit 2 design language.",
    tech: ["React", "Bootstrap", "CSS"],
  },
  {
    title: "Samsung India Responsive Website Clone",
    desc: "Pixel-focused responsive clone practising layout, grid systems and mobile-first breakpoints.",
    tech: ["HTML", "CSS", "Bootstrap"],
  },
  {
    title: "Product Management / CRUD Application",
    desc: "Create, read, update and delete products with form validation and dynamic state handling.",
    tech: ["React", "JavaScript", "Bootstrap"],
  },
  {
    title: "To-Do Application",
    desc: "Task manager with add, complete and delete actions plus persistent list rendering.",
    tech: ["React", "JavaScript", "CSS"],
  },
  {
    title: "Signup & Signin Form",
    desc: "Clean authentication UI with client-side validation and responsive form layout.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Product Table Application",
    desc: "Sortable and searchable product table demonstrating list rendering and filtering logic.",
    tech: ["React", "Bootstrap", "JavaScript"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-pad">
      <div className="container">
        <SectionTitle
          eyebrow="Projects"
          title="Things I have built"
          subtitle="Practice projects that helped me apply what I learned in real interfaces."
        />
        <div className="row g-4">
          {projects.map((p) => (
            <div className="col-md-6 col-lg-4 fade-up" key={p.title}>
              <article className="surface-card h-100 project-card hover-lift">
                <div className="project-media">
                  <img
                    src={projectImage}
                    alt={`${p.title} preview placeholder`}
                    loading="lazy"
                    width={1024}
                    height={640}
                    className="img-fluid"
                  />
                </div>
                <div className="p-4 d-flex flex-column h-100">
                  <h3 className="h6 mb-2">{p.title}</h3>
                  <p className="text-muted-soft small">{p.desc}</p>
                  <div className="d-flex flex-wrap gap-2 mb-4">
                    {p.tech.map((t) => (
                      <span className="chip" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="d-flex gap-2 mt-auto">
                    <a className="btn btn-accent btn-sm flex-fill" href="#projects">
                      <i className="bi bi-box-arrow-up-right me-1" /> Live Demo
                    </a>
                    <a
                      className="btn btn-ghost btn-sm flex-fill"
                      href="https://github.com/Darshil-chaudhary"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bi bi-github me-1" /> GitHub
                    </a>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
