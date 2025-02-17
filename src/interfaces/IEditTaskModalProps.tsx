import { ITask, TaskStatus } from "./ITask";

export interface IEditTaskModalProps {
    aberta: boolean;
    fecharModal: () => void;
    task: ITask | null;
    editarTask: (id: number, titulo: string, descricao: string, status: TaskStatus) => void;
}