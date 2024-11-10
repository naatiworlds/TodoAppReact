import React from "react";
import Todo from "./Todo";

function Todos({
  todos,
  deleteTodo,
  completeTodo,
  cambiarModoEdicion,
  handleChangeTodo
}) {
  const sortedTodos = [...todos].sort((a, b) => {
    if (a.priority && !b.priority) return -1;
    if (!a.priority && b.priority) return 1;

    if (a.state === "completada" && b.state !== "completada") return 1;
    if (a.state !== "completada" && b.state === "completada") return -1;

    return 0;
  });

  return (
    <div>
      <h2 className="text-center m-2 p-2">Lista de tareas</h2>
      <ul
        className="list-group-item 
      w-75 
      m-auto"
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
