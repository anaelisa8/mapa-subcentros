import React from "react";
import "./LegendChart.css";

const LegendChart = () => {
  return (
    <div class="wrapper">
      <div class="table">
        <div class="row header">
          <div class="cell">#</div>
          <div class="cell">Tipología de Subcentros</div>
        </div>

        <div class="row" id="td0">
          <div class="cell" data-title="#">
            1
          </div>
          <div class="cell" data-title="Subcentro">
            Enfoque adicional en mantenimiento, servicios educativos y
            ferreterías
          </div>
        </div>

        <div class="row" id="td1">
          <div class="cell" data-title="#">
            2
          </div>
          <div class="cell" data-title="Subcentro">
            Enfoque adicional en servicios profesionales y esparcimiento
          </div>
        </div>

        <div class="row" id="td2">
          <div class="cell" data-title="#">
            3
          </div>
          <div class="cell" data-title="Subcentro">
            Actividades financieras
          </div>
        </div>

        <div class="row" id="td4">
          <div class="cell" data-title="#">
            4
          </div>
          <div class="cell" data-title="Subcentro">
            Reparación y mantenimiento de equipo y maquinaría
          </div>
        </div>

        <div class="row" id="td5">
          <div class="cell" data-title="#">
            5
          </div>
          <div class="cell" data-title="Subcentro">
            Enfoque adicional en tiendas de ropa, calzado, esparcimiento
          </div>
        </div>

         <div class="row" id="td7">
          <div class="cell" data-title="#">
            6
          </div>
          <div class="cell" data-title="Subcentro">
            Taller y refacciones para el sector automotriz
          </div>
        </div>

        <div class="row" id="td9">
          <div class="cell" data-title="#">
            7
          </div>
          <div class="cell" data-title="Subcentro">
            Reparación y mantenimiento. Actividades áreas agropecuarias y
            forestales
          </div>
        </div>

        <div class="row" id="td11">
          <div class="cell" data-title="#">
            8
          </div>
          <div class="cell" data-title="Subcentro">
            Servicios médicos y actividad científica
          </div>
        </div>

        <div class="row" id="td12">
          <div class="cell" data-title="#">
            9
          </div>
          <div class="cell" data-title="Subcentro">
            Enfoque en ropa y calzado, esparcimeinto y servicios profesionales
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegendChart;
