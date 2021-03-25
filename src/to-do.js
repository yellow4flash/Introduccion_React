import React, { Fragment, useEffect, useState } from "react";

const Lista = () => {
  const [todos, setTodos] = useState([]);
  const [showImportant, setShowImportant] = useState(false);
  // la 1ra vez que renderice o 'que se monte'
  // ejecute una acción
  useEffect(() => {
    console.log("1ra vez renderizado");
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await response.json();
    setTodos(todos);
  };

  const handleButtom = (e) => {
    setShowImportant(!showImportant);
  };
  // función botón

  const filtro = todos.filter((item) => item.userId === 1);

  const TodosAMostrar = showImportant ? filtro : todos;

  console.log(TodosAMostrar);

  return (
    <Fragment>
      <h1>Lista To-Do</h1>
      <button onClick={handleButtom}>
        {showImportant ? "All" : "The First Twenty"}
      </button>
      {todos.length === 0 ? (
        <Fragment>
          <p>Cargando lista de tareas...</p>
          {/* <button onClick={handleLoadUsers}>Cargar Usuarios</button> */}
        </Fragment>
      ) : (
        <Fragment>
          <h2>Lista de tareas</h2>
          <ul>
            {TodosAMostrar.map((all) => {
              const { id, title, completed } = all;
              const uno = completed ? "Si" : "No";
              // console.log(title);
              return (
                <li key={id}>
                  <b>{id}:</b>
                  <b>Título:_</b>
                  {title}--<b>Completado:</b>
                  {uno}
                </li>
              );
            })}
          </ul>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Lista;
