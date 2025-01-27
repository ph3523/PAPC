import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Indicacao from './components/indicacao';
import Home from './pages/Home';
import Login from './components/login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/indicacao" element={<Indicacao />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;