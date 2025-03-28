import "./login.css";
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { getUsuario, loginUsuario } from "../services/usuarioService";

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const realizarLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const { ok, data } = await loginUsuario({ email, senha });
  
      if (ok) {
        // Se não temos o nome do usuário salvo ainda
        if (!localStorage.getItem('nome') && data.usuario?.id) {
          // Buscar informações adicionais do usuário
          const userInfo = await getUsuario(data.usuario.id);
          
          if (userInfo.ok) {
            localStorage.setItem('nome', userInfo.data.nome_usuario || '');
            localStorage.setItem('tipo', userInfo.data.tipo || '');
            localStorage.setItem('usuarioId', userInfo.data.id || '');
            
            // Dispara o evento para notificar outras partes da aplicação
            window.dispatchEvent(new Event('loginStatusChanged'));
          }
        }
        
        // Mostra uma mensagem de boas-vindas
        alert(`Bem-vindo, ${localStorage.getItem('nome') || 'usuário'}!`);
        
        // Navega para a página inicial
        navigate('/');
      } else {
        setError(data.error || "Credenciais inválidas");
      }
    }
    catch (error) {
      console.error("Erro no login:", error);
      setError("Ocorreu um erro. Tente novamente.");
    }
  };

  return (
    <div className="container">
      <div className="content">
        <img src="../assets/logo.svg" className="align-top" alt="Logo" />
        <h1>Tela de Login</h1>

        {error && <div className="error-message">{error}</div>}

        <form id="formLogin" onSubmit={realizarLogin}>
          <input
            type="email"
            name="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            name="senha"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
          <button type="submit">Entrar</button>
        </form>
        
        <div className="links">
          <a href="#">Esqueceu a senha?</a>
          <Link to="/cadastro">Cadastre-se</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
