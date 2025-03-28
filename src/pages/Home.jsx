import { useEffect, useState } from "react";
import "./styles/Home.css";
import Apoio from "../components/Apoio";
import ListaDepoimentos from "../components/depoimento";
import FormDepoimento from "../components/FormDepoimento";

function Home() {
  const [nomeUsuario, setNomeUsuario] = useState("");
  const [pacienteId, setPacienteId] = useState(null);

  useEffect(() => {
    const nome = localStorage.getItem("nome");
    const id = localStorage.getItem("usuarioId");
    const tipo = localStorage.getItem("tipo");

    if (nome && tipo === "PACIENTE") {
      setNomeUsuario(nome);
      setPacienteId(parseInt(id));
    }
  }, []);

  return (
    <>
      <div className="home">
        <main>
          <section id="banner">
            <h1>
            {nomeUsuario ? `Bem-vindo, ${nomeUsuario}` : "Bem-vindo ao PAPC"}
            </h1>
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
            <Apoio />
          </section>l

          <section id="depoimentos">
            <h2>Deixe seu depoimento</h2>
            {pacienteId ? (
              <FormDepoimento pacienteId={pacienteId} />
            ) : (
              <p style={{ color: "gray" }}>Faça login como paciente para enviar um depoimento.</p>
            )}
            <ListaDepoimentos />
          </section>
        </main>
      </div>
    </>
  );
}

export default Home;
