import Tarea from "./Tarea.class.js";

class GestorTareas {
  constructor() {
    this.lista = [];
  }

  agregarTarea(tarea) {
    if (tarea instanceof Tarea) {
      this.lista.push(tarea);
    }
  }

  deleteTask(index) {
    if (index >= 0 && index < this.lista.length) {
      this.lista.splice(index, 1);
    }
  }

  updateTask(index, tarea) {
    if (index >= 0 && index < this.lista.length) {
      this.lista[index] = tarea;
    }
  }

  obtenerTareas() {
    return this.lista;
  }
}

const gestor = new GestorTareas();
export default gestor;
