import { Container, Button } from "react-bootstrap";
import {
  BsGithub,
  BsTwitterX,
  BsInstagram,
  BsFacebook,
} from "react-icons/bs";

function Support() {
  return (
    <section className="support-section">

      <Container>

        <div className="text-center">

          <h1 className="display-3 fw-bold mb-4">
            Thank you for your support!
          </h1>

          <p className="lead text-secondary mx-auto support-text">
            We deliver the best web products and continuously improve them.
            If you enjoy this project, please support us by starring it on
            GitHub or sharing it with your friends.
          </p>

          <div className="mt-5 d-flex justify-content-center flex-wrap gap-3">

            <Button
              variant="dark"
              size="lg"
              className="support-btn"
            >
              <BsGithub className="me-2" />
              Star on GitHub
            </Button>

            <Button
              variant="primary"
              size="lg"
              className="support-btn"
            >
              Free Download
            </Button>

          </div>

          <div className="social-icons mt-5">

            <a href="#">
              <BsTwitterX />
            </a>

            <a href="#">
              <BsFacebook />
            </a>

            <a href="#">
              <BsInstagram />
            </a>

            <a href="#">
              <BsGithub />
            </a>

          </div>

        </div>

      </Container>

    </section>
  );
}

export default Support;