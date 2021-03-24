import React, { Fragment } from "react";

const Condicional = (props) => {
  const { totalMessages } = props;
  //Render
  // para poder usar un condicional dentro de mi renderizado,
  // debo usar el if ternario cond ? : ;
  return (
    <Fragment>
      <h1>Elemento 1</h1>
      {totalMessages > 0 && <h2>Tu tienes mensajes.</h2>}
      {totalMessages > 0 ? (
        <h2>Tu tienes mensajes</h2>
      ) : (
        <h2>No tienes mensajes</h2>
      )}
    </Fragment>
  );
};

export default Condicional;
