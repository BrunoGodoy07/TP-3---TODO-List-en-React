import { useState } from 'react';
import './AddTask.css';

function AddTask({ onAdd }) {
  const [texto, setTexto] = useState('');

  const handleAdd = () => {
    if (texto.trim() === '') return alert('Por favor, ingrese una tarea');
    onAdd(texto.trim());
    setTexto('');
  };

  return (
    <div className="add-task">
      <input
        type="text"
        value={texto}
        onChange={e => setTexto(e.target.value)}
        placeholder="Ingrese una nueva tarea"
      />
      <button onClick={handleAdd}>Agregar Tarea</button>
    </div>
  );
}

export default AddTask;
