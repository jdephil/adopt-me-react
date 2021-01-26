const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
};

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

ReactDOM.render(React.createElement(App), document.getElementById("root"));
