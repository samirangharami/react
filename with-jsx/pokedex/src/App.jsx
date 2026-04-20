import { useState } from "react";
import "./App.css";

const SidebarTypes = ({ type }) => (
  <button className={type.toLowerCase()}>{type}</button>
);

const Sidebar = ({ children, ...props }) => (
  <div className="sidebar" {...props}>
    {children}
  </div>
);

const Types = ({ pTypes }) => (
  <>
    {pTypes.map((type, id) => (
      <p key={id} className={`type-${type.toLowerCase()}`}>
        {type}
      </p>
    ))}
  </>
);

const Stats = ({ pStats }) => (
  <>
    {pStats.map((stat, id) => (
      <div key={id} className="stat">
        <h4>{stat.name}</h4>
        <p>{stat.value}</p>
      </div>
    ))}
  </>
);

const App = ({ pokemons, types }) => {
  const sidebarTypes = types.map((type) => (
    <SidebarTypes type={type} key={type.toLowerCase()} />
  ));
  const [currentType, setCurrentType] = useState("all");

  return (
    <div>
      <Sidebar
        onClick={(e) => {
          const button = e.target.closest("button");
          if (!button) return;
          setCurrentType(button.className);
        }}
      >
        {sidebarTypes}
      </Sidebar>
      <main>
        {pokemons
          .filter(
            (pokemon) =>
              currentType === "all" ||
              pokemon.types.some((type) => type.toLowerCase() === currentType),
          )
          .map((pokemon) => (
            <div className="card-container" key={pokemon.id}>
              <div className="card">
                <div className="image-container">
                  <img src={pokemon.image} alt={pokemon.name} />
                </div>
                <div className="name-types">
                  <h2>{pokemon.name}</h2>
                  <div className="types">
                    <Types pTypes={pokemon.types} />
                  </div>
                </div>
                <div className="stat-container">
                  <Stats pStats={pokemon.stats} />
                </div>
              </div>
            </div>
          ))}
      </main>
    </div>
  );
};

export default App;
