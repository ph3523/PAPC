import React from "react";
import "./cadastro.css";

const Cadastro = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Escolha o tipo de cadastro</h2>
        <div className="modal-buttons">
          <button onClick={() => console.log("Cadastro de Paciente")}>
            Paciente
          </button>
          <button onClick={() => console.log("Cadastro de Profissional")}>
            Profissional
          </button>
        </div>
        <button className="close-button" onClick={onClose}>
          Fechar
        </button>
      </div>
    </div>
  );
};

export default Cadastro;
