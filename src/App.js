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
              <td id="tdTop">Tipo</td>
                <td id="tdTop">Tipología de Subcentros</td>
              </tr>
              <tr>
                <td id="td0">1</td>
                <td id="td0">Enfoque adicional en mantenimiento, servicios educativos y ferreterías</td>
              </tr>
              <tr>
              <td id="td1">2</td>
                <td id="td1">Enfoque adicional en servicios profesionales y esparcimiento</td>
              </tr>
              <tr>
              <td id="td2">3</td>
                <td id="td2">Actividades financieras</td>
              </tr>
              <tr>
              <td id="td4">4</td>
                <td id="td4">Reparación y mantenimiento de equipo y maquinaría</td>
              </tr>
              <tr>
              <td id="td5">5</td>
                <td id="td5">Enfoque adicional en tiendas de ropa, calzado, esparcimiento</td>
              </tr>
              <tr>
              <td id="td7">6</td>
                <td id="td7">Taller y refacciones para el sector automotriz</td>
              </tr>
              <tr>
              <td id="td9">7</td>
                <td id="td9">Reparación y mantenimiento. Actividades áreas agropecuarias y forestales</td>
              </tr>
              <tr>
              <td id="td11">8</td>
                <td id="td11">Servicios médicos y actividad científica</td>
              </tr>
              <tr>
              <td id="td12">9</td>
                <td id="td12">Enfoque en ropa y calzado, esparcimeinto y servicios profesionales</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
