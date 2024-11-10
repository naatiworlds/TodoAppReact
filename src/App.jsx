import { Fragment, useState } from "react";
import Formulario from "./components/Formulario";
import Todos from "./components/Todos";

const initialStateTodo = [
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
];

function App() {
  const [todos, setTodos] = useState(initialStateTodo);
  const [modoEdicion, setModoEdicion] = useState(false);
  const [tareaActual, setTareaActual] = useState(null); // Estado para almacenar la tarea en edición

  const addTodos = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const completeTodo = (id) => {
    const newArray = todos.map((todo) => {
      if (todo.id === id) {
        todo.state = todo.state === "completada" ? "pendiente" : "completada";
      }
      return todo;
    });
    setTodos(newArray);
  };

  const handleChangeTodo = (todo) => {
    setModoEdicion(true); // Cambia a modo de edición
    setTareaActual(todo); // Establece la tarea seleccionada
  };

  const updateTodo = (todoActualizado) => {
    const newTodos = todos.map((todo) =>
      todo.id === todoActualizado.id ? todoActualizado : todo
    );
    setTodos(newTodos);
    setModoEdicion(false); // Salir de modo de edición
    setTareaActual(null); // Limpiar la tarea actual
  };

  return (
    <Fragment>
      <Formulario
        addTodos={addTodos}
        modoEdicion={modoEdicion}
        tareaActual={tareaActual} // Pasamos la tarea actual
        updateTodo={updateTodo} // Pasamos la función de actualizar
        handleChangeTodo={handleChangeTodo}
      />
      <Todos
        todos={todos}
        deleteTodo={deleteTodo}
        completeTodo={completeTodo}
        handleChangeTodo={handleChangeTodo} // Pasamos la función de editar
      />
    </Fragment>
  );
}

export default App;
