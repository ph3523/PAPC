import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Indicacao from "./components/indicacao";
import Home from "./pages/Home";
import Header from "./components/header";
import Login from "./components/login";
import Cadastro from "./components/cadastro";
import Depoimento from "./components/depoimento";

import Footer from './components/footer.jsx'; 

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/indicacao" element={<Indicacao />} />
        <Route path="/depoimento" element={<Depoimento />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
      
      <Footer /> 
      <Cadastro />
    </BrowserRouter>
  );
}

export default App;
