import React, { useState, useRef } from "react";

const Card = ({ tarea, onEliminar, onActualizar }) => {
  const btnRef = useRef();
  const textareaRef = useRef();
  const [read, setRead] = useState(true);

  return (
    <div className="card">
      <h1>{tarea.tittle}</h1>
      <h6>Fecha Creación: {tarea.date}</h6>
      <h5>Prioridad: {tarea.priority}</h5>
      <textarea
        readOnly={read}
        defaultValue={tarea.description}
        ref={textareaRef}></textarea>
      <h5>Estado: {tarea.state}</h5>
      <div className="config">
        <button
          ref={btnRef}
          className="styleBtn"
          onClick={() => {
            if (read) {
              // Cambiar a modo edición
              setRead(false);
            } else {
              // Guardar cambios
              const nuevaDescripcion = textareaRef.current.value;
              const tareaActualizada = {
                ...tarea,
                description: nuevaDescripcion,
              };
              onActualizar(tareaActualizada);
              setRead(true);
            }
          }}>
          {read ? "Editar" : "Guardar"}
        </button>
        <button className="styleBtn" onClick={onEliminar}>
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Card;
