import SectionTitle from "./SectionTitle";

const skills = [
  { icon: "bi-filetype-html", name: "HTML", desc: "Semantic structure and accessible markup.", level: 85 },
  { icon: "bi-filetype-css", name: "CSS", desc: "Flexbox, grid, transitions and responsive styling.", level: 80 },
  { icon: "bi-bootstrap", name: "Bootstrap", desc: "Bootstrap 5 grid, components and utilities.", level: 80 },
  { icon: "bi-filetype-js", name: "JavaScript", desc: "ES6+, DOM handling and API basics.", level: 70 },
  { icon: "bi-filetype-jsx", name: "React.js", desc: "Components, props, state and hooks.", level: 68 },
  { icon: "bi-file-code", name: "C", desc: "Programming fundamentals and logic building.", level: 60 },
  { icon: "bi-file-code-fill", name: "C++", desc: "OOP concepts and problem solving.", level: 58 },
];

export default function Skills() {
  return (
    <section id="skills" className="section-pad">
      <div className="container">
        <SectionTitle
          eyebrow="Skills"
          title="Technologies I work with"
          subtitle="An honest overview of where I stand as a growing web developer."
        />
        <div className="row g-4">
          {skills.map((s) => (
            <div className="col-md-6 col-lg-4 fade-up" key={s.name}>
              <article className="surface-card h-100 p-4 hover-lift">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <span className="icon-badge">
                    <i className={`bi ${s.icon}`} />
                  </span>
                  <div>
                    <h3 className="h6 mb-0">{s.name}</h3>
                    <span className="small text-muted-soft">{s.level}% proficiency</span>
                  </div>
                </div>
                <p className="text-muted-soft small">{s.desc}</p>
                <div
                  className="skill-track"
                  role="progressbar"
                  aria-label={`${s.name} proficiency`}
                  aria-valuenow={s.level}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <span className="skill-fill" style={{ width: `${s.level}%` }} />
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
