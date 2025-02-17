import React, { useState } from 'react';
import Modal from 'react-modal';
import { ICreateTaskModalProps } from "../interfaces/ICreateTaskModalProps"; // Importando a interface
import '../style/CreateTaskModal.css'
import { toast } from 'react-toastify';

const CreateTaskModal: React.FC<ICreateTaskModalProps> = ({ aberta, fecharModal, addTask }) => {
    const [newTask, setNewTask] = useState({ titulo: '', descricao: '' });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setNewTask({ ...newTask, [name]: value });
    };

    const validateForm = () => {
        if (!newTask.titulo.trim() || newTask.titulo.length > 70 || newTask.titulo.length < 0) {
            toast.error("O título deve ter entre 0 a 70 caracteres");
            return false;
        }

        if (!newTask.descricao.trim() || newTask.descricao.length < 0) {
            toast.error("A descrição é obrigatória");
            return false;
        }
        return true;
    };



    const handleCreateTask = () => {
        if (validateForm()) {
            addTask(newTask.titulo, newTask.descricao);
            setNewTask({ titulo: '', descricao: '' });
            fecharModal();
        }
    };

    return (
        <Modal
            isOpen={aberta}
            onRequestClose={fecharModal}
            contentLabel="Criar Tarefa"
            ariaHideApp={false}
            className="modal-content"
            overlayClassName="modal-overlay"
        >
            <h2>Criar Nova Tarefa</h2>
            <input
                type="text"
                name="titulo"
                value={newTask.titulo}
                onChange={handleInputChange}
                placeholder="Título da tarefa"
            />
            <textarea
                name="descricao"
                value={newTask.descricao}
                onChange={handleInputChange}
                placeholder="Descrição da tarefa"
                rows={10}
            ></textarea>
            <div>
                <button onClick={handleCreateTask}>Criar</button>
                <button onClick={fecharModal}>Cancelar</button>
            </div>
        </Modal>
    );
};

export default CreateTaskModal;
