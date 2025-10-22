import Tarea from "./Tarea.class.js";

class GestorTareas {
  constructor() {
    this.lista = [];
  }

  cargarInicial() {
    let tarea = new Tarea();
    tarea.cargarTarea();
    this.agregarTarea(tarea);
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

  obtenerTareas() {
    return this.lista;
  }
}

export default GestorTareas;
