import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container fluid className="project-section">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Portfolio | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        <Container fluid className="project-sectionA">
          <h1 className="project-heading">
            My Recent <strong className="purple">Projects</strong>
          </h1>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            {dataportfolio.map((data, i) => (
              <Col md={4} className="project-card" key={i}>
                <Card className="project-card-view">
                  <div className="project-image-wrapper">
                    <Card.Img variant="top" src={data.img} alt="project-img" className="project-image" />
                  </div>
                  <Card.Body>
                    <Card.Title className="project-title">{data.title}</Card.Title>
                    <Card.Text className="project-description">
                      {data.description}
                    </Card.Text>
                    <Button className="project-button" href={data.link} target="_blank">
                    View Project
                  </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </HelmetProvider>
  );
};
