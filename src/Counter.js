import React, { Fragment, useState } from "react";

const counter = () => {
  // Nomenclatura de array
  /* useState() es una función que crea internamente una variable 
  donde podremos almacenar el estado de nuestro componente. 
  Acepta un valor inicial para esa variable y devuelve un array 
  con dos elementos, el valor de la variable y la función para modificarla. */
  const [count, setCount] = useState(0);
  const handleClick = (increment) => {
    if (increment) {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  };

  return (
    <Fragment>
      <button className="btn" onClick={() => handleClick(true)}>
        Click
      </button>
      <button className="btn" onClick={() => handleClick(false)}>
        Diminish
      </button>
      <p>Nuestro contador es {count}</p>
    </Fragment>
  );
};

export default counter;
