export enum TaskStatus {
    pendente = "pendente",
    concluido = "concluido",
}

export interface ITask {
    id: number;
    titulo: string;
    descricao: string;
    status: TaskStatus;
    editar: (task: ITask) => void;
    deletar: (task: ITask) => void;
}