import React, { Fragment } from "react";

const Condicional2 = (props) => {
  const { estado } = props;
  //Render
  // para poder usar un condicional dentro de mi renderizado,
  // debo usar el if ternario cond ? : ;
  return (
    <Fragment>
      <h1>Decición</h1>
      {estado === "L" ? (
        <h2>Estas en estado Liquido</h2>
      ) : estado === "S" ? (
        <h2>Estás en estado solido</h2>
      ) : (
        <h2>tu estado por defecto es gaseoso</h2>
      )}
    </Fragment>
  );
};

export default Condicional2;
