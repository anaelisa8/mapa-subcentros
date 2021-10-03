import React from "react";
import Districts from "./Districts";
import Deck from "./deck";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Mapa subcentros</h1>
      </header>
      <div className="body">
        <Deck />
      </div>
    </div>
  );
}

export default App;
