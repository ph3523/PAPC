import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Indicacao from './components/indicacao';
import Home from './pages/Home';
import Header from './components/header';
import Login from './components/login';
import Cadastro from './components/cadastro.jsx'; // Importando o Cadastro

function App() {
  const [showCadastro, setShowCadastro] = useState(false); // modal principal de cadastro
  const [showPaciente, setShowPaciente] = useState(false); // Estado para o modal de cadastro de paciente
  const [showProfissional, setShowProfissional] = useState(false); // Estado para o modal de cadastro de profissional

  const handleOpenCadastro = () => setShowCadastro(true); // abrir o modal principal
  const handleCloseCadastro = () => setShowCadastro(false); // fechar o modal principal

  const handleOpenPaciente = () => {
    setShowPaciente(true);
    setShowCadastro(false); // fecha o modal principal ao abrir o de paciente
  };
  const handleClosePaciente = () => setShowPaciente(false); // fechar o modal de paciente

  const handleOpenProfissional = () => {
    setShowProfissional(true);
    setShowCadastro(false); // Fecha o modal principal ao abrir o de profissional
  };
  const handleCloseProfissional = () => setShowProfissional(false); // Função para fechar o modal de profissional

  return (
    <BrowserRouter>
      <Header onOpenCadastro={handleOpenCadastro} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/indicacao" element={<Indicacao />} />
      </Routes>

      {showCadastro && (
        <Cadastro
          onClose={handleCloseCadastro}
          onOpenPaciente={handleOpenPaciente}
          onOpenProfissional={handleOpenProfissional}
        />
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
    </BrowserRouter>
  );
}

export default App;
