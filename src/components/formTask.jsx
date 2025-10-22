import React from "react";

const FormTask = () => {
  return (
    <form>
      <section className="topSection">
        <div className="inputContainer">
          <label for="nameTask">Nombre de Tarea</label>
          <input
            id="nameTask"
            type="text"
            placeholder="Escriba su nombre de tarea"
          />
        </div>
        <div className="inputContainer">
          <label for="selectPriority">Prioridad de Tarea</label>
          <select name="selectPriority" id="selectPriority">
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
        <label for="textareaDescription">Descripcion de Tarea</label>
        <textarea name="description" id="textareaDescription"></textarea>
      </div>
      <button type="submit" className="styleBtn">
        Agregar
      </button>
    </form>
  );
};

export default FormTask;
