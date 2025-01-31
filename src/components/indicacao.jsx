import React,{ useState, useEffect} from "react";
import './Indicacao.css';
import { Card, Carousel, Row, Col } from 'react-bootstrap';
import indicationData from '../data/indication.json';

const SIZE ={
  mobile: 768,
  medium: 940
}

function Indicacao() {
  const [screenSize, setScreenSize] = useState({
    isMobile: window.innerWidth < SIZE.mobile,
    isMedium: window.innerWidth < SIZE.medium
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        isMobile: window.innerWidth < SIZE.mobile,
        isMedium: window.innerWidth < SIZE.medium
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  },[]);

  const getColumns = () => {
    const { isMobile, isMedium } = screenSize;
    if(isMobile) return 1;
    if(isMedium) return 2;
    return 3;
  };

  const groupedCards = indicationData.reduce((acc, curr, i) => {
    const columns = getColumns();
    if(i % columns === 0) acc.push([]);
    acc[acc.length - 1].push(curr);
    return acc;
  },[]);

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