import React, { useState } from "react";
import "./Cadastro.css";
import { cadastrarUsuario } from "../services/usuarioService";
function Cadastro() {
const [showCadastro, setShowCadastro] = useState(false);
const [showPaciente, setShowPaciente] = useState(false);
const [showProfissional, setShowProfissional] = useState(false);
const [pacienteNome, setPacienteNome] = useState("");
const [pacienteEmail, setPacienteEmail] = useState("");
const [pacienteSenha, setPacienteSenha] = useState("");
const [dataNascimento, setDataNascimento] = useState("");
const [genero, setGenero] = useState("");
const [endereco, setEndereco] = useState("");
const [telefone, setTelefone] = useState("");
const [queixas, setQueixas] = useState("");
const [historicoFamiliar, setHistoricoFamiliar] = useState("");
const [usoMedicamentos, setUsoMedicamentos] = useState("");
const [objetivoTerapia, setObjetivoTerapia] = useState("");

//O cara é profissional
  const [profNome, setProfNome] = useState("");
  const [profEmail, setProfEmail] = useState("");
  const [profSenha, setProfSenha] = useState("");
  const [crm, setCrm] = useState("");
  const [especialidade, setEspecialidade] = useState("");
  const [localizacao, setLocalizacao] = useState("");
  const [faixaEtaria, setFaixaEtaria] = useState("");
  const [gratuito, setGratuito] = useState(false);
  const [fotoPerfil, setFotoPerfil] = useState("");
  const [etapaProf, setEtapaProf] = useState(1);

  Cadastro.handleOpenCadastro = () => setShowCadastro(true);
  const handleCloseCadastro = () => setShowCadastro(false);

  const handleOpenPaciente = () => {
    setShowPaciente(true);
    setShowCadastro(false);
  };
  const handleClosePaciente = () => setShowPaciente(false);

  const handleOpenProfissional = () => {
    setShowProfissional(true);
    setShowCadastro(false);
  };
  const handleCloseProfissional = () => setShowProfissional(false);

  if (!showCadastro && !showPaciente && !showProfissional) return null;

  return (
    <>
      {showCadastro && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="container2">
              <div className="content2">
                <header>
                  <h2>Escolha o tipo de cadastro</h2>
                </header>
                <section className="modal-buttons">
                  <button onClick={handleOpenPaciente}>Paciente</button>
                  <button onClick={handleOpenProfissional}>Profissional</button>
                </section>
                <footer>
                  <button
                    className="close-button"
                    onClick={handleCloseCadastro}
                  >
                    Fechar
                  </button>
                </footer>
              </div>
            </div>
          </div>
        </div>
      )}

<<<<<<< HEAD
      {showPaciente && (
        <div className="modal-overlay">
          <div className="container">
            <div className="content">
              <section className="modal-content">
                <header>
                  <h2>Cadastro de Paciente</h2>
                </header>
                <form onSubmit={async (e) => {
                 e.preventDefault();
=======
{showPaciente && (
  <div className="modal-overlay">
    <section className="modal-content">
      <header>
        <h2>Cadastro de Paciente</h2>
      </header>
      <form onSubmit={async (e) => {
        e.preventDefault();
>>>>>>> moda-cadastro

        const { ok, data } = await cadastrarUsuario({
          nome_usuario: pacienteNome,
          email: pacienteEmail,
          senha: pacienteSenha,
          tipo: "PACIENTE",
          paciente: {
          nome_paciente: pacienteNome,
          data_nascimento: dataNascimento,
          genero,
          endereco,
          telefone,
          queixas,
          historico_familiar: historicoFamiliar,
          uso_medicamentos: usoMedicamentos,
          objetivo_terapia: objetivoTerapia
          }
        });

        if (ok) {
          alert("Paciente cadastrado com sucesso!");
          setShowPaciente(false);
        } else {
          alert(`Erro ao cadastrar: ${data.error || "Erro desconhecido"}`);
        }
      }}>
        <input type="text" placeholder="Nome" value={pacienteNome} onChange={(e) => setPacienteNome(e.target.value)} />
        <input type="email" placeholder="E-mail" value={pacienteEmail} onChange={(e) => setPacienteEmail(e.target.value)} />
        <input type="password" placeholder="Senha" value={pacienteSenha} onChange={(e) => setPacienteSenha(e.target.value)} />
        <input type="date" placeholder="Data de nascimento" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} />
        <input type="text" placeholder="Gênero" value={genero} onChange={(e) => setGenero(e.target.value)} />
        <input type="text" placeholder="Endereço" value={endereco} onChange={(e) => setEndereco(e.target.value)} />
        <input type="text" placeholder="Telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
        <input type="text" placeholder="Queixas" value={queixas} onChange={(e) => setQueixas(e.target.value)} />
        <input type="text" placeholder="Histórico Familiar" value={historicoFamiliar} onChange={(e) => setHistoricoFamiliar(e.target.value)} />
        <input type="text" placeholder="Uso de Medicamentos" value={usoMedicamentos} onChange={(e) => setUsoMedicamentos(e.target.value)} />
        <input type="text" placeholder="Objetivo da Terapia" value={objetivoTerapia} onChange={(e) => setObjetivoTerapia(e.target.value)} />
        <button type="submit">Cadastrar</button>
      </form>
      <footer>
        <button className="close-button" onClick={handleClosePaciente}>Fechar</button>
      </footer>
    </section>
  </div>
)}

<<<<<<< HEAD
  if (response.ok) {
    alert("Cadastro realizado com sucesso!");
    setPacienteNome("");
    setPacienteEmail("");
    setPacienteSenha("");
    setShowPaciente(false);
  } else {
    alert(`Erro ao cadastrar: ${data.error || "erro desconhecido"}`);
  }
}}>
  <input
    type="text"
    placeholder="Nome"
        value={pacienteNome}
    onChange={(e) => setPacienteNome(e.target.value)}
  />
  <input
    type="email"
    placeholder="E-mail"
        value={pacienteEmail}
    onChange={(e) => setPacienteEmail(e.target.value)}
  />
  <input
    type="password"
    placeholder="Senha"
    value={pacienteSenha}
    onChange={(e) => setPacienteSenha(e.target.value)}
  />
      <button type="submit">Cadastrar</button>
    </form>
                <footer>
                  <button
                    className="close-button"
                    onClick={handleClosePaciente}
                  >
                    Fechar
                  </button>
                </footer>
              </section>
            </div>
          </div>
        </div>
      )}

      {showProfissional && (
        <div className="modal-overlay">
          <div className="container">
            <div className="content">
              <section className="modal-content">
                <header>
                  <h2>Cadastro de Profissional</h2>
                </header>
                <form>
                  <input type="text" placeholder="Nome" />
                  <input type="email" placeholder="E-mail" />
                  <input type="password" placeholder="Senha" />
                  <input type="text" placeholder="Especialidade" />
                  <input type="text" placeholder="Localização" />
                  <input
                    type="text"
                    placeholder="Faixa Etária de Atendimento"
                  />
                  <input
                    type="number"
                    placeholder="Quantidade de Atendimentos Gratuitos"
                  />
                  <input type="file" />
                  <button type="submit">Cadastrar</button>
                </form>
                <footer>
                  <button
                    className="close-button"
                    onClick={handleCloseProfissional}
                  >
                    Fechar
                  </button>
                </footer>
              </section>
            </div>
          </div>
        </div>
      )}
