import TaskPage from './pages/TaskPage'
import './App.css'
import { ToastContainer } from 'react-toastify';

const App: React.FC = () => {
  return (
    <div>
      <TaskPage />
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default App;
