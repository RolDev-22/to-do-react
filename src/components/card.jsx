import React from "react";

const Card = ({ tarea, onEliminar }) => {
  return (
    <div className="card">
      <h1>{tarea.tittle}</h1>
      <h6>Fecha Creación: {tarea.date}</h6>
      <h5>Prioridad: {tarea.priority}</h5>
      <p>{tarea.description}</p>
      <h5>Estado: {tarea.state}</h5>
      <div className="config">
        <button className="styleBtn">Editar</button>
        <button className="styleBtn" onClick={onEliminar}>
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Card;
