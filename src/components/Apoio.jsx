import React,{ useState, useEffect} from "react";
import './Apoio.css';
import { Card, Carousel, Row, Col } from 'react-bootstrap';
import { listarGruposApoio } from "../services/grupoApoioService"; 

const SIZE ={
  mobile: 768,
  medium: 940
}

function Apoio() {
  const [screenSize, setScreenSize] = useState({
    isMobile: window.innerWidth < SIZE.mobile,
    isMedium: window.innerWidth < SIZE.medium
  });
  const [gruposApoio, setGruposApoio] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    async function FetchGruposApoio() {
      setLoading(true);

      try {
        const { ok, data } = await listarGruposApoio();
        if (!ok) {
          const gruposMapeados = data.map(grupo => ({
            id: grupo.id,
            nome: grupo.nome,
            descricao: grupo.descricao,
            endereco: grupo.local,
            horarios: grupo.horario,
            tipoAtendimento: grupo.tipo_atendimento,
            gratuito: grupo.gratuito,
            valorMensal: !grupo.gratuito ? grupo.valor : null,
            publicoAlvo: grupo.publico_alvo,
            // Use uma imagem padrão para todos os grupos ou crie uma lógica para relacionar imagens
            imagem: `../assets/img_gp${Math.floor(Math.random() * 6) + 1}.jpg`
          }));

          setGruposApoio(gruposMapeados);
        }
        else {
          setError(data.error || "Erro ao carregar os grupos de apoio.");
        }

      }
      catch (error) {
        console.error("Erro ao buscar grupos de apoio:", error);
        setError("Erro ao carregar os grupos de apoio.");
      }
      finally {
        setLoading(false);
      }
    }

    fetchGruposApoio();

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

  if (loading) return <div className="text-center">Carregando grupos de apoio...</div>;

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

export default Apoio;