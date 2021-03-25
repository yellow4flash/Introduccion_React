import React, { Fragment } from "react";

const Asincrono = () => {
  /* Asincronia es algo muuuy pero muy fundamental den Js
 Lenguaje de progamación que se ejecuta en un soslo hilo.
 ¿Que significa esto?
 solo puede ejecutar una cosa a la vez en todo su proceso de vida
  */
  //  Asincrono: la respuesta funciona a futuro,
  // una funcion asincrona no esperará el resultado
  // Sincrono: La respuesta esta sucediendo en el presente,
  // esa operación esperará el resultado.

  const uno = () => {
    setTimeout(() => {
      console.log("uno");
    }, 0);
    dos();
    console.log("tres");
  };
  const dos = () => {
    setTimeout(() => {
      console.log("dos");
    }, 1000);
  };
  const handleClick = () => {
    console.log("inicio");
    uno();
    console.log("fin");
  };
  const unoSincrono = () => {
    console.log("uno sinc");
  };
  const dosSincrono = () => {
    setTimeout(() => {
      console.log("uno sinc");
    }, 1000);
  };
  const handleClickSincrono = () => {
    console.log("Inicio");
    unoSincrono();
    console.log("fin");
  };
  return (
    <Fragment>
      <button onClick={handleClick}>click Asincrono</button>
      <button onClick={handleClickSincrono}>click Sincrono</button>
    </Fragment>
  );
};

export default Asincrono;
