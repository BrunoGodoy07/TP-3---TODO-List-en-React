import Task from './Task';
import './TaskList.css';

function TaskList({ tareas, onToggle, onDelete }) {
  return (
    <ul>
      {tareas.map(t => (
        <Task key={t.id} tarea={t} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </ul>
  );
}

export default TaskList;
