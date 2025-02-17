import React, { useEffect, useState } from "react";
import TaskTable from '../components/TaskTable';
import { ITask, TaskStatus } from "../interfaces/ITask";
import '../style/TaskPage.css'
import CreateTaskModal from "../components/CreateTaskModal";
import { createTask, deleteTask, getTasks, updateTask } from "../services/TaskService";
import EditTaskModal from "../components/EditTaskModal";
import { toast } from "react-toastify";
import DeleteConfirmationModal from "../components/DeleteConfirmationModal";

const TaskPage: React.FC = () => {
    const [tasks, setTasks] = useState<ITask[]>([]);
    const [editModalAberta, setEditModalAberta] = useState(false);
    const [taskSelecionada, setTaskSelecionada] = useState<ITask | null>(null);
    const [deleteModalAberta, setDeleteModalAberta] = useState(false);
    const [taskParaExcluir, setTaskParaExcluir] = useState<ITask | null>(null);

    useEffect(() => {
        carregarTarefas();
    }, []);

    const carregarTarefas = async () => {
        const tarefas = await getTasks();
        setTasks(tarefas.data);
    };

    const [modalAberta, setModalAberta] = useState(false);

    const handleEdit = (task: ITask) => {
        setTaskSelecionada(task);
        setEditModalAberta(true);
    };

    const handleUpdateTask = async (id: number, titulo: string, descricao: string, status: TaskStatus) => {
        const updatedTask = await updateTask(id, titulo, descricao, status);
        if (updatedTask) {
            toast.success('Task atualizada com sucesso')
            setTasks(prevTasks => prevTasks.map(task =>
                task.id === id ? { ...task, titulo, descricao, status } : task
            ));
        }
    };

    const handleDelete = (task: ITask) => {
        setTaskParaExcluir(task);
        setDeleteModalAberta(true);
    };

    const confirmDelete = async (id: number) => {
        const sucesso = await deleteTask(id);
        if (sucesso) {
            setTasks(tasks.filter(task => task.id !== id));
            toast.success('Task apagada com sucesso');
        } else {
            console.error("Falha ao excluir a tarefa.");
        }
        setDeleteModalAberta(false);
    };

    const handleCreateTask = async (titulo: string, descricao: string) => {
        try {
            const novaTarefa = await createTask(titulo, descricao);
            toast.success(novaTarefa.message)
            setTasks([...tasks, novaTarefa.data]);
        } catch (error) {
            console.error("Erro ao criar tarefa:", error);
        }
    };

    const openModal = () => {
        setModalAberta(true);
    };

    const closeModal = () => {
        setModalAberta(false);
    };

    return (
        <div className="container_main">
            <h1>Lista de tarefas</h1>

            <div className="container_button" >
                <button onClick={openModal} className="create-task-button">Criar Tarefa</button>
            </div>

            <CreateTaskModal
                aberta={modalAberta}
                fecharModal={closeModal}
                addTask={handleCreateTask}
            />

            <EditTaskModal
                aberta={editModalAberta}
                fecharModal={() => setEditModalAberta(false)}
                task={taskSelecionada}
                editarTask={handleUpdateTask} />

            <DeleteConfirmationModal
                aberta={deleteModalAberta}
                fecharModal={() => setDeleteModalAberta(false)}
                task={taskParaExcluir}
                confirmDelete={confirmDelete}
            />

            <TaskTable
                tasks={tasks.map(task => ({
                    ...task,
                    status: task.status,
                    editar: handleEdit,
                    deletar: handleDelete,
                }))}
            />
        </div>
    );
};

export default TaskPage;
