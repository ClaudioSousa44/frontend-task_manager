import { ITask } from "./ITask";

export interface IDeleteConfirmationModalProps {
  aberta: boolean;
  fecharModal: () => void;
  task: ITask | null;
  confirmDelete: (id: number) => void;
}