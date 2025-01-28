import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer-column">
        <h2>Populares no PAPC</h2>
        <nav>
          <ul>
            <li><a href="#">Sobre nós</a></li>
            <li><a href="#">Consulta de vídeo - Teleconsulta</a></li>
            <li><a href="#">Carreiras</a></li>
            <li><a href="#">Imprensa</a></li>
            <li><a href="#">PAPC Japão</a></li>
            <li><a href="#">PAPC Itália</a></li>
            <li><a href="#">Saúde</a></li>
            <li><a href="#">Para os profissionais de saúde</a></li>
            <li><a href="#">Comunidade PAPC</a></li>
          </ul>
        </nav>
      </section>
      <section className="footer-column">
        <h2>Encontre seu especialista</h2>
        <nav>
          <ul>
            <li><a href="#">Psicólogo</a></li>
            <li><a href="#">Psiquiatra</a></li>
            <li><a href="#">Terapeuta Ocupacional</a></li>
            <li><a href="#">Enfermeiro de Saúde Mental</a></li>
            <li><a href="#">Assistente Social</a></li>
            <li><a href="#">Conselheiro</a></li>
            <li><a href="#">Psicoterapeuta</a></li>
            <li><a href="#">Neuropsicólogo</a></li>
            <li><a href="#">Psicanalista</a></li>
          </ul>
        </nav>
      </section>
      <section className="footer-column">
        <h2>Pesquisas frequentes</h2>
        <nav>
          <ul>
            <li><a href="#">Psicólogo São Paulo</a></li>
            <li><a href="#">Psiquiatra São Paulo</a></li>
            <li><a href="#">Terapeuta Ocupacional São Paulo</a></li>
            <li><a href="#">Enfermeiro de Saúde Mental São Paulo</a></li>
            <li><a href="#">Assistente Social São Paulo</a></li>
            <li><a href="#">Conselheiro São Paulo</a></li>
            <li><a href="#">Psicoterapeuta São Paulo</a></li>
            <li><a href="#">Neuropsicólogo São Paulo</a></li>
            <li><a href="#">Psicanalista São Paulo</a></li>
          </ul>
        </nav>
      </section>
      <div className="footer-bottom">
      <div className="footer-logo">
          <img src="../assets/logo.svg" alt="Logo PAPC" />
          <p>Copyright © 2025 PAPC, todos os direitos reservados.</p>
        </div>
       
      </div>
    </footer>
  );
};

export default Footer;
