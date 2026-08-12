import { Container, Row, Col, Card } from "react-bootstrap";

function Features() {
  return (
    <section className="features-section">
      <Container>

        <Row className="align-items-center gy-5">

          {/* Left Card */}

          <Col lg={4} md={12}>
            <Card className="feature-card shadow">

            <Card.Img
               variant="top"
              src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/card-blog.jpg"
              />

              <Card.Body className="text-center text-white feature-overlay">

                <i className="bi bi-hand-index-thumb-fill feature-icon"></i>

                <h2 className="fw-bold mt-3">
                  Feel the
                  <br />
                  Material Kit
                </h2>

                <p>
                  All the MUI components that you need in a development have
                  been re-designed with the new look.
                </p>

              </Card.Body>

            </Card>
          </Col>

          {/* Right Side */}

          <Col lg={8}>
            <Row className="gy-5">

              <Col md={6}>
                <div className="info-box">
                  <i className="bi bi-phone feature-i"></i>

                  <h3>Full Documentation</h3>

                  <p>
                    Built by developers for developers. Check the foundation and
                    you will find everything inside our documentation.
                  </p>
                </div>
              </Col>

              <Col md={6}>
                <div className="info-box">
                  <i className="bi bi-display feature-i"></i>

                  <h3>MUI Ready</h3>

                  <p>
                    The world's most popular react components library for
                    building user interfaces.
                  </p>
                </div>
              </Col>

              <Col md={6}>
                <div className="info-box">
                  <i className="bi bi-cash-stack feature-i"></i>

                  <h3>Save Time & Money</h3>

                  <p>
                    Creating your design from scratch with dedicated designers
                    can be very expensive. Start with our Design System.
                  </p>
                </div>
              </Col>

              <Col md={6}>
                <div className="info-box">
                  <i className="bi bi-laptop feature-i"></i>

                  <h3>Fully Responsive</h3>

                  <p>
                    Regardless of the screen size, the website content will
                    naturally fit the given resolution.
                  </p>
                </div>
              </Col>

            </Row>
          </Col>

        </Row>

      </Container>
    </section>
  );
}

export default Features;