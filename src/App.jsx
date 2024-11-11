import { Fragment, useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Todos from "./components/Todos";

const initialStateTodo = JSON.parse(localStorage.getItem("todos")) || [
  {
    id: 1,
    title: "tarea 1",
    description: "descripcion1",
    state: "completada",
    priority: false,
  },
  {
    id: 2,
    title: "tarea 2",
    description: "descripcion2",
    state: "pendiente",
    priority: true,
  },
  {
    id: 3,
    title: "tarea 3",
    description: "descripcion3",
    state: "pendiente",
    priority: false,
  },
  {
    id: 4,
    title: "tarea 4",
    description: "descripcion4",
    state: "pendiente",
    priority: false,
  },
  {
    id: 5,
    title: "tarea 5",
    description: "descripcion5",
    state: "pendiente",
    priority: false,
  },
  // Puedes añadir más tareas de ejemplo si deseas
];

function App() {
  const [todos, setTodos] = useState(initialStateTodo);
  const [modoEdicion, setModoEdicion] = useState(false);
  const [tareaActual, setTareaActual] = useState(null);

  // Efecto para guardar en localStorage cuando el estado de 'todos' cambie
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleChangeTodo = (todo) => {
    setModoEdicion(true); // Activar modo edición
    setTareaActual(todo); // Cargar la tarea a editar
  };

  const addTodos = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const completeTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              state: todo.state === "completada" ? "pendiente" : "completada",
            }
          : todo
      )
    );
  };

  const updateTodo = (todoActualizado) => {
    setTodos(
      todos.map((todo) =>
        todo.id === todoActualizado.id ? todoActualizado : todo
      )
    );
    setModoEdicion(false);
    setTareaActual(null); // Limpiar la tarea actual después de actualizarla
  };

  return (
    <Fragment>
      <section className="d-flex flex-row align-content-center justify-content-center align-items-center">
        <Formulario
          addTodos={addTodos}
          modoEdicion={modoEdicion}
          tareaActual={tareaActual}
          updateTodo={updateTodo}
        />
        <Todos
          todos={todos}
          deleteTodo={deleteTodo}
          completeTodo={completeTodo}
          handleChangeTodo={handleChangeTodo}
        />
      </section>
    </Fragment>
  );
}

export default App;
