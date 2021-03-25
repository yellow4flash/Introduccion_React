import React, { useEffect, useState } from "react";

const Nota = (props) => {
  const { note } = props;
  return <li>{note.content}</li>;
};
// le hook o useState no puede estar dentro de una funcion anidada
const Notas = (props) => {
  /* sin ES6 debemos usar
const plantTrees = this.props.plantTrees;
pero con ES6 simplemente usamos
const { plantTrees } = this.props */
  const { notes } = props;
  const [notas, setNotas] = useState(notes);
  const [nuevaNota, setNuevaNota] = useState("");
  const [showImportant, setShowImportant] = useState(false);
  console.log("nuevaNota", nuevaNota);
  //console.log(`${notes}`); //se llama interpolación
  // setnotas puede ir en cualquier lado, excepto en mi return
  // notas si puede ir en cualquier lado.
  useEffect(() => {
    console.log("Notas", notas);
  }, [notas]);

  const addNote = (e) => {
    e.preventDefault();
    const noteObject = {
      content: nuevaNota,
      date: new Date().toISOString,
      important: Math.random() < 0.5,
      id: notas.length + 1
    };
    setNotas(notas.concat(noteObject));
    setNuevaNota("");
    // console.log(e);
  };

  const handleNoteChange = (e) => {
    const { target } = e;
    const { value } = target;
    setNuevaNota(value);
    // console.log("Mi nota es:", value);

    // console.log("mi nota es:", e.target.value);
  };
  /* 
  Diversos eventos
  -onSubmit
  -onClick
  -onMouseEnter
  -onMouseLeave
  */
  const handleButtom = (e) => {
    setShowImportant(!showImportant);
  };
  console.log(showImportant);

  const notasAMostrar = showImportant
    ? notas.filter((note) => note.important === true)
    : notas;

  console.log(notasAMostrar);

  return (
    <div>
      <h1>Notas</h1>
      {/* en map siempre debe regresar un key */}
      <button onClick={handleButtom}>
        {showImportant ? "All" : "Important"}
      </button>
      <ul>
        {notasAMostrar.map((note) => (
          <Nota key={note.id} note={note} />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={nuevaNota} onChange={handleNoteChange} />
        <button type="submit">Guardar nota</button>
      </form>
    </div>
  );
};

export default Notas;
