import { Container, Row, Col, Card, Badge } from "react-bootstrap";

const cards = [
  {
    title: "Page Headers",
    examples: "10 Examples",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
  },
  {
    title: "Features",
    examples: "14 Examples",
    img: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800",
  },
  {
    title: "Pricing",
    examples: "8 Examples",
    img: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=800",
  },
  {
    title: "FAQ",
    examples: "1 Example",
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
  },
  {
    title: "Blog Posts",
    examples: "11 Examples",
    img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800",
  },
  {
    title: "Testimonials",
    examples: "11 Examples",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
  },
];

export default function HugeCollection() {
  return (
    <section className="py-5 bg-white">
      <Container>

        <div className="text-center mb-5">
          <Badge bg="primary" className="px-3 py-2">
            INFINITE COMBINATIONS
          </Badge>

          <h1 className="fw-bold mt-3 display-4">
            Huge collection of sections
          </h1>

          <p className="text-muted fs-4">
            We have created multiple options for you to put together and
            customise into pixel perfect pages.
          </p>
        </div>

        <Row>

          <Col lg={3} className="mb-4">
            <h1 className="fw-bold">Design Blocks</h1>

            <p className="text-muted fs-4">
              A selection of 45 page sections that fit perfectly in any
              combination.
            </p>
          </Col>

          <Col lg={9}>
            <Row>

              {cards.map((card, index) => (
                <Col md={6} lg={4} key={index} className="mb-4">

                  <Card className="border-0 shadow-sm collection-card">

                    <Card.Img
                      variant="top"
                      src={card.img}
                      style={{
                        height: "180px",
                        objectFit: "cover",
                      }}
                    />

                    <Card.Body>

                      <Card.Title>{card.title}</Card.Title>

                      <Card.Text className="text-muted">
                        {card.examples}
                      </Card.Text>

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