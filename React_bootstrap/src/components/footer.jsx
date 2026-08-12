import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="footer">

      <Container>

        <Row className="gy-4">

          <Col lg={3} md={6}>
            <h5>Company</h5>

            <ul>
              <li>About</li>
              <li>Careers</li>
              <li>Blog</li>
            </ul>
          </Col>

          <Col lg={3} md={6}>
            <h5>Resources</h5>

            <ul>
              <li>Documentation</li>
              <li>Help Center</li>
              <li>Support</li>
            </ul>
          </Col>

          <Col lg={3} md={6}>
            <h5>Legal</h5>

            <ul>
              <li>Privacy Policy</li>
              <li>Terms</li>
              <li>License</li>
            </ul>
          </Col>

          <Col lg={3} md={6}>
            <h5>Contact</h5>

            <ul>
              <li>hello@example.com</li>
              <li>+91 9876543210</li>
              <li>India</li>
            </ul>
          </Col>

        </Row>

        <hr className="my-5" />

        <p className="text-center text-secondary mb-0">
          © 2026 Material Kit React Clone. Built with React & Bootstrap.
        </p>

      </Container>

    </footer>
  );
}

export default Footer;