import React from "react";
import "./cadastro.css";

const Cadastro = ({ onClose, onOpenPaciente, onOpenProfissional }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <header>
          <h2>Escolha o tipo de cadastro</h2>
        </header>
        <section className="modal-buttons">
          <button onClick={onOpenPaciente} aria-label="Cadastrar como Paciente">Paciente</button>
          <button onClick={onOpenProfissional} aria-label="Cadastrar como Profissional">Profissional</button>
        </section>
        <footer>
          <button className="close-button" onClick={onClose} aria-label="Fechar modal">
            Fechar
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Cadastro;
