import React, { useState, useEffect } from "react";
import "./Apoio.css";
import { Card, Carousel, Row, Col } from "react-bootstrap";
import indicationData from "../data/indication.json";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Typography } from "@mui/material";

const SIZE = {
  mobile: 768,
  medium: 940,
};

function Apoio() {
  const [screenSize, setScreenSize] = useState({
    isMobile: window.innerWidth < SIZE.mobile,
    isMedium: window.innerWidth < SIZE.medium,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        isMobile: window.innerWidth < SIZE.mobile,
        isMedium: window.innerWidth < SIZE.medium,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getColumns = () => {
    const { isMobile, isMedium } = screenSize;
    if (isMobile) return 1;
    if (isMedium) return 2;
    return 3;
  };

  const groupedCards = indicationData.reduce((acc, curr, i) => {
    const columns = getColumns();
    if (i % columns === 0) acc.push([]);
    acc[acc.length - 1].push(curr);
    return acc;
  }, []);

  return (
    <div>
      <Typography className="text-white text-center mb-4" variant="h2">
        Grupos de Apoio
      </Typography>
      <Carousel className="carousel" data-bs-theme="dark">
        {groupedCards.map((group, idx) => (
          <Carousel.Item key={idx}>
            <Row>
              {group.map((grupo) => (
                <Col md={4} key={grupo.id}>
                  <Card className="mx-4">
                    <Card.Img
                      variant="top"
                      src={grupo.imagem}
                      alt={grupo.nome}
                    />
                    <Card.Body>
                      <Card.Title>{grupo.nome}</Card.Title>
                      <Card.Text>
                        {grupo.descricao}
                        <br />
                        <strong>Local:</strong> {grupo.endereco}
                        <br />
                        <strong>Horários:</strong> {grupo.horarios}
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">
                        {grupo.tipoAtendimento} |{" "}
                        {grupo.gratuito
                          ? "Gratuito"
                          : `Valor: ${grupo.valorMensal}`}
                      </small>
                    </Card.Footer>
                  </Card>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Apoio;
