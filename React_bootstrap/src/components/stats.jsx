import { Container, Row, Col } from "react-bootstrap";

function Stats() {
  return (
    <Container className="stats-card shadow">

      <Row>

        <Col md={4} className="text-center p-5 border-end">

          <h1 className="text-primary fw-bold">70+</h1>

          <h3>Coded Elements</h3>

          <p>
            From buttons, to inputs, navbars,
            alerts or cards, you are covered.
          </p>

        </Col>

        <Col md={4} className="text-center p-5 border-end">

          <h1 className="text-primary fw-bold">15+</h1>

          <h3>Design Blocks</h3>

          <p>
            Mix the sections, change the colors
            and unleash your creativity.
          </p>

        </Col>

        <Col md={4} className="text-center p-5">

          <h1 className="text-primary fw-bold">4</h1>

          <h3>Pages</h3>

          <p>
            Save 3-4 weeks of work when you use
            our pre-made pages.
          </p>

        </Col>

      </Row>

    </Container>
  );
}

export default Stats;