//import React from "react";
import React from 'react'
import { render } from "react-dom";
import { StaticMap, MapContext, NavigationControl } from "react-map-gl";
import DeckGL, { GeoJsonLayer, ArcLayer } from "deck.gl";
import subcentros from "./data/mn/subcentros.geojson";
import Chart from './BarChart';

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

//const [districtData, setDistrictData] = useState([])
//const [selectedDistrict, setSelectedDistrict] = useState(1)

const MAP_STYLE = "mapbox://styles/roponmx/ckurkdr0m0fsc14mmn09vxy0f";
//const MAP_STYLE = "mapbox://styles/fabianlozano/ckuooic4hc7nc19nykjkpnmxa";
const NAV_CONTROL_STYLE = {
  position: "absolute",
  top: 10,
  left: 10,
};

/*const setUpData = (f) => {
  let _districtData = []
  f.properties.map(feature =>{
    if(feature.properties.TOPIC_0 > 0){
      _districtData.push({
        "id": "TOPIC_0",
        "label": "TOPIC_0",
        "value": feature.properties.TOPIC_0,
        "color": "hsl(8, 76%, 43%)"
      })
    }
    if(feature.properties.TOPIC_2 > 0){
      _districtData.push({
        "id": "TOPIC_2",
        "label": "TOPIC_2",
        "value": feature.properties.TOPIC_2,
        "color": "hsl(8, 76%, 43%)"
      })
    }
    if(feature.properties.TOPIC_4 > 0){
      _districtData.push({
        "id": "TOPIC_4",
        "label": "TOPIC_4",
        "value": feature.properties.TOPIC_4,
        "color": "hsl(8, 76%, 43%)"
      })
    }
    if(feature.properties.TOPIC_5 > 0){
      _districtData.push({
        "id": "TOPIC_5",
        "label": "TOPIC_5",
        "value": feature.properties.TOPIC_5,
        "color": "hsl(8, 76%, 43%)"
      })
    }
    if(feature.properties.TOPIC_7 > 0){
      _districtData.push({
        "id": "TOPIC_7",
        "label": "TOPIC_7",
        "value": feature.properties.TOPIC_7,
        "color": "hsl(8, 76%, 43%)"
      })
    }
    if(feature.properties.TOPIC_9 > 0){
      _districtData.push({
        "id": "TOPIC_9",
        "label": "TOPIC_9",
        "value": feature.properties.TOPIC_9,
        "color": "hsl(8, 76%, 43%)"
      })
    }
    if(feature.properties.TOPIC_11 > 0){
      _districtData.push({
        "id": "TOPIC_11",
        "label": "TOPIC_11",
        "value": feature.properties.TOPIC_11,
        "color": "hsl(8, 76%, 43%)"
      })
    }
    if(feature.properties.TOPIC_12 > 0){
      _districtData.push({
        "id": "TOPIC_12",
        "label": "TOPIC_12",
        "value": feature.properties.TOPIC_12,
        "color": "hsl(8, 76%, 43%)"
      })
    }
  })
  setDistrictData(_districtData)
}
*/


function Deck() {

  //setUpData(selectedDistrict)

  function getTooltip({object}) {
    return (
      object && {
        html: `\
        <div> LBLS: ${object.properties.lbls} </div>
        <div>TÓPICO: ${object.properties.LDA}</div>
        `
      }
    );
  }

  const onClick = (info) => {
    //let _selectedDistrict = info.object.properties.lbls;
    if (info.object) {
      // eslint-disable-next-line
      alert(
        `${info.object.properties.lbls}
         ${info.object.properties.LDA}`
      );
    }
    //setUpData(_selectedDistrict);
    //setSelectedDistrict(_selectedDistrict);
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
      getTooltip={getTooltip}
    >
      <StaticMap
        mapStyle={MAP_STYLE}
        mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}
      />
      <NavigationControl style={NAV_CONTROL_STYLE} />
      <Chart/>
      {/*<Chart data={districtData}/>*/}
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
