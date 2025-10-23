import React, { useState, useRef } from "react";
import gestor from "../models/GestorTareas";
import Tarea from "../models/Tarea.class";

const FormTask = ({ actualizarTareas }) => {
  const nameRef = useRef();
  const priorityRef = useRef();
  const descriptionRef = useRef();

  function submitForm(e) {
    e.preventDefault();

    const name = nameRef.current.value.trim();
    const priority = priorityRef.current.value;
    const description = descriptionRef.current.value.trim();

    if (!name || !priority) {
      alert("Por favor complete el nombre y la prioridad.");
      return;
    }

    gestor.agregarTarea(new Tarea(name, description, priority, "pendiente"));

    nameRef.current.value = "";
    priorityRef.current.value = "";
    descriptionRef.current.value = "";

    actualizarTareas();
  }

  return (
    <form>
      <section className="topSection">
        <div className="inputContainer">
          <label htmlFor="nameTask">Nombre de Tarea</label>
          <input
            id="nameTask"
            type="text"
            placeholder="Escriba su nombre de tarea"
            ref={nameRef}
          />
        </div>
        <div className="inputContainer">
          <label htmlFor="selectPriority">Prioridad de Tarea</label>
          <select
            name="selectPriority"
            id="selectPriority"
            ref={priorityRef}
            defaultValue="">
            <option value="" selected>
              Seleccione Prioridad
            </option>
            <option value="urgente">Urgente</option>
            <option value="alta">Alta</option>
            <option value="media">Media</option>
            <option value="normal">Normal</option>
            <option value="baja">Baja</option>
          </select>
        </div>
      </section>
      <div className="inputContainer">
        <label htmlFor="textareaDescription">Descripcion de Tarea</label>
        <textarea
          name="description"
          id="textareaDescription"
          ref={descriptionRef}></textarea>
      </div>
      <button type="submit" className="styleBtn" onClick={submitForm}>
        Agregar
      </button>
    </form>
  );
};

export default FormTask;
