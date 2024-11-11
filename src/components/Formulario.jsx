import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

function Formulario({
  addTodos,
  modoEdicion,
  tareaActual,
  updateTodo,
  handleChangeTodo,
}) {
  const [todo, setTodo] = useState({
    title: "",
    description: "",
    state: "pendiente",
    priority: false,
  });

  // Este efecto establece el formulario con la tarea actual al editar
  useEffect(() => {
    if (tareaActual) {
      setTodo(tareaActual);
    } else {
      setTodo({
        title: "",
        description: "",
        state: "pendiente",
        priority: false,
      });
    }
  }, [tareaActual]);

  // Función de validación antes de enviar los datos del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, description } = todo;

    if (!title.trim() || !description.trim()) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "El título y la descripción son obligatorios.",
      });
      return;
    }
    // Comprobación del modo edición
    if (modoEdicion) {
      updateTodo(todo); // Llamar a updateTodo para actualizar la tarea
      Swal.fire({
        title: "Tarea actualizada",
        text: "Se ha actualizado la tarea correctamente.",
        icon: "success",
      });
    } else {
      addTodos({ ...todo, id: Date.now() }); // Crear nueva tarea
      Swal.fire({
        title: "Tarea agregada",
        text: "Se ha agregado la tarea correctamente.",
        icon: "success",
      });
    }

    // Limpiar el formulario después de guardar
    setTodo({
      title: "",
      description: "",
      state: "pendiente",
      priority: false,
    });
  };

  // Función para detectar cambios en los inputs
  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setTodo({
      ...todo,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const { title, description, state, priority } = todo;

  return (
    <div className="w-50">
      <h2 className="text-center m-2 p-2">Nati Todo App</h2>
      <form
        className="d-flex flex-column justify-content-center align-content-center flex-wrap"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="title"
          placeholder="Introduce la tarea"
          className="form-control mb-2 w-50"
          value={title}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Introduce la descripción"
          className="form-control mb-2 w-50"
          value={description}
          onChange={handleChange}
          style={{ resize: "none" }}
        />
        <select
          name="state"
          className="form-control mb-2 w-50"
          value={state}
          onChange={handleChange}
        >
          <option value="pendiente">Pendiente</option>
          <option value="completada">Completada</option>
        </select>
        <div className="form-check mb-2 w-50 d-flex flex-row justify-content-center align-content-center flex-wrap">
          <input
            className="form-check-input"
            type="checkbox"
            name="priority"
            id="inputCheck"
            checked={priority}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="inputCheck">
            Prioridad
          </label>
        </div>
        <button
          type="submit"
          className={`btn mt-2 w-50 ${
            modoEdicion ? "btn-warning" : "btn-primary"
          }`}
        >
          {modoEdicion ? "Actualizar" : "Añadir"}
        </button>
      </form>
    </div>
  );
}

export default Formulario;
