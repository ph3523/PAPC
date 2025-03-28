import React, { useState } from "react";
import "./Cadastro.css";

function Cadastro() {
  const [showCadastro, setShowCadastro] = useState(false);
  const [step, setStep] = useState(1);
  const [paciente, setPaciente] = useState({
    nome: "",
    email: "",
    senha: "",
    dataNascimento: "",
    genero: "",
    endereco: "",
    telefone: "",
  });
  const [profissional, setProfissional] = useState({
    nome: "",
    email: "",
    senha: "",
    crm: "",
    especialidade: "",
    localizacao: "",
  });

  const handleNextStep = () => setStep(step + 1);
  const handlePrevStep = () => setStep(step - 1);

  const handleChange = (e, setState) => {
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <button onClick={() => setShowCadastro(true)}>Cadastrar</button>
      {showCadastro && (
        <div className="modal-overlay">
          <div className="modal-content">
            {step === 1 && (
              <>
                <h2>Escolha o tipo de cadastro</h2>
                <button onClick={() => setStep(2)}>Paciente</button>
                <button onClick={() => setStep(5)}>Profissional</button>
              </>
            )}

            {step === 2 && (
              <>
                <h2>Cadastro de Paciente</h2>
                <input
                  type="text"
                  name="nome"
                  placeholder="Nome"
                  value={paciente.nome}
                  onChange={(e) => handleChange(e, setPaciente)}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  value={paciente.email}
                  onChange={(e) => handleChange(e, setPaciente)}
                />
                <input
                  type="password"
                  name="senha"
                  placeholder="Senha"
                  value={paciente.senha}
                  onChange={(e) => handleChange(e, setPaciente)}
                />
                <button onClick={handleNextStep}>Próximo</button>
              </>
            )}

            {step === 3 && (
              <>
                <h2>Mais Informações</h2>
                <input
                  type="date"
                  name="dataNascimento"
                  value={paciente.dataNascimento}
                  onChange={(e) => handleChange(e, setPaciente)}
                />
                <input
                  type="text"
                  name="genero"
                  placeholder="Gênero"
                  value={paciente.genero}
                  onChange={(e) => handleChange(e, setPaciente)}
                />
                <button onClick={handlePrevStep}>Voltar</button>
                <button onClick={handleNextStep}>Próximo</button>
              </>
            )}

            {step === 4 && (
              <>
                <h2>Contato</h2>
                <input
                  type="text"
                  name="endereco"
                  placeholder="Endereço"
                  value={paciente.endereco}
                  onChange={(e) => handleChange(e, setPaciente)}
                />
                <input
                  type="text"
                  name="telefone"
                  placeholder="Telefone"
                  value={paciente.telefone}
                  onChange={(e) => handleChange(e, setPaciente)}
                />
                <button onClick={handlePrevStep}>Voltar</button>
                <button onClick={() => alert("Cadastro realizado!")}>
                  Cadastrar
                </button>
              </>
            )}

            {step === 5 && (
              <>
                <h2>Cadastro de Profissional</h2>
                <input
                  type="text"
                  name="nome"
                  placeholder="Nome"
                  value={profissional.nome}
                  onChange={(e) => handleChange(e, setProfissional)}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  value={profissional.email}
                  onChange={(e) => handleChange(e, setProfissional)}
                />
                <input
                  type="password"
                  name="senha"
                  placeholder="Senha"
                  value={profissional.senha}
                  onChange={(e) => handleChange(e, setProfissional)}
                />
                <button onClick={handleNextStep}>Próximo</button>
              </>
            )}

            {step === 6 && (
              <>
                <h2>Informações Profissionais</h2>
                <input
                  type="text"
                  name="crm"
                  placeholder="CRM"
                  value={profissional.crm}
                  onChange={(e) => handleChange(e, setProfissional)}
                />
                <input
                  type="text"
                  name="especialidade"
                  placeholder="Especialidade"
                  value={profissional.especialidade}
                  onChange={(e) => handleChange(e, setProfissional)}
                />
                <button onClick={handlePrevStep}>Voltar</button>
                <button onClick={handleNextStep}>Próximo</button>
              </>
            )}

            {step === 7 && (
              <>
                <h2>Localização</h2>
                <input
                  type="text"
                  name="localizacao"
                  placeholder="Localização"
                  value={profissional.localizacao}
                  onChange={(e) => handleChange(e, setProfissional)}
                />
                <button onClick={handlePrevStep}>Voltar</button>
                <button onClick={() => alert("Cadastro realizado!")}>
                  Cadastrar
                </button>
              </>
            )}

            <button
              className="close-button"
              onClick={() => setShowCadastro(false)}
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Cadastro;
export const handleOpenCadastro = () => Cadastro.handleOpenCadastro();