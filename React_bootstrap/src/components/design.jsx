import { Container, Row, Col, Card } from "react-bootstrap";

const cards = [
  "Page Headers",
  "Features",
  "Pricing",
  "FAQ",
  "Blog Posts",
  "Testimonials",
];

function design() {
  return (
    <Container className="pb-5">

      <Row>

        <Col lg={3}>
          <h2>Design Blocks</h2>

          <p>
            A selection of page sections that fit
            perfectly in any combination.
          </p>
        </Col>

        <Col lg={9}>

          <Row>

            {cards.map((item, index) => (

              <Col md={4} className="mb-4" key={index}>

                <Card className="shadow-sm">

                  <img
                    src={`https://picsum.photos/400/220?random=${index}`}
                    className="card-img-top"
                    alt=""
                  />

                  <Card.Body>

                    <h6>{item}</h6>

                    <small className="text-muted">
                      Examples
                    </small>

                  </Card.Body>

                </Card>

              </Col>

            ))}

          </Row>

        </Col>

      </Row>

    </Container>
  );
}

export default design;