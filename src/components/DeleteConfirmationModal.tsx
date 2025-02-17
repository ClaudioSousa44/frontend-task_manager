import React from 'react';
import Modal from 'react-modal';
import { IDeleteConfirmationModalProps } from '../interfaces/IDeleteConfirmationModalProps';

const DeleteConfirmationModal: React.FC<IDeleteConfirmationModalProps> = ({ aberta, fecharModal, task, confirmDelete }) => {
  return (
    <Modal isOpen={aberta} onRequestClose={fecharModal} ariaHideApp={false} className="modal-content" overlayClassName="modal-overlay">
      <h2>Confirmar Exclusão</h2>
      {task && (
        <>
          <p>Tem certeza de que deseja excluir a tarefa "{task.titulo}"?</p>
          <div>
            <button onClick={() => confirmDelete(task.id)}>Confirmar</button>
            <button onClick={fecharModal}>Cancelar</button>
          </div>
        </>
      )}
    </Modal>
  );
};

export default DeleteConfirmationModal;