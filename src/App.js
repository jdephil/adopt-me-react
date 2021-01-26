import React from 'react'
import { render } from 'react-dom'
import Pet from './Pet';

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "PizzaPie",
      animal: "Cat",
      breed: "Scottish Fold",
    }),
    React.createElement(Pet, {
      name: "MuMu",
      animal: "Cat",
      breed: "Scottish Fold",
    }),
    React.createElement(Pet, {
      name: "Porter",
      animal: "Dog",
      breed: "Schnoodle",
    }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
