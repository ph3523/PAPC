import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Indicacao from './components/indicacao';
import Home from './pages/Home';
import Header from './components/header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/indicacao" element={<Indicacao />} />
        <Route path="/cadastro" element={<cadastro />} /> {/* Adicione a rota para Cadastro */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;