import React from "react";
import { createRoot } from "react-dom";

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt me!"),
    React.createElement(Pet, {
      animal: "Dog",
      name: "Luna",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      animal: "Cat",
      name: "Giggleshitter",
      breed: "Ginger",
    }),
    React.createElement(Pet, {
      animal: "Parrot",
      name: "Larry",
      breed: "Parrotlet",
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(Ap