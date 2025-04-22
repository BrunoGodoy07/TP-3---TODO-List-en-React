import { useState } from 'react';
import AddTask from './components/addtask';
import TaskList from './components/tasklist';
import Controls from './components/Controls';
import './App.css';



function App() {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (texto) => {
    const nuevaTarea = {
      id: crypto.randomUUID(),
      texto,
      completada: null,
      creada: new Date()
    };
    setTareas([...tareas, nuevaTarea]);
  };

  const alternarCompletada = (id) => {
    setTareas(tareas.map(t => 
      t.id === id ? { ...t, completada: t.completada ? null : new Date() } : t
    ));
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter(t => t.id !== id));
  };

  const eliminarTodas = () => {
    setTareas([]);
  };

  const tareaMasRapida = () => {
    const tareasCompletadas = tareas.filter(t => t.completada);
    if (tareasCompletadas.length === 0) {
      alert('No hay tareas completadas');
      return;
    }

    let tareaRapida = tareasCompletadas[0];
    let menorDuracion = tareaRapida.completada - tareaRapida.creada;

    for (let t of tareasCompletadas) {
      const duracion = t.completada - t.creada;
      if (duracion < menorDuracion) {
        menorDuracion = duracion;
        tareaRapida = t;
      }
    }

    alert(`La tarea más rápida fue: "${tareaRapida.texto}"\nDuración: ${(menorDuracion / 1000).toFixed(2)} segundos`);
  };

  return (
    <div className="App">
      <h1>Lista de Tareas</h1>
      <AddTask onAdd={agregarTarea} />
      <TaskList tareas={tareas} onToggle={alternarCompletada} onDelete={eliminarTarea} />
      <Controls
        onDeleteAll={eliminarTodas}
        onMostrarRapida={tareaMasRapida}
        showEliminar={tareas.length > 0}
        showRapida={tareas.some(t => t.completada)}
      />
    </div>
  );
}

export default App;
