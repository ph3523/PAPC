import React, { useState } from "react";
import "./Cadastro.css";

function Cadastro() {
  const [showCadastro, setShowCadastro] = useState(false);
  const [showPaciente, setShowPaciente] = useState(false);
  const [showProfissional, setShowProfissional] = useState(false);

  Cadastro.handleOpenCadastro = () => setShowCadastro(true);
  const handleCloseCadastro = () => setShowCadastro(false);

  const handleOpenPaciente = () => {
    setShowPaciente(true);
    setShowCadastro(false);
  };
  const handleClosePaciente = () => setShowPaciente(false);

  const handleOpenProfissional = () => {
    setShowProfissional(true);
    setShowCadastro(false);
  };
  const handleCloseProfissional = () => setShowProfissional(false);

  if (!showCadastro && !showPaciente && !showProfissional) return null;

  return (
    <>
      {showCadastro && (
        <div className="modal-overlay">
          <div className="modal-content">
            <header>
              <h2>Escolha o tipo de cadastro</h2>
            </header>
            <section className="modal-buttons">
              <button onClick={handleOpenPaciente}>Paciente</button>
              <button onClick={handleOpenProfissional}>Profissional</button>
            </section>
            <footer>
              <button className="close-button" onClick={handleCloseCadastro}>
                Fechar
              </button>
            </footer>
          </div>
        </div>
      )}

      {showPaciente && (
        <div className="modal-overlay">
          <section className="modal-content">
            <header>
              <h2>Cadastro de Paciente</h2>
            </header>
            <form>
              <input type="text" placeholder="Nome" />
              <input type="email" placeholder="E-mail" />
              <input type="password" placeholder="Senha" />
              <button type="submit">Cadastrar</button>
            </form>
            <footer>
              <button className="close-button" onClick={handleClosePaciente}>Fechar</button>
            </footer>
          </section>
        </div>
      )}

      {showProfissional && (
        <div className="modal-overlay">
          <section className="modal-content">
            <header>
              <h2>Cadastro de Profissional</h2>
            </header>
            <form>
              <input type="text" placeholder="Nome" />
              <input type="email" placeholder="E-mail" />
              <input type="password" placeholder="Senha" />
              <input type="text" placeholder="Especialidade" />
              <input type="text" placeholder="Localização" />
              <input type="text" placeholder="Faixa Etária de Atendimento" />
              <input type="number" placeholder="Quantidade de Atendimentos Gratuitos" />
              <input type="file" />
              <button type="submit">Cadastrar</button>
            </form>
            <footer>
              <button className="close-button" onClick={handleCloseProfissional}>Fechar</button>
            </footer>
          </section>
        </div>
      )}
    </>
  );
};

export default Cadastro;
export const handleOpenCadastro = () => Cadastro.handleOpenCadastro();