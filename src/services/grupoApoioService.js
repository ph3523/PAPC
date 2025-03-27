import axios from 'axios';

// Configuração base do Axios
const api = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json',
  }
});

/**
 * Busca todos os grupos de apoio
 */
export async function listarGruposApoio() {
  try {
    const response = await api.get('/grupos-apoio');
    return { ok: true, data: response.data };
  } catch (error) {
    console.error("Erro ao listar grupos de apoio:", error);
    const errorData = error.response?.data || { error: "Erro ao se comunicar com o servidor" };
    return { ok: false, data: errorData };
  }
}

/**
 * Busca um grupo de apoio pelo ID
 */
export async function buscarGrupoApoioPorId(id) {
  try {
    const response = await api.get(`/grupos-apoio/${id}`);
    return { ok: true, data: response.data };
  } catch (error) {
    console.error(`Erro ao buscar grupo de apoio ID ${id}:`, error);
    const errorData = error.response?.data || { error: "Erro ao se comunicar com o servidor" };
    return { ok: false, data: errorData };
  }
}

/**
 * Cria um novo grupo de apoio
 */
export async function criarGrupoApoio(grupoApoio) {
  try {
    const response = await api.post('/grupos-apoio', grupoApoio);
    return { ok: true, data: response.data };
  } catch (error) {
    console.error("Erro ao criar grupo de apoio:", error);
    const errorData = error.response?.data || { error: "Erro ao se comunicar com o servidor" };
    return { ok: false, data: errorData };
  }
}

/**
 * Atualiza um grupo de apoio existente
 */
export async function atualizarGrupoApoio(id, grupoApoio) {
  try {
    const response = await api.put(`/grupos-apoio/${id}`, grupoApoio);
    return { ok: true, data: response.data };
  } catch (error) {
    console.error(`Erro ao atualizar grupo de apoio ID ${id}:`, error);
    const errorData = error.response?.data || { error: "Erro ao se comunicar com o servidor" };
    return { ok: false, data: errorData };
  }
}

/**
 * Exclui um grupo de apoio
 */
export async function excluirGrupoApoio(id) {
  try {
    const response = await api.delete(`/grupos-apoio/${id}`);
    return { ok: true, data: response.data };
  } catch (error) {
    console.error(`Erro ao excluir grupo de apoio ID ${id}:`, error);
    const errorData = error.response?.data || { error: "Erro ao se comunicar com o servidor" };
    return { ok: false, data: errorData };
  }
}