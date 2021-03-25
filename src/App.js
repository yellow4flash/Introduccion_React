import "./styles.css";
// import Hola from "./Hello";
// import Counter from "./Counter";
// import Notas from "./notas";
// import Cursos from "./cursos";
// import Condicional from "./condicional";
// import Condicional2 from "./condicional2";
// import Telefonia from "./telefonia";
// import Asincrono from "./Asincrono";
import Rest from "./Rest";

const notes = [
  {
    id: 1,
    content: "HTML es muy fácil",
    date: "2020-01-01",
    important: true
  },
  {
    id: 2,
    content: "Los navegadores solo ejecutan js",
    date: "2020-01-02",
    important: false
  },
  {
    id: 3,
    content: "Estamos cursando ReactJS",
    date: "2020-03-23",
    important: true
  }
];

const courses = [
  {
    name: "Half Stack application development",
    id: 1,
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3
      },
      {
        name: "Redux",
        exercises: 11,
        id: 4
      }
    ]
  },
  {
    name: "Node.js",
    id: 2,
    parts: [
      {
        name: "Routing",
        exercises: 3,
        id: 1
      },
      {
        name: "Middlewares",
        exercises: 7,
        id: 2
      }
    ]
  }
];

export default function App() {
  return (
    <div className="App">
      {/* <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2> */}
      {/* <Hola name="Giorgia" age="20"></Hola> */}
      {/* <Hola age="20"></Hola> */}
      {/* <Counter></Counter> */}
      {/* prop y variable{notes} */}
      {/* <Notas notes={notes}></Notas> */}
      {/* <Cursos courses={courses} /> */}
      {/* <Condicional totalMessages={10} /> */}
      {/* <Condicional2 estado={"L"} /> */}
      {/* <Telefonia /> */}
      {/* <Asincrono /> */}
      <Rest />
    </div>
  );
}
