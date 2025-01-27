import React, { useState } from "react";
import "./Modal.css";

const Modal = () => {
  const [showChoiceModal, setShowChoiceModal] = useState(true);
  const [showPatientModal, setShowPatientModal] = useState(false);
  const [showProfessionalModal, setShowProfessionalModal] = useState(false);

  const handleOpenPatientModal = () => {
    setShowChoiceModal(false);
    setShowPatientModal(true);
  };

  const handleOpenProfessionalModal = () => {
    setShowChoiceModal(false);
    setShowProfessionalModal(true);
  };

  const handleCloseModals = () => {
    setShowChoiceModal(false);
    setShowPatientModal(false);
    setShowProfessionalModal(false);
  };

  return (
    <>
      {showChoiceModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Escolha o tipo de cadastro</h2>
            <div className="modal-buttons">
              <button onClick={handleOpenPatientModal}>Paciente</button>
              <button onClick={handleOpenProfessionalModal}>Profissional</button>
            </div>
            <button className="close-button" onClick={handleCloseModals}>
              Fechar
            </button>
          </div>
        </div>
      )}

      {showPatientModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Cadastro de Paciente</h2>
            <form>
              <label>
                Nome:
                <input type="text" placeholder="Seu nome" />
              </label>
              <label>
                Email:
                <input type="email" placeholder="Seu email" />
              </label>
              <label>
                Senha:
                <input type="password" placeholder="Sua senha" />
              </label>
              <button type="submit">Cadastrar</button>
            </form>
            <button className="close-button" onClick={handleCloseModals}>
              Fechar
            </button>
          </div>
        </div>
      )}

      {showProfessionalModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Cadastro de Profissional</h2>
            <form>
              <label>
                Nome:
                <input type="text" placeholder="Seu nome" />
              </label>
              <label>
                Especialidade:
                <input type="text" placeholder="Sua especialidade" />
              </label>
              <label>
                Email:
                <input type="email" placeholder="Seu email" />
              </label>
              <label>
                Senha:
                <input type="password" placeholder="Sua senha" />
              </label>
              <button type="submit">Cadastrar</button>
            </form>
            <button className="close-button" onClick={handleCloseModals}>
              Fechar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