=======
{showProfissional && (
  <div className="modal-overlay">
    <section className="modal-content">
      <header>
        <h2>Cadastro de Profissional</h2>
      </header>

      <form onSubmit={async (e) => {
        e.preventDefault();
        const { ok, data } = await cadastrarUsuario({
          nome_usuario: profNome,
          email: profEmail,
          senha: profSenha,
          tipo: "PROFISSIONAL",
          profissional: {
            nome_profissional: profNome,
            crm,
            especialidade,
            localizacao,
            faixa_etaria: faixaEtaria,
            atendimentos_gratuitos: gratuito,
            foto_perfil: fotoPerfil || "sem-foto.jpg"
          }
        });

        if (ok) {
          alert("Profissional cadastrado com sucesso!");
          setShowProfissional(false);
        } else {
          alert(`Erro ao cadastrar: ${data.error || "Erro desconhecido"}`);
        }
      }}>
        {etapaProf === 1 && (
          <>
            <input type="text" placeholder="Nome" value={profNome} onChange={(e) => setProfNome(e.target.value)} />
            <input type="email" placeholder="E-mail" value={profEmail} onChange={(e) => setProfEmail(e.target.value)} />
            <input type="password" placeholder="Senha" value={profSenha} onChange={(e) => setProfSenha(e.target.value)} />
            <button type="button" onClick={() => setEtapaProf(2)}>Próximo</button>
          </>
        )}

        {etapaProf === 2 && (
          <>
            <input type="text" placeholder="CRM" value={crm} onChange={(e) => setCrm(e.target.value)} />
            <input type="text" placeholder="Especialidade" value={especialidade} onChange={(e) => setEspecialidade(e.target.value)} />
            <input type="text" placeholder="Localização" value={localizacao} onChange={(e) => setLocalizacao(e.target.value)} />
            <button type="button" onClick={() => setEtapaProf(1)}>Voltar</button>
            <button type="button" onClick={() => setEtapaProf(3)}>Próximo</button>
          </>
        )}

        {etapaProf === 3 && (
          <>
            <input type="text" placeholder="Faixa Etária de Atendimento" value={faixaEtaria} onChange={(e) => setFaixaEtaria(e.target.value)} />
            <label>
              Atendimento Gratuito:
              <input type="checkbox" checked={gratuito} onChange={(e) => setGratuito(e.target.checked)} />
            </label>
            <input type="text" placeholder="Link da Foto de Perfil" value={fotoPerfil} onChange={(e) => setFotoPerfil(e.target.value)} />
            <button type="button" onClick={() => setEtapaProf(2)}>Voltar</button>
            <button type="submit">Cadastrar</button>
          </>
        )}
      </form>

      <footer>
        <button className="close-button" onClick={handleCloseProfissional}>Fechar</button>
      </footer>
    </section>
  </div>
)}
>>>>>>> moda-cadastro
    </>
  );
};

export default Cadastro;
export const handleOpenCadastro = () => Cadastro.handleOpenCadastro();