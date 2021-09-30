import React from 'react';
import Districts from "./Districts";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Mapa subcentros</h1>
      </header>
      <div className="body">
        <Districts />
      </div>
    </div>
  );
}

export default App;
