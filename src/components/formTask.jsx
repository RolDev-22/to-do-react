import React from "react";

const FormTask = () => {
  return (
    <form>
      <section className="topSection">
        <input type="text" placeholder="Tarea" />
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
      </section>
      <textarea name="description" id="textareaDescription"></textarea>
      <button type="submit">Agregar</button>
    </form>
  );
};

export default FormTask;
