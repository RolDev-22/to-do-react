import "./App.css";
import React, { useState } from "react";
import Card from "./components/card";
import FormTask from "./components/formTask";
import GestorTareas from "./models/GestorTareas";
import Tarea from "./models/Tarea.class";

const gestor = new GestorTareas();

gestor.cargarInicial();

gestor.agregarTarea(
  new Tarea("Tarea 1", "Descripción 1", "normal", "pendiente")
);
gestor.agregarTarea(new Tarea("Tarea 2", "Descripción 2", "alta", "pendiente"));

function App() {
  const [tareas, setTareas] = useState(gestor.obtenerTareas());

  const eliminarTarea = (index) => {
    gestor.deleteTask(index);
    setTareas([...gestor.obtenerTareas()]);
  };

  return (
    <div className="App">
      <h1 className="tittleMain">TODO - ADD - LIST</h1>
      <section className="containerForm">
        <FormTask />
      </section>

      <section className="containerTask">
        {tareas.map((tarea, index) => (
          <Card
            key={index}
            tarea={tarea}
            onEliminar={() => eliminarTarea(index)}
          />
        ))}
      </section>
    </div>
  );
}

export default App;
