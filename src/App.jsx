import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Apoio from "./components/Apoio.jsx";
import Home from "./pages/Home";
import Header from "./components/header";
import Login from "./components/login";
import Cadastro, { handleOpenCadastro } from "./components/cadastro.jsx";
import Depoimento from "./components/depoimento";

import Footer from './components/footer.jsx'; 

function CadastroWrapper() {
  useEffect(() => {
    handleOpenCadastro();
  }, []);

  return <Cadastro />;
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Apoio" element={<Apoio />} />
        <Route path="/depoimento" element={<Depoimento />} />
        <Route path="/cadastro" element={<CadastroWrapper />} />
      </Routes>
      <Footer /> 
    </BrowserRouter>
  );
}

export default App;
