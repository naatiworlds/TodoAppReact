import React from "react";
import Todo from "./Todo";

function Todos({
  todos,
  deleteTodo,
  completeTodo,
  cambiarModoEdicion,
  handleChangeTodo,
}) {
  // Ordenación de los todos en cuestión de la prioridad y si está completada o no
  const sortedTodos = [...todos].sort((a, b) => {
    // 1. Ordenar por estado: las no completadas primero
    if (a.state !== "completada" && b.state === "completada") return -1;
    if (a.state === "completada" && b.state !== "completada") return 1;
  
    // 2. Si ambos están en el mismo estado (ambos completados o ambos no completados), ordenamos por prioridad
    if (a.priority && !b.priority) return -1;
    if (!a.priority && b.priority) return 1;
  
    // 3. Si ambos tienen la misma prioridad y el mismo estado, mantener el orden actual
    return 0;
  });
  

  return (
    <div className="w-50">
      <h2 className="text-center m-2 p-2">Lista de tareas</h2>
      <ul
        className="list-group-item"
      >
        {sortedTodos.map((todos) => (
          <Todo
            key={todos.id}
            todo={todos}
            deleteTodo={deleteTodo}
            completeTodo={completeTodo}
            cambiarModoEdicion={cambiarModoEdicion}
            handleChangeTodo={handleChangeTodo}
          />
        ))}
        {todos.length === 0}
      </ul>
    </div>
  );
}

export default Todos;
