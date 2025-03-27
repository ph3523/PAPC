

export async function cadastrarUsuario(usuario) {
    try {
      const response = await fetch("http://localhost:3001/usuarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(usuario),
      });
  
      const data = await response.json();
      return { ok: response.ok, data };
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
      return { ok: false, data: { error: "Erro ao se comunicar com o servidor" } };
    }
  }