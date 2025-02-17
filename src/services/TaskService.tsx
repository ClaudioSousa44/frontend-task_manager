import axios from "axios";
import { TaskStatus } from "../interfaces/ITask";
import { toast } from "react-toastify";

const API_URL = "https://backend-taskmanager-production.up.railway.app/tasks";

export const getTasks = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error: any) {
        toast.error(error.response.data.message);
        return [];
    }
};

export const createTask = async (titulo: string, descricao: string) => {
    try {
        const novaTask = {
            titulo,
            descricao,
            status: TaskStatus.pendente,
        };

        const response = await axios.post(API_URL, novaTask);
        return response.data;
    } catch (error: any) {
        toast.error(error.response.data.message);
        throw new Error("Falha ao criar a tarefa. Tente novamente.");
    }
};

export const deleteTask = async (id: number) => {
    try {
        await axios.delete(`${API_URL}/${id}`);
        return true;
    } catch (error: any) {
        toast.error(error.response.data.message);
        console.error("Erro ao deletar tarefa:", error);
        return false;
    }
};

export const updateTask = async (id: number, titulo: string, descricao: string, status: TaskStatus) => {
    const taskAtualizada = {
        titulo,
        descricao,
        status
    }

    try {
        const response = await axios.put(`${API_URL}/${id}`, taskAtualizada);
        return response.data;
    } catch (error: any) {
        toast.error(error.response.data.message);
        return null;
    }
};

