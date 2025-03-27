import React, { useEffect, useState } from "react";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import "./Depoimento.css";

function Depoimento({ user, date, testimony }) {
  return (
    <Card className="card_dep" sx={{ maxWidth: 345, bgcolor: "#ffffffea" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "#205469" }} aria-label="recipe">
            {user.charAt(0)}
          </Avatar>
        }
        title={user}
        subheader={new Date(date).toLocaleDateString()}
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {testimony}
        </Typography>
      </CardContent>
    </Card>
  );
}

function ListaDepoimentos() {
  const [depoimentos, setDepoimentos] = useState([]);

  useEffect(() => {
    async function fetchDepoimentos() {
      try {
        const res = await fetch("http://localhost:3001/depoimentos");
        const data = await res.json();
        setDepoimentos(data);
      } catch (error) {
        console.error("Erro ao buscar depoimentos:", error);
      }
    }

    fetchDepoimentos();
  }, []);

  return (
    <div className="lista-depoimentos">
      {depoimentos.map((dep, index) => (
        <Depoimento
          key={index}
          user={`Paciente ${dep.pacienteId}`}
          date={dep.data_postagem}
          testimony={dep.texto}
        />
      ))}
    </div>
  );
}

export default ListaDepoimentos;


