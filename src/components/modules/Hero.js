import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Hero = ({ isLoaded, title }) => {
  if (isLoaded) {
    return (
      <Container>
        <Row className="hero">
          <Col md={12} className="align-self-center text-white">
            <h1>{title}</h1>
          </Col>
          <Col>
            <Button variant="primary">Secondary</Button>
          </Col>
        </Row>
      </Container>
    );
  }
  return <p>Loading...</p>;
};

export default Hero;
