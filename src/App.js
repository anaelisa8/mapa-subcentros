import React from "react";
import Districts from "./Districts";
import Deck from "./deck";
import Chart from './BarChart';

function App() {
  return (
    <div className="app">
      <div className="body">
        <Districts/>
        <div id="foo">
          <table class="topazCells">
            <tbody>
              <tr>
                <td id="tdTop">Tipología de Subcentros</td>
              </tr>
              <tr>
                <td id="td0">Tipo 1: Enfoque adicional en mantenimiento, servicios educativos y ferreterías</td>
              </tr>
              <tr>
                <td id="td1">Tipo 2: Enfoque adicional en servicios profesionales y esparcimiento</td>
              </tr>
              <tr>
                <td id="td2">Tipo 3: Actividades financieras</td>
              </tr>
              <tr>
                <td id="td4">Tipo 4: Reparación y mantenimiento de equipo y maquinaría</td>
              </tr>
              <tr>
                <td id="td5">Tipo 5: Enfoque adicional en tiendas de ropa, calzado, esparcimiento</td>
              </tr>
              <tr>
                <td id="td7">Tipo 6: Taller y refacciones para el sector automotriz</td>
              </tr>
              <tr>
                <td id="td9">Tipo 7: Reparación y mantenimiento. Actividades áreas agropecuarias y forestales</td>
              </tr>
              <tr>
                <td id="td11">Tipo 8: Servicios médicos y actividad científica</td>
              </tr>
              <tr>
                <td id="td12">Tipo 9: Enfoque en ropa y calzado, esparcimeinto y servicios profesionales</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
