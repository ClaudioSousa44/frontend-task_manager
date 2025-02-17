import React from 'react';
import '../style/TaskTable.css'
import { ITaskTableProps } from '../interfaces/ITaskTableProps';
import { FaEdit, FaTrash } from 'react-icons/fa';

type Status = 'pendente' | 'concluido';

const formatarStatus = (status: Status) => {
  const statusFormatado = {
    pendente: "Pendente",
    concluido: "Concluído",
  };

  return statusFormatado[status] || status;
};

const TaskTable: React.FC<ITaskTableProps> = ({ tasks }) => {
  return (
    <table className="task-table">
      <thead>
        <tr>
          <th>Título</th>
          <th>Descrição</th>
          <th>Status</th>
          <th className="acoes_coluna">Ações</th>
        </tr>
      </thead>
      <tbody>
        {tasks.length === 0 ? (
          <tr>
            <td colSpan={4} style={{ textAlign: 'center', color: 'gray' }}>
              Não há tarefas disponíveis.
            </td>
          </tr>
        ) : (
          tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.titulo}</td>
              <td>{task.descricao}</td>
              <td>{formatarStatus(task.status)}</td>
              <td>
                <button onClick={() => task.editar(task)} className="edit-button">
                  <FaEdit size={24} />
                </button>
                <button onClick={() => task.deletar(task)} className="delete-button">
                  <FaTrash size={24} />
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default TaskTable;
