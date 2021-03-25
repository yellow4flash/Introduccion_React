import React, { useState, useEffect, Fragment } from "react";

const Telefonia = () => {
  const [persons, setPersons] = useState([
    { name: "Hoose", number: "3141066664" }
  ]);
  // const [newPersons, setNewPersons] = useState("");
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [showImportant, setShowImportant] = useState(false);

  // console.log(persons);
  // console.log(newNumber);

  useEffect(() => {
    // setPersons(persons);
    // console.log("Personas", persons);
  }, [persons]);
  // para que sirven las funciones filter, map,

  const addPerson = (e) => {
    e.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber
    };

    if (newNumber.length === 0 || newNumber.length > 10) {
      // console.log("addPerson:", newNumber);
      alert("El número debe ser válido no más de 10 digitos");
    } else if (
      persons.filter((person) => newNumber === person.number).length > 0
    ) {
      /* filter es una funcion de JS
      que permite (como su nombre lo dice)
      Filtrar los objetos que cumplan la condición de adentro*/
      alert("Número repetido");
    } else {
      setPersons(persons.concat(personObject));
      setNewName("");
      setNewNumber("");
      console.log("Enviado");
    }
  };
  // console.log("out:", persons);

  const handleNameChange = (e) => {
    const { target } = e;
    const { value } = target;
    setNewName(value);
    // console.log(value);
  };
  const handleNumberChange2 = (e) => {
    const { target } = e;
    const { value } = target;
    // const phoneNumber = value.length <= 10 ? value : 0;
    setNewNumber(value);
    console.log(value);
  };

  const handleButtom = (e) => {
    setShowImportant(!showImportant);
  };
  return (
    <Fragment>
      <h2>Guía telefónica</h2>
      <form onSubmit={addPerson}>
        <div>
          <label>Nombre: </label>
          <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          Numero: <input value={newNumber} onChange={handleNumberChange2} />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {/* MOSTRAR GUÍA AQUÍ */}
      <button onClick={handleButtom}>{showImportant ? "Hide" : "Show"}</button>
      {
        <span>
          {showImportant ? (
            <ul>
              {persons.map((person) => {
                const { name, number } = person;
                return (
                  // template literals
                  <li>{`Nombre: ${name} --- Número: ${number}`}</li>
                );
              })}
            </ul>
          ) : (
            <div />
          )}
        </span>
      }
    </Fragment>
  );
};

export default Telefonia;
