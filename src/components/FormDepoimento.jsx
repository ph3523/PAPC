import { useState } from "react";

function FormDepoimento({ pacienteId }) {
  const [texto, setTexto] = useState("");

  const enviarDepoimento = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:3001/depoimentos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pacienteId, texto }),
    });

    const data = await response.json();

    if (response.ok) {
      alert("Depoimento enviado com sucesso!");
      setTexto("");
    } else {
      alert("Erro ao enviar depoimento: " + data.error);
    }
  };

  return (
    <form onSubmit={enviarDepoimento} style={{ margin: "2rem 0" }}>
      <textarea
        placeholder="Digite seu depoimento aqui..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        rows={4}
        style={{ width: "100%", padding: "1rem" }}
      />
      <button type="submit">Enviar depoimento anônimo</button>
    </form>
  );
}

export default FormDepoimento;