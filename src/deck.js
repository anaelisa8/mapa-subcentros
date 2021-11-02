import React from "react";
import { render } from "react-dom";
import { StaticMap, MapContext, NavigationControl } from "react-map-gl";
import DeckGL, { GeoJsonLayer, ArcLayer } from "deck.gl";
import subcentros from "./data/mn/subcentros.geojson";

const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1Ijoicm9wb25teCIsImEiOiItdHp3VXpRIn0.A2Qc9VwwnFuoUdIjuPVS5A";

//const MAPBOX_ACCESS_TOKEN =
//"pk.eyJ1IjoiZmFiaWFubG96YW5vIiwiYSI6ImNrdXN2OHlqcjVqMjYycG1hbnNla281NGkifQ.z3NL0eixKxJtldk5kOmXTg";

const INITIAL_VIEW_STATE = {
  longitude: -100.3152586,
  latitude: 25.67,
  zoom: 12,
  pitch: 0,
  bearing: 0,
};

const MAP_STYLE = "mapbox://styles/roponmx/ckurkdr0m0fsc14mmn09vxy0f";
//const MAP_STYLE = "mapbox://styles/fabianlozano/ckuooic4hc7nc19nykjkpnmxa";
const NAV_CONTROL_STYLE = {
  position: "absolute",
  top: 10,
  left: 10,
};

function Deck() {
  const onClick = (info) => {
    if (info.object) {
      // eslint-disable-next-line
      alert(
        `${info.object.properties.name} (${info.object.properties.abbrev})`
      );
    }
  };

  const layers = [
    new GeoJsonLayer({
      id: "district-layer",
      data: subcentros,
      layout: {},
      // Styles
      filled: true,
      pointRadiusMinPixels: 2,
      pointRadiusScale: 2000,
      getPointRadius: (f) => 11 - f.properties.scalerank,
      //getFillColor: [200, 0, 80, 180],
      getFillColor: (f) => {
        if (f.properties.LDA === "Topic_0") return [29, 92, 57];
        if (f.properties.LDA === "Topic_2") return [225, 231, 102];
        if (f.properties.LDA === "Topic_4") return [11, 84, 139];
        if (f.properties.LDA === "Topic_5") return [152, 229, 216];
        if (f.properties.LDA === "Topic_7") return [192, 21, 162];
        if (f.properties.LDA === "Topic_9") return [0, 151, 205];
        if (f.properties.LDA === "Topic_11") return [244, 49, 62];
        if (f.properties.LDA === "Topic_12") return [253, 130, 4];
      },
      opacity: 0.3,
      // Interactive props
      pickable: true,
      autoHighlight: true,
      onClick,
    }),
  ];

  return (
    <DeckGL
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
      layers={layers}
      ContextProvider={MapContext.Provider}
    >
      <StaticMap
        mapStyle={MAP_STYLE}
        mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}
      />
      <NavigationControl style={NAV_CONTROL_STYLE} />
    </DeckGL>
  );
}

export default Deck;

/* 
Tópico 0: Centro comercial e industrial 
Tópico 2: Centro financiero y comercial 
Tópico 4: Centro industrial y comercial
Tópico 5: Centro de comercio al por menor
Tópico 7: Centro de refracciones y gubernamental 
Tópico 9: Centro industrial y de refracciones
Tópico 11 Centro médico, educativo y financiero
Tópico 12: Centro comercial y educativo 

Pendiente:
-Colores de cada tópico
-Añadir la leyenda de los tópicos
-Que el mapa no haga tanto zoom
*/
