import React from "react";

const Nota = (props) => {
  const { note } = props;
  return <li>{note.content}</li>;
};

const Notas = (props) => {
  /* sin ES6 debemos usar
const plantTrees = this.props.plantTrees;
pero con ES6 simplemente usamos
const { plantTrees } = this.props */

  const { notes } = props;
  // console.log(notes);

  return (
    <div>
      <h1>Notas</h1>
      {/* en map siempre debe regresar un key */}
      <ul>
        {notes.map((note) => (
          <Nota key={note.id} note={note} />
        ))}
      </ul>
    </div>
  );
};

export default Notas;
