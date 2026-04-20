import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import pokemons from "./assets/pokemons.json";
import App from "./App.jsx";

const types = [
  "All",
  "Bug",
  "Dark",
  "Dragon",
  "Electric",
  "Fairy",
  "Fighting",
  "Fire",
  "Flying",
  "Ghost",
  "Grass",
  "Ground",
  "Ice",
  "Normal",
  "Poison",
  "Psychic",
  "Rock",
  "Steel",
  "Water",
];

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App pokemons={pokemons} types={types} />
  </StrictMode>,
);
