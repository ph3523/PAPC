import { useEffect, useState } from "react";
import "./styles/Home.css";
import Apoio from "../components/Apoio";
import ListaDepoimentos from "../components/depoimento";
import Button from "@mui/material/Button";
import { TextField, Typography } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function Home() {
  const [nomeUsuario, setNomeUsuario] = useState("");
  const [pacienteId, setPacienteId] = useState(null);

  useEffect(() => {

    const updateUserData = () => {
      const nome = localStorage.getItem("nome");
      const id = localStorage.getItem("usuarioId");
      const tipo = localStorage.getItem("tipo");

      if (nome && tipo === "PACIENTE") {
        setNomeUsuario(nome);
        setPacienteId(parseInt(id));
      } 
      else {
        setNomeUsuario("");
        setPacienteId(null);
      }
    };

    updateUserData();
    window.addEventListener("loginStatusChanged", updateUserData);

    return () => {
      window.removeEventListener("loginStatusChanged", updateUserData);
    };

  }, []);

  return (
    <>
      <div className="home">
        <main>
          <section id="banner">
            <h1>Bem-vindo ao PAPC</h1>
            {nomeUsuario && (
              <p style={{ fontSize: "1.2rem" }}>Olá, {nomeUsuario}! </p>
            )}
          </section>

          <section id="actions">
            <div className="action-item">
              <Typography variant="h5">
                Reserve consultas online com médicos e dentistas
              </Typography>
              <Button variant="contained" className="button">
                Agende sua consulta
              </Button>
            </div>
            <div className="action-item">
              <Typography variant="h5">Encontre um médico</Typography>
              <TextField
                variant="filled"
                label="Buscar médico ou clínica"
                size="small"
                color="success"
              />
              <Button variant="contained" className="button-search">
                Buscar
              </Button>
            </div>
          </section>

          <section id="services">
            <Typography variant="h4" align="center">
              Nossos serviços
            </Typography>
            <Typography variant="body1" align="center">
              Consultar online, prescrições digitais, e muito mais.
            </Typography>
          </section>

          <section id="reviews">
            <Apoio />
          </section>

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
