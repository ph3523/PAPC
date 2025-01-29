import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Indicacao from './components/indicacao';
import Home from './pages/Home';
import Header from './components/header';
import Login from './components/login';
import Cadastro from './components/cadastro';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/indicacao" element={<Indicacao />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
      <Cadastro />
    </BrowserRouter>
  );
}

export default App;