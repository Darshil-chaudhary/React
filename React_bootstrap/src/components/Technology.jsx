import { Container, Row, Col, Card } from "react-bootstrap";

const technologies = [
  {
    name: "Bootstrap 5",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Vue",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  },
  {
    name: "Angular",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  },
  {
    name: "Tailwind",
    logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
  },
  {
    name: "Figma",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
];

function Technology() {
  return (
    <section className="technology-section py-5">

      <Container>

        <div className="text-center mb-5">

          <h1 className="display-4 fw-bold">
            Available on these technologies
          </h1>

          <p className="text-muted fs-5">
            Material Kit is available in many technologies so you can
            choose the one you are familiar with.
          </p>

        </div>

        <Row className="g-4 justify-content-center">

          {technologies.map((tech, index) => (

            <Col
              lg={2}
              md={4}
              sm={6}
              xs={6}
              key={index}
            >

              <Card className="tech-card h-100 text-center border-0 shadow-sm">

                <Card.Body>

                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="tech-logo"
                  />

                  <h5 className="mt-4">
                    {tech.name}
                  </h5>

                </Card.Body>

              </Card>

            </Col>

          ))}

        </Row>

      </Container>
    </section>
  );
}

export default Technology;