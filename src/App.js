import React from "react";
import Step from "./components/Step";

const stepsConfig = [
  {
    nombre: "correo",
    index: 1,
    title: "Correo",
    text: "¡Vacía tu bandeja de entrada!",
    iconName: "envelope outline",
    start: 8,
    end: 9
  },
  {
    nombre: "papeleo1",
    index: 2,
    title: "Papeleo",
    text: "A currar un poquito",
    inconName: "file alternate outline",
    start: 9,
    end: 11
  },
  {
    nombre: "lamadas",
    index: 3,
    title: "Llamadas",
    text: "Atiende todas las llamadas",
    iconName: "phone",
    start: 11,
    end: 12
  },
  {
    nombre: "descanso",
    index: 4,
    title: "Descansito",
    text: "Tomate un descanso",
    iconName: "coffee",
    start: 12,
    end: 13
  },
  {
    nombre: "papeleo2",
    index: 5,
    title: "Papeleo",
    text: "Termina el trabajo que te queda",
    iconName: "envelope outline",
    start: 13,
    end: 14
  }
];

const App = () => {
  return (
    <div className="ui vertical steps">
      <Step items={stepsConfig} />
    </div>
  );
};
export default App;
