import "./Login.css";
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
      console.log("Tentando login com:", { email, senha });
      const { ok, data } = await loginUsuario({ email, senha });
  
      if (ok) {
        console.log("Dados retornados do login:", data);
        
        if (data.usuario && data.usuario.nome_usuario) {
          alert(`Bem-vindo, ${data.usuario.nome_usuario}!`);
        } else {
          // Tentar buscar dados adicionais
          const userInfo = await getUsuario();
          console.log("Dados de userInfo:", userInfo);
          
          if (userInfo.ok) {
            alert(`Bem-vindo, ${userInfo.data.nome_usuario || 'usuário'}!`);
          } else {
            alert(`Bem-vindo ao sistema!`);
          }
        }
  
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

        {error && <div className="error">{error}</div>}

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
        {erro && <p style={{ color: "red" }}>{erro}</p>}
        <div className="links">
          <a href="#">Esqueceu a senha?</a>
          <Link to="/cadastro">Cadastre-se</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
