import "./App.css";
import React, { useState } from "react";
import Card from "./components/card";
import FormTask from "./components/formTask";
import GestorTareas from "./models/GestorTareas";

function App() {
  const [tareas, setTareas] = useState(GestorTareas.obtenerTareas());
  const eliminarTarea = (index) => {
    GestorTareas.deleteTask(index);
    setTareas([...GestorTareas.obtenerTareas()]);
  };

  const actualizarTarea = (index, tarea) => {
    GestorTareas.updateTask(index, tarea);
    setTareas([...GestorTareas.obtenerTareas()]);
  };

  return (
    <div className="App">
      <h1 className="tittleMain">TODO - ADD - LIST</h1>
      <section className="containerForm">
        <FormTask
          actualizarTareas={() => setTareas([...GestorTareas.obtenerTareas()])}
        />
      </section>

      <section className="containerTask">
        {tareas.map((tarea, index) => (
          <Card
            key={index}
            tarea={tarea}
            onEliminar={() => eliminarTarea(index)}
            onActualizar={(tarea) => actualizarTarea(index, tarea)}
          />
        ))}
      </section>
    </div>
  );
}

export default App;
