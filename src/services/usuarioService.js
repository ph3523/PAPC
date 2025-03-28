import api from './api';

export async function cadastrarUsuario(usuario) {
  try {
    const response = await api.post('/usuarios', usuario);
    return { ok: true, data: response.data };
  } catch (error) {
    console.error("Erro ao cadastrar usuário:", error);
    
    // Obtém dados de erro da resposta, se existirem
    const errorData = error.response?.data || { error: "Erro ao se comunicar com o servidor" };
    return { ok: false, data: errorData };
  }
}

export async function loginUsuario(credenciais) {
  try {
    const response = await api.post('/auth/login', credenciais);

    if (response.data.token) {
      localStorage.setItem('token', response.data.token);

      if (response.data.usuario) {
        localStorage.setItem('usuario', JSON.stringify(response.data.usuario));
        localStorage.setItem('nome', response.data.usuario.nome_usuario || '');
        localStorage.setItem('usuarioId', response.data.usuario.id || '');
        localStorage.setItem('tipo', response.data.usuario.tipo || '');
      }
      window.dispatchEvent(new Event('loginStatusChanged'));
    }
    
    return { ok: true, data: response.data };

  }
  catch (error) {
    console.error("Erro ao fazer login:", error);

    const errorData = error.response?.data || { error: "Erro ao se comunicar com o servidor" };
    return { ok: false, data: errorData };
  }
}

export async function getUsuario(id){

  try{

    const token = localStorage.getItem('token');
  
    if (!token) {
      return { ok: false, data: { error: "Usuário não autenticado" } };
    }
  
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };
  
    const endpoint = id ? `/usuarios/${id}` : '/usuarios/me';
  
    const response = await api.get(endpoint, config);

    return { ok: true, data: response.data };
  }
  catch (error) {
    console.error("Erro ao obter usuário:", error);
  
    const errorData = error.response?.data || { error: "Erro ao se comunicar com o servidor" };
    return { ok: false, data: errorData };
  }
}

export function isLoggedIn() {
  return localStorage.getItem('token') !== null;
}

export function logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('usuario');
  localStorage.removeItem('nome');
  localStorage.removeItem('usuarioId');
  localStorage.removeItem('tipo');

  window.dispatchEvent(new Event('loginStatusChanged'));
}