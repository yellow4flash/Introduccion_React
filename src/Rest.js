import React, { Fragment, useEffect, useState } from "react";
const Rest = () => {
  const [users, setUsers] = useState([]);
  // cuando sea la 1ra vez
  // que mi componentes se renderice o 'que se monte'
  // ejecute una acción
  useEffect(() => {
    console.log("1ra vez renderizado");
    handleLoadUsers();
  }, []);
  const handleLoadUsers = async () => {
    // console.log("cargando usuarios...");
    // const response = fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => response.json())
    //   .then((json) => {
    //     console.log("respuesta", json);
    //     console.log("fin");
    //   });
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    setUsers(users);
    console.log("response:", users);
  };
  return (
    <Fragment>
      <h1>Usuarios</h1>
      {users.length === 0 ? (
        <Fragment>
          <p>No hay usuarios aún</p>
          {/* <button onClick={handleLoadUsers}>Cargar Usuarios</button> */}
        </Fragment>
      ) : (
        <Fragment>
          <p>Hay usuarios</p>
          <span>
            {users.map((user) => {
              const { id, name, address } = user;
              const { street } = address;
              console.log(name);
              return (
                <li key={id}>
                  <b>Nombre:---</b>
                  {name}-----<b>Calle:----</b>
                  {street}
                </li>
              );
            })}
          </span>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Rest;
