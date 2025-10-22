class Tarea {
  constructor(tittleP, descriptionP, priorityP, estateP) {
    this.tittle = tittleP;
    this.description = descriptionP;
    this.date = new Date().toLocaleDateString();
    this.priority = priorityP;
    this.state = estateP;
  }

  editTittle(newTittle) {
    this.tittle = newTittle;
  }

  editDescription(newDescription) {
    this.description = newDescription;
  }

  editPriority(newPriority) {
    this.priority = newPriority;
  }

  editState(newState) {
    this.state = newState;
  }

  cargarTarea() {
    this.tittle = "Tarea Inicial";
    this.description =
      "Esta tarea busca tener una tarea inicial para mostar en el listado";
    this.date = new Date().toLocaleDateString();
    this.priority = "normal";
    this.state = "pendiente";
  }
}

export default Tarea;
