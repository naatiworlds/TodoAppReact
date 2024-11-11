import React from "react";

function Todo({ todo, deleteTodo, completeTodo, handleChangeTodo }) {
  const { id, title, description, state, priority } = todo;

  return (
    <div>
      <li className="list-group-item">
        <div className="d-flex justify-content-between align-items-start align-content-center">
          <div>
            <div>
              <h5
                className={
                  state === "completada"
                    ? "Completada text-decoration-line-through"
                    : undefined
                }
              >
                {title}
              </h5>
              <p
                className={
                  state === "completada"
                    ? "Completada text-decoration-line-through"
                    : undefined
                }
              >
                {description}
              </p>
            </div>
            <div className="d-flex flex-row gap-2">
              <button className="btn btn-danger" onClick={() => deleteTodo(id)}>
                Eliminar
              </button>
              <button
                className="btn btn-warning"
                onClick={() => completeTodo(id)}
              >
                Completar
              </button>
              <button
                className="btn btn-info"
                onClick={() => handleChangeTodo(todo)} // Enviar todo el objeto 'todo'
              >
                Editar
              </button>
            </div>
          </div>
          <div>
            <span className="badge rounded-pill bg-primary m-2">
              {priority && "Prioridad"}
            </span>
            <span className="badge rounded-pill bg-success m-2">
              {state === "completada" && "Completada"}
            </span>
          </div>
        </div>
      </li>
    </div>
  );
}

export default Todo;
