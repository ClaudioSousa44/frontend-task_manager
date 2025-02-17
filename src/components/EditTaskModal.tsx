import React, { useState } from "react";
import Modal from 'react-modal';
import { IEditTaskModalProps } from "../interfaces/IEditTaskModalProps";
import { TaskStatus } from "../interfaces/ITask";
import { toast } from "react-toastify";

const EditTaskModal: React.FC<IEditTaskModalProps> = ({ aberta, fecharModal, task, editarTask }) => {
    const [titulo, setTitulo] = useState(task?.titulo || "");
    const [descricao, setDescricao] = useState(task?.descricao || "");
    const [status, setStatus] = useState<TaskStatus>(TaskStatus.pendente);

    React.useEffect(() => {
        if (task) {
            setTitulo(task.titulo);
            setDescricao(task.descricao);
            setStatus(task.status);
        }
    }, [task]);

    const validateForm = () => {
        if (!titulo.trim() || titulo.length > 70 || titulo.length < 0) {
            toast.error("O título deve ter entre 0 a 70 caracteres");
            return false;
        }

        if (!descricao.trim() || descricao.length < 0) {
            toast.error("A descrição é obrigatória");
            return false;
        }
        return true;
    };

    const handleEdit = () => {
        if (validateForm()) {
            if (task) {
                editarTask(task.id, titulo, descricao, status);
                fecharModal();
            }
        }
    };

    return (
        <Modal isOpen={aberta} onRequestClose={fecharModal} ariaHideApp={false} className="modal-content" overlayClassName="modal-overlay">
            <h2>Editar Tarefa</h2>
            <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} placeholder="Título da tarefa" />
            <textarea value={descricao} onChange={(e) => setDescricao(e.target.value)} placeholder="Descrição da tarefa" rows={10} />
            <select
                value={status}
                onChange={(e) => setStatus(TaskStatus[e.target.value as keyof typeof TaskStatus])}
            >
                <option value="pendente">Pendente</option>
                <option value="concluido">Concluído</option>
            </select>
            <div>
                <button onClick={handleEdit}>Salvar</button>
                <button onClick={fecharModal}>Cancelar</button>
            </div>
        </Modal>
    );
};

export default EditTaskModal;