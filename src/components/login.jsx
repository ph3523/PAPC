<<<<<<< HEAD
import "./login.css";
=======
import "./Login.css";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
>>>>>>> moda-cadastro

function TelaDeLogin() {
  const navigate = useNavigate();
  const [erro, setErro] = useState("");

  const realizarLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const senha = e.target.senha.value;

    try {
      const response = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("tipo", data.tipo);
        localStorage.setItem("usuarioId", data.id);
        localStorage.setItem("nome", data.nome_usuario)
        localStorage.setItem("token", data.token);
        localStorage.setItem("tipo", data.tipo);
        localStorage.setItem("usuarioId", data.id);
        alert("Login realizado com sucesso!");
        navigate("/");
      } else {
        setErro(data.error || "Erro ao fazer login");
      }
    } catch (err) {
      console.error("Erro ao logar:", err);
      setErro("Erro inesperado ao tentar logar.");
    }
  };

  return (
    <div className="container">
      <div className="content">
        <img src="../assets/logo.svg" className="align-top" alt="Logo" />
        <h1>Tela de Login</h1>
        <form id="formLogin" onSubmit={realizarLogin}>
          <input type="email" name="email" placeholder="Digite seu e-mail" required />
          <input type="password" name="senha" placeholder="Digite sua senha" required />
          <button type="submit">Entrar</button>
        </form>
        {erro && <p style={{ color: "red" }}>{erro}</p>}
        <div className="links">
          <a href="#">Esqueceu a senha?</a>
          <a href="cadastro">Cadastre-se</a>
        </div>
      </div>
    </div>
  );
}

export default TelaDeLogin;
