import './Task.css';

function Task({ tarea, onToggle, onDelete }) {
  return (
    <li>
      <input
        type="checkbox"
        className="checkbox"
        onChange={() => onToggle(tarea.id)}
        checked={tarea.completada !== null}
      />
      <p className={tarea.completada ? 'completada' : 'tarea'}>{tarea.texto}</p>
      <small>Creada: {tarea.creada.toLocaleString()}</small>
      {tarea.completada && (
        <small>Completada: {tarea.completada.toLocaleString()}</small>
      )}
      <button className="eliminar" onClick={() => onDelete(tarea.id)}>Eliminar</button>
    </li>
  );
}

export default Task;
