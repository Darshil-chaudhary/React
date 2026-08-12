import { Container, Row, Col, Card } from "react-bootstrap";

const navigationCards = [
  {
    title: "Navbars",
    example: "4 Examples",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
  },
  {
    title: "Nav Tabs",
    example: "2 Examples",
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
  },
  {
    title: "Pagination",
    example: "3 Examples",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
  },
];

const inputCards = [
  {
    title: "Newsletters",
    example: "6 Examples",
    img: "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?w=800",
  },
  {
    title: "Contact Sections",
    example: "8 Examples",
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800",
  },
  {
    title: "Forms",
    example: "3 Examples",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",
  },
];

export default function NavigationSection() {
  return (
    <section className="py-5 bg-light">

      <Container>

        {/* Navigation */}

        <Row className="align-items-start mb-5">

          <Col lg={3} className="mb-4">

            <h1 className="fw-bold">Navigation</h1>

            <p className="text-muted fs-5">
              30+ components that will help go through the pages
            </p>

          </Col>

          <Col lg={9}>

            <Row>

              {navigationCards.map((item, index) => (
                <Col lg={4} md={6} key={index} className="mb-4">

                  <Card className="collection-card border-0 shadow-sm">

                    <Card.Img
                      variant="top"
                      src={item.img}
                      style={{ height: "180px", objectFit: "cover" }}
                    />

                    <Card.Body>

                      <h4>{item.title}</h4>

                      <p className="text-muted">{item.example}</p>

                    </Card.Body>

                  </Card>

                </Col>
              ))}

            </Row>

          </Col>

        </Row>

        {/* Input Areas */}

        <Row className="align-items-start">

          <Col lg={3} className="mb-4">

            <h1 className="fw-bold">Input Areas</h1>

            <p className="text-muted fs-5">
              50+ elements that you need for text manipulation and insertion.
            </p>

          </Col>

          <Col lg={9}>

            <Row>

              {inputCards.map((item, index) => (
                <Col lg={4} md={6} key={index} className="mb-4">

                  <Card className="collection-card border-0 shadow-sm">

                    <Card.Img
                      variant="top"
                      src={item.img}
                      style={{ height: "180px", objectFit: "cover" }}
                    />

                    <Card.Body>

                      <h4>{item.title}</h4>

                      <p className="text-muted">{item.example}</p>

                    </Card.Body>

                  </Card>

                </Col>
              ))}

            </Row>

          </Col>

        </Row>

      </Container>

    </section>
  );
}