import "./login.css";

function TelaDeLogin() {
  const realizarLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const senha = e.target.senha.value;
    alert(`Bem-vindo! Email: ${email}`);
  };

  return (
    <div className="container">
      <div className="content">
        <h1>Tela de Login</h1>
        <form id="formLogin" onSubmit={realizarLogin}>
          <input
            type="email"
            name="email"
            placeholder="Digite seu e-mail"
            required
          />
          <input
            type="password"
            name="senha"
            placeholder="Digite sua senha"
            required
          />
          <button type="submit">Entrar</button>
        </form>
        <div className="links">
          <a href="#">Esqueceu a senha?</a>
          <a href="#">Cadastre-se</a>
        </div>
      </div>
    </div>
  );
}

export default TelaDeLogin;
