import React,{ useState, useEffect} from "react";
import './indicacao.css';
import { Card, Carousel, Row, Col } from 'react-bootstrap';
import indicationData from '../data/indication.json';

function Indicacao() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  // arroy function para verificar o tamanho da tela
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  // Agrupa os cards em arrays de 3 itens ou em arrays de 1 item se for para a resolução menor que 768px
  const groupedCards = indicationData.reduce((acc, curr, i) => {
    if (isMobile || i % (isMobile ? 1 : 3) === 0) acc.push([]);
    acc[acc.length - 1].push(curr);
    return acc;
  }, []);

  return (
    <div>
      <h1 className="text-white text-center mb-4">Grupos de Apoio</h1>
      <Carousel data-bs-theme="dark">
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