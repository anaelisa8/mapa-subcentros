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
        <div id="foo">
          
          <table class="topazCells">
            <tbody>
              <tr>
                <td>#</td>
                <td>Tópico</td>
              </tr>
              <tr>
                <td>Tópico 0:</td>
                <td>Centro comercial e industrial</td>
              </tr>
              <tr>
                <td>Tópico 2:</td>
                <td>Centro financiero y comercial</td>
              </tr>
              <tr>
                <td>Tópico 4:</td>
                <td>Centro industrial y comercial</td>
              </tr>
              <tr>
                <td>Tópico 5:</td>
                <td>Centro de comercio al por menor</td>
              </tr>
              <tr>
                <td>Tópico 7:</td>
                <td>Centro de refracciones y gubernamental</td>
              </tr>
              <tr>
                <td>Tópico 9:</td>
                <td>Centro industrial y de refracciones</td>
              </tr>
              <tr>
                <td>Tópico 11:</td>
                <td>Centro médico, educativo y financiero</td>
              </tr>
              <tr>
                <td>Tópico 12:</td>
                <td>Centro comercial y educativo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
