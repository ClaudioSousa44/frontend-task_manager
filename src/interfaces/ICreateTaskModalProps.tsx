export interface ICreateTaskModalProps {
  aberta: boolean;
  fecharModal: () => void;
  addTask: (titulo: string, descricao: string) => void;
}