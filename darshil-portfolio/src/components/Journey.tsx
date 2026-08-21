import SectionTitle from "./SectionTitle";

const steps = [
  { icon: "bi-filetype-html", title: "HTML", text: "Structure, semantics and accessible markup." },
  { icon: "bi-filetype-css", title: "CSS", text: "Layout, responsive design and transitions." },
  { icon: "bi-bootstrap", title: "Bootstrap", text: "Rapid, consistent UI with the Bootstrap 5 system." },
  { icon: "bi-filetype-js", title: "JavaScript", text: "Interactivity, DOM and modern ES6+ features." },
  { icon: "bi-filetype-jsx", title: "React.js", text: "Component-based applications with hooks and state." },
];

export default function Journey() {
  return (
    <section id="journey" className="section-pad section-alt">
      <div className="container">
        <SectionTitle
          eyebrow="Journey"
          title="My Development Journey"
          subtitle="A step-by-step progression through the web stack, built on C and C++ programming fundamentals."
        />
        <div className="journey-grid">
          {steps.map((s, i) => (
            <article className="surface-card p-4 hover-lift fade-up journey-step" key={s.title}>
              <span className="step-number">{String(i + 1).padStart(2, "0")}</span>
              <span className="icon-badge my-3">
                <i className={`bi ${s.icon}`} />
              </span>
              <h3 className="h6 mb-2">{s.title}</h3>
              <p className="text-muted-soft small mb-0">{s.text}</p>
            </article>
          ))}
        </div>
        <p className="text-center text-muted-soft mt-4 mb-0">
          <i className="bi bi-cpu me-2" />
          Programming fundamentals: <span className="text-accent">C</span> and{" "}
          <span className="text-accent">C++</span>
        </p>
      </div>
    </section>
  );
}
