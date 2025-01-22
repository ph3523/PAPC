import React from "react";
import './indicacao.css';
import { Card, Carousel, Row, Col } from 'react-bootstrap';
import indicationData from '../data/indication.json';

function Indicacao() {
  // Agrupa os cards em arrays de 3 itens
  const groupedCards = indicationData.reduce((acc, curr, i) => {
    if (i % 3 === 0) acc.push([]);
    acc[acc.length - 1].push(curr);
    return acc;
  }, []);

  return (
    <div>
      <h1 className="text-center mb-4">Grupos de Apoio</h1>
      <Carousel>
        {groupedCards.map((group, idx) => (
          <Carousel.Item key={idx}>
            <Row>
              {group.map((grupo) => (
                <Col md={4} key={grupo.id}>
                  <Card className="m-2">
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
                        {grupo.tipoAtendimento} | {grupo.gratuito ? 'Gratuito' : `Valor: ${grupo.valorMensal}`}
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

export default Indicacao;