import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Indicacao from './components/indicacao';
import Home from './pages/Home';
import Header from './components/header';
import Cadastro from './components/cadastro'; // Importando o Cadastro

function App() {
  const [showCadastro, setShowCadastro] = useState(false); // Estado para controlar a visibilidade do modal

  const handleOpenCadastro = () => setShowCadastro(true); // Função para abrir o modal
  const handleCloseCadastro = () => setShowCadastro(false); // Função para fechar o modal

  return (
    <BrowserRouter>
      <Header onOpenCadastro={handleOpenCadastro} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/indicacao" element={<Indicacao />} />
      </Routes>
      
      {/* Exibindo o modal Condicionalmente */}
      {showCadastro && <Cadastro onClose={handleCloseCadastro} />}
    </BrowserRouter>
  );
}

export default App;
