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
  return (
    <>
      <div className="home">
        <main>
          <section id="banner">
            <Typography variant="h2">Bem-vindo ao PAPC</Typography>
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
