import React from "react";
import Districts from "./Districts";
import Deck from "./deck";

function App() {
  return (
    <div className="app">
      <div className="body">
        <Deck />
        <div id="foo">
          <table class="topazCells">
            <tbody>
              <tr>
                <td id="tdTop">Subcentros</td>
              </tr>
              <tr>
                <td id="td0">comercial e industrial</td>
              </tr>
              <tr>
                <td id="td2">financiero y comercial</td>
              </tr>
              <tr>
                <td id="td4">industrial y comercial</td>
              </tr>
              <tr>
                <td id="td5">comercio al por menor</td>
              </tr>
              <tr>
                <td id="td7">refracciones y gubernamental</td>
              </tr>
              <tr>
                <td id="td9">industrial y de refracciones</td>
              </tr>
              <tr>
                <td id="td11">médico, educativo y financiero</td>
              </tr>
              <tr>
                <td id="td12">comercial y educativo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
