import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import "./Depoimento.css";
import depoimentos from "../data/depoimentos.json";

function Depoimento({ user, date, testimony }) {
  return (
    <>
      <Card className="card_dep" sx={{ maxWidth: 345, bgcolor: "#ffffffea" }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "#205469" }} aria-label="recipe">
              {user.charAt(0)}
            </Avatar>
          }
          title={user}
          subheader={date}
        />
        <CardContent>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {testimony}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

function ListaDepoimentos() {
  return (
    <div className="lista-depoimentos">
      {depoimentos.map((dep, index) => (
        <Depoimento
          key={index}
          user={dep.user}
          date={dep.date}
          testimony={dep.testimony}
        />
      ))}
    </div>
  );
}

export default ListaDepoimentos;
