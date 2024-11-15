import React from "react";

function Todo({ todo, deleteTodo, completeTodo, handleChangeTodo }) {
  const { id, title, description, state, priority } = todo;

  return (
    <div>
      <li className="list-group-item">
        <div className="d-flex justify-content-between align-items-start align-content-center">
          <div className="">
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
              <button className="btn btn-danger m-2" 
              onClick={() => deleteTodo(id)}>
                Eliminar
              </button>
              <button
                className="btn btn-warning m-2"
                onClick={() => completeTodo(id)}
              >
                Completar
              </button>
              <button
                className="btn btn-info m-2"
                onClick={() => handleChangeTodo(todo)} // Enviar todo el objeto 'todo'
              >
                Editar
              </button>
            </div>
          </div>
          <div>
            <span className="badge rounded-pill bg-primary">
              {priority && "Prioridad"}
            </span>
            <span className="badge rounded-pill bg-success">
              {state === "completada" && "Completada"}
            </span>
          </div>
        </div>
      </li>
    </div>
  );
}

export default Todo;
