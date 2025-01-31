import "./styles/Home.css";
import Apoio from "../components/Apoio";
import ListaDepoimentos from "../components/depoimento";

function Home() {
  return (
    <>
      <div className="home">
        <main>
          <section id="banner">
            <h1>Bem-vindo ao PAPC</h1>
          </section>
          <section id="actions">
            <div className="action-item">
              <h4>Reserve consultas online com médicos e dentistas.</h4>
              <button>Agende sua consulta</button>
            </div>
            <div className="action-item">
              <h2>Encontre um médico</h2>
              <input type="text" placeholder="Buscar médico ou clínica" />
              <button>Buscar</button>
            </div>
          </section>
          <section id="services">
            <h2>Nossos Serviços</h2>
            <p>Consultas online, prescrições digitais, e muito mais.</p>
          </section>
          <section id="reviews">
            <Apoio></Apoio>
          </section>
          <section>
            <ListaDepoimentos></ListaDepoimentos>
          </section>
        </main>
      </div>
    </>
  );
}

export default Home;
