import "./Login.css";
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { loginUsuario } from "../services/usuarioService";

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const realizarLogin = async (e) => {
    e.preventDefault();
    setError('');

    const { ok, data } = await loginUsuario({ email, senha });
    console.log(data);
    if (ok) {
      alert(`Bem-vindo, ${data.nome_usuario}!`);
      navigate('/');
    } else {
      setError(data.error || "Credenciais inválidas");
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
        <div className="links">
          <a href="#">Esqueceu a senha?</a>
          <Link to="/cadastro">Cadastre-se</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
