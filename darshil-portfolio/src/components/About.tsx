import SectionTitle from "./SectionTitle";

const highlights = [
  {
    icon: "bi-code-slash",
    title: "Frontend Foundations",
    text: "Practical training in HTML, CSS and Bootstrap 5 for clean, semantic and responsive layouts.",
  },
  {
    icon: "bi-braces",
    title: "JavaScript & React",
    text: "Hands-on learning with modern JavaScript and component-based React applications.",
  },
  {
    icon: "bi-cpu",
    title: "Programming Basics",
    text: "Core programming fundamentals and problem solving with C and C++.",
  },
  {
    icon: "bi-phone",
    title: "Responsive Mindset",
    text: "Mobile-first thinking so every interface works well on phone, tablet and desktop.",
  },
];

export default function About() {
  return (
    <section id="about" className="section-pad section-alt">
      <div className="container">
        <SectionTitle
          eyebrow="About Me"
          title="A developer focused on clean, modern interfaces"
          subtitle="I have completed learning and practical training in modern web development technologies including HTML, CSS, Bootstrap, JavaScript and React, along with programming languages C and C++."
        />
        <div className="row g-4">
          <div className="col-lg-5 fade-up">
            <article className="surface-card h-100 p-4 p-lg-5">
              <h3 className="h4 mb-3">My approach</h3>
              <p className="text-muted-soft">
                I enjoy turning designs into accessible, well-structured interfaces. Every project I
                build starts with semantic HTML, a consistent layout system and reusable components.
              </p>
              <p className="text-muted-soft mb-0">
                I keep learning by building real applications — CRUD apps, forms, dashboards and
                responsive website clones — and refining the details until they feel professional.
              </p>
            </article>
          </div>
          <div className="col-lg-7">
            <div className="row g-4">
              {highlights.map((h) => (
                <div className="col-sm-6 fade-up" key={h.title}>
                  <article className="surface-card h-100 p-4 hover-lift">
                    <span className="icon-badge mb-3">
                      <i className={`bi ${h.icon}`} />
                    </span>
                    <h3 className="h6 mb-2">{h.title}</h3>
                    <p className="text-muted-soft small mb-0">{h.text}</p>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
