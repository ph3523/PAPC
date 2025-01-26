import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <img
        alt="Logotipo PAPC"
        height="40"
        src="https://storage.googleapis.com/a1aa/image/x7yvLnGPQp5YHRlpGIZ833fW2eVh9lUBsfiKSzWNcJZyeRkQB.jpg"
        width="100"
      />
      <p>Copyright © 2025 PAPC, todos os direitos reservados.</p>
      <div className="columns">
        <div className="column">
          <h3>Nossa empresa</h3>
          <ul>
            <li><a href="#">Sobre nós</a></li>
            <li><a href="#">Consulta de vídeo - Teleconsulta</a></li>
            <li><a href="#">Carreiras</a></li>
            <li><a href="#">Imprensa</a></li>
            <li><a href="#">Precisa de ajuda?</a></li>
            <li><a href="#">Notificações fraudulentas (tentativas de phishing)</a></li>
            <li><a href="#">PAPC Deutschland</a></li>
            <li><a href="#">PAPC Italia</a></li>
            <li><a href="#">Saúde</a></li>
          </ul>
          <h3>Para os profissionais de saúde</h3>
          <ul>
            <li><a href="#">Software de gestão PAPC Pro</a></li>
            <li><a href="#">Comunidade PAPC</a></li>
          </ul>
        </div>
        <div className="column">
          <h3>Encontre seu especialista</h3>
          <ul>
            <li><a href="#">Ginecologista</a></li>
            <li><a href="#">Cirurgião-dentista</a></li>
            <li><a href="#">Enfermeiro</a></li>
            <li><a href="#">Enfermeiro domiciliar</a></li>
            <li><a href="#">Médico generalista</a></li>
            <li><a href="#">Pediatra</a></li>
            <li><a href="#">Oftalmologista</a></li>
            <li><a href="#">Dermatologista e venereologista</a></li>
            <li><a href="#">Osteopata</a></li>
            <li><a href="#">Fisioterapeuta</a></li>
            <li><a href="#">Óptico-lunetista</a></li>
            <li><a href="#">Podólogo</a></li>
            <li><a href="#">Parteira</a></li>
            <li><a href="#">Otorrinolaringologista</a></li>
            <li><a href="#">Alergologista</a></li>
            <li><a href="#">Cirurgião urologista</a></li>
            <li><a href="#">Reumatologista</a></li>
            <li><a href="#">Estomatologista</a></li>
            <li><a href="#">Endocrinologista</a></li>
            <li><a href="#">Cirurgião ortopedista e traumatologista</a></li>
          </ul>
          <h3>Todas as especialidades</h3>
          <ul>
            <li><a href="#">Todas as especialidades</a></li>
          </ul>
        </div>
        <div className="column">
          <h3>Pesquisas frequentes</h3>
          <ul>
            <li><a href="#">Cirurgião-dentista São Paulo</a></li>
            <li><a href="#">Enfermeiro São Paulo</a></li>
            <li><a href="#">Médico generalista São Paulo</a></li>
            <li><a href="#">Pediatra São Paulo</a></li>
            <li><a href="#">Oftalmologista São Paulo</a></li>
            <li><a href="#">Dermatologista e venereologista São Paulo</a></li>
            <li><a href="#">Osteopata São Paulo</a></li>
            <li><a href="#">Fisioterapeuta São Paulo</a></li>
            <li><a href="#">Óptico-lunetista São Paulo</a></li>
            <li><a href="#">Podólogo São Paulo</a></li>
          </ul>
        </div>
      </div>
      <div className="app-links">
        <img
          alt="Baixar na App Store"
          height="40"
          src="https://storage.googleapis.com/a1aa/image/rJ6W2Tkf8ehyGU3wqNrkqcO3by2YhXQrfl79jR9x04bxeRkQB.jpg"
          width="150"
        />
        <img
          alt="Disponível no Google Play"
          height="40"
          src="https://storage.googleapis.com/a1aa/image/aVuhxQv0XfTUQ6eQSSp0MyxM6uIUmLtNuOeYp5TteN4e6jIhC.jpg"
          width="150"
        />
      </div>
      <div className="bottom-bar">
        <div className="dropdowns">
          <label htmlFor="country">País:</label>
          <select id="country">
            <option value="br">Brasil</option>
          </select>
          <label htmlFor="language">Idioma:</label>
          <select id="language">
            <option value="pt">Português</option>
          </select>
        </div>
        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-medium-m"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
