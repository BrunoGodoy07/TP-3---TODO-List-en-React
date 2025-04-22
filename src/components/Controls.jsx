import './Controls.css';

function Controls({ onDeleteAll, onMostrarRapida, showEliminar, showRapida }) {
  return (
    <div className="controls">
      {showEliminar && (
        <button className="eliminar" onClick={onDeleteAll}>
          Eliminar Lista
        </button>
      )}
      {showRapida && (
        <button className="rapida" onClick={onMostrarRapida}>
          Tarea más rápida completada
        </button>
      )}
    </div>
  );
}

export default Controls;
