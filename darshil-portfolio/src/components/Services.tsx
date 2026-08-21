import SectionTitle from "./SectionTitle";

const services = [
  { icon: "bi-phone", title: "Responsive Web Design", text: "Layouts that adapt cleanly across mobile, tablet and desktop." },
  { icon: "bi-filetype-jsx", title: "React Development", text: "Reusable components, state handling and clean structure." },
  { icon: "bi-layout-text-window", title: "Frontend Development", text: "Turning designs into accessible, semantic interfaces." },
  { icon: "bi-bootstrap", title: "Bootstrap UI Development", text: "Fast, consistent UI built on the Bootstrap 5 system." },
  { icon: "bi-filetype-js", title: "JavaScript Development", text: "Interactive features and dynamic page behaviour." },
];

export default function Services() {
  return (
    <section id="services" className="section-pad">
      <div className="container">
        <SectionTitle eyebrow="Services" title="What I can help with" />
        <div className="row g-4">
          {services.map((s) => (
            <div className="col-md-6 col-lg-4 fade-up" key={s.title}>
              <article className="surface-card h-100 p-4 hover-lift">
                <span className="icon-badge mb-3">
                  <i className={`bi ${s.icon}`} />
                </span>
                <h3 className="h6 mb-2">{s.title}</h3>
                <p className="text-muted-soft small mb-0">{s.text}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
