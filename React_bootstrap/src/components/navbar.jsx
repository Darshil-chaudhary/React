import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function CustomNavbar() {
  return (
    <Navbar
      expand="lg"
      fixed="top"
      className="custom-navbar shadow"
    >
      <Container>
        <Navbar.Brand href="#" className="fw-bold text-dark">
          Material Kit 2
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="ms-auto align-items-lg-center">

            <NavDropdown
              title={
                <>
                  <i className="bi bi-grid-fill me-2"></i>
                  Pages
                </>
              }
            >
              <NavDropdown.Item>About Us</NavDropdown.Item>
              <NavDropdown.Item>Contact</NavDropdown.Item>
              <NavDropdown.Item>Author</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title={
                <>
                  <i className="bi bi-list me-2"></i>
                  Sections
                </>
              }
            >
              <NavDropdown.Item>Features</NavDropdown.Item>
              <NavDropdown.Item>Pricing</NavDropdown.Item>
              <NavDropdown.Item>FAQ</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title={
                <>
                  <i className="bi bi-file-earmark-text-fill me-2"></i>
                  Docs
                </>
              }
            >
              <NavDropdown.Item>Documentation</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#">
              <i className="bi bi-github me-2"></i>
              Github
            </Nav.Link>

            <button className="download-btn ms-lg-3 mt-3 mt-lg-0">
              FREE DOWNLOAD
            </button>

          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;