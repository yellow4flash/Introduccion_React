import React from "react";
// <Course key={course.parts.id} course={course.parts} />
// const Parts = (props) => {
//   const { Parts } = props;
//   return (
//     <ul>
//       {/* {Parts.parts.map((part)=>{
//       return <li key={part.id}>{part.exercises}</li>
//     })
//     }
//     <Course key={course.id} course={course} /> */}
//     </ul>
//   );
// };
/* const Course = (props) => {
  const { course } = props;
  return (
    <li key={course.id}>
      {course.name}{" "}
      <p>
         Suma Total: <Parts /> 
      </p>
    </li>
  );
}; */
const Courses = (props) => {
  // let course = props.courses;
  const { courses } = props;

  return (
    <div>
      <h1>Cursos</h1>
      <ul>
        {courses.map((course) => {
          // console.log("course", course);

          const { name, id, parts } = course;
          let totalExercises = 0;
          return (
            <div key={id}>
              <h1>{name}</h1>
              <ul>
                {parts.map((part) => {
                  // console.log(part);
                  const { name, exercises, id } = part;
                  totalExercises += exercises;
                  return (
                    <li key={id}>
                      {name}, Ejercicios: {exercises}
                    </li>
                  );
                })}
                <p>
                  <b>Total de Ejercicios: {totalExercises}</b>
                </p>
              </ul>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
export default Courses;
