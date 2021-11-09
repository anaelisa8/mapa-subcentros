import React, { useState, useEffect, useRef } from "react";
import subcentros from "./data/mn/subcentros.geojson";
import mapboxgl from "mapbox-gl";
import Chart from './BarChart';

const Districts = ({ classes }) => {
//function Districts(props) {
  //Assign the Mapbox token from the environment variable set in .env
  mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY;
  //mapboxgl.accessToken = process.env.REACT_APP_MAP_BOX_API_KEY;

  const mapContainer = useRef(null);
  /*
    const [long, setLong] = useState(-94.503809);
    const [lat, setLat] = useState(46.443226);
    const [zoom, setZoom] = useState(4.5);
*/

const [long, setLong] = useState(-100.3152586);
const [lat, setLat] = useState(25.67);
const [zoom, setZoom] = useState(12);

const [districtData, setDistrictData] = useState([])
const [gobData, setGobData] = useState([])
//const [selectedDistrictName, setSelectedDistrictName] = useState(data[0].name)
const [selectedDistrict, setSelectedDistrict] = useState(40)
//const [selectedDistrict, _setSelectedDistrict] = useState(null)
const [hoveredDistrict, _setHoveredDistrict] = useState(null);
const hoveredDistrictRef = useRef(hoveredDistrict);
const selectedDistrictRef = useRef(selectedDistrict);
var mergedGeoJSON;
var prevSelectedMun = null;

const setHoveredDistrict = data => {
    hoveredDistrictRef.current = data;
    _setHoveredDistrict(data);
};

const [hoveredMunP, _setHoveredMunP] = useState(null);
const hoveredMunPRef = useRef(hoveredMunP);
const [selectedDistrictP, _setSelectedDistrictP] = useState(null);
const selectedDistrictPRef = useRef(selectedDistrictP);

var setHoveredMunP = data => {
  hoveredMunPRef.current = data;
    _setHoveredMunP(data);
};


var setSelectedDistrictP = data => {
  selectedDistrictPRef.current = data;
    _setSelectedDistrictP(data);
};

const [hoveredMunN, _setHoveredMunN] = useState(null);
const hoveredMunNRef = useRef(hoveredMunN);
const [selectedDistrictN, _setSelectedDistrictN] = useState('MONTERREY');
const selectedDistrictNRef = useRef(selectedDistrictN);

var setHoveredMunN = data => {
  hoveredMunNRef.current = data;
    _setHoveredMunN(data);
};


var setSelectedDistrictN = data => {
  selectedDistrictNRef.current = data;
    _setSelectedDistrictN(data);
};

const setupGeoJson = () => {
    console.log(subcentros)
}

const setUpData = (id) => {
  let _districtData = []
  _districtData.push({
    "TOPICO": "TOPIC_0",
    "TOPIC_0": Math.floor((Math.random()*10)+1),
    //"hot dogColor": "hsl(151, 97, 33)"
  })
  _districtData.push({
    "TOPICO": "TOPIC_2",
    "TOPIC_2": Math.floor((Math.random()*10)+1),
    //"burgerColor": "hsl(163, 70%, 50%)"
  })
  _districtData.push({
    "TOPICO": "TOPIC_4",
    "TOPIC_4": Math.floor((Math.random()*10)+1),
    //"sandwichColor": "hsl(62, 70%, 50%)"
  })
  _districtData.push({
    "TOPICO": "TOPIC_5",
    "TOPIC_5": Math.floor((Math.random()*10)+1),
    //"kebabColor": "hsl(185, 70%, 50%)"
  })
  _districtData.push({
    "TOPICO": "TOPIC_7",
    "TOPIC_7": Math.floor((Math.random()*10)+1),
    //"friesColor": "hsl(86, 70%, 50%)"
  })
  _districtData.push({
    "TOPICO": "TOPIC_9",
    "TOPIC_9": Math.floor((Math.random()*10)+1),
    //"friesColor": "hsl(86, 70%, 50%)"
  })
  _districtData.push({
    "TOPICO": "TOPIC_11",
    "TOPIC_11": Math.floor((Math.random()*10)+1),
    //"friesColor": "hsl(86, 70%, 50%)"
  })
  _districtData.push({
    "TOPICO": "TOPIC_12",
    "TOPIC_12": Math.floor((Math.random()*10)+1),
    //"friesColor": "hsl(86, 70%, 50%)"
  })
 console.log(_districtData)
 setDistrictData(_districtData)
}

//PIE CHART
  /*const setUpData = (id) => {
    let _districtData = []
    _districtData.push({
        "id": "PAN",
        "label": "PAN",
        "value": Math.floor((Math.random()*10)+1),
        "color": "rgb(0,0,255)"
    })
    _districtData.push({
        "id": "PRI",
        "label": "PRI",
        "value": Math.floor((Math.random()*10)+1),
        "color": "rgb(0,0,255)"
    })
    _districtData.push({
        "id": "PRD",
        "label": "PRD",
        "value": Math.floor((Math.random()*10)+1),
        "color": "rgb(0,0,255)"
    })
    _districtData.push({
        "id": "MORENA",
        "label": "MORENA",
        "value": Math.floor((Math.random()*10)+1),
        "color": "rgb(0,0,255)"
    })
    _districtData.push({
        "id": "PT",
        "label": "PT",
        "value": Math.floor((Math.random()*10)+1),
        "color": "rgb(0,0,255)"
    })
    console.log(_districtData)
    setDistrictData(_districtData)
  }*/

  useEffect(() => {
    setupGeoJson()
    setUpData(selectedDistrict)

    let map = new mapboxgl.Map({
      container: mapContainer.current,
      //style: "mapbox://styles/mapbox/light-v10",
      style: "mapbox://styles/mapbox/light-v8",
      center: [long, lat],
      zoom: zoom,
    });

    // Add zoom and rotation controls to the map.
    map.addControl(new mapboxgl.NavigationControl());

    map.once("load", function () {
      map.addSource("district-source", {
        'type': "geojson",
        'data': subcentros,
      });

      map.addLayer({
        'id': "district-layer",
        'type': "fill",
        'source': "district-source",
        'layout': {},
        'paint': {
          "fill-color": [
            "match",
            ["get", "LDA"],
            "Topic_0",
            "#1d5c39",
            "Topic_2",
            "#e1e766",
            "Topic_4",
            "#0b548b",
            "Topic_5",
            "#98e5d8",
            "Topic_7",
            "#c015a2",
            "Topic_9",
            "#0097cd",
            "Topic_11",
            "#f4313e",
            "Topic_12",
            "#fd8204",
            /* other */ "#ffffff",
          ],
          "fill-opacity": [
            "case",
            ["boolean", ["feature-state", "hover"], false],
            0.8,
            0.55,
          ],
        },
      });

      map.on('mousemove', 'district-layer', function (e) {
        //map.getCanvas().style.cursor = 'pointer';
        if (e.features.length > 0) {
            if (hoveredDistrictRef.current && hoveredDistrictRef.current > -1 && selectedDistrictRef.current != hoveredDistrictRef.current) {

                map.setFeatureState(
                    { source: 'district-source', id: hoveredDistrictRef.current, name:hoveredMunNRef.current },
                    { party: hoveredMunPRef.current, hover: false }
                );
            }

          let _hoveredDistrict = e.features[0].id;
          let _hoveredMunN = e.features[0].properties.lbls;
          let _hoveredMunP = e.features[0].properties.LDA;

          map.setFeatureState(
            { source: "district-source", id: _hoveredDistrict, name: _hoveredMunN },
            { party: _hoveredMunP,hover: true }
          );

          setHoveredDistrict(_hoveredDistrict);
            setHoveredMunN(_hoveredMunN);
            setHoveredMunP(_hoveredMunP);
        }
      });

      // When the mouse leaves the state-fill layer, update the feature state of the
      // previously hovered feature.
      map.on("mouseleave", "district-layer", function () {
        if (hoveredDistrictRef.current && selectedDistrictRef.current != hoveredDistrictRef.current) {
          map.setFeatureState(
              { source: 'district-source', id: hoveredDistrictRef.current, name: hoveredMunNRef.current },
              { party: hoveredMunPRef.current,hover: false }
          );
      }
        setHoveredDistrict(null);
        setHoveredMunN(null);
        setHoveredMunP(null);
      });

      map.on("move", () => {
        const { lng, lat } = map.getCenter();

        setLong(lng.toFixed(4));
        setLat(lat.toFixed(4));
        setZoom(map.getZoom().toFixed(2));
      });

      map.on('click', 'district-layer', function (e) {
        if (e.features.length > 0) {
            if (selectedDistrictRef.current && selectedDistrictRef.current > -1) {
                map.setFeatureState(
                    { source: 'district-source', id: selectedDistrictRef.current , name:selectedDistrictNRef.current },
                    {party: selectedDistrictPRef.current, hover: false }
                );
                prevSelectedMun = selectedDistrictRef.current;
            }

        let _selectedDistrict = e.features[0].properties.lbls;
        let _selectedDistrictN = e.features[0].properties.lbls;
        let _selectedDistrictP = e.features[0].properties.LDA;
  
        map.setFeatureState(
          { source: 'district-source', id: _selectedDistrict, name: _selectedDistrictN},
          { party: _selectedDistrictP, hover: true }
      );
      
      setUpData(_selectedDistrict);
      //setUpDatos(_selectedDistrict);
      setSelectedDistrict(_selectedDistrict);
      setSelectedDistrictN(_selectedDistrictN);
      setSelectedDistrictP(_selectedDistrictP);
      }
    });


    });
  }, []);
  return (
    <div className="district-map-wrapper">
      <div className="info">
        lbls:{selectedDistrictN}
      </div>
      <div id="districtDetailMap" className="map">
        <div style={{ height: "100%", width: "100%"}} ref={mapContainer}></div>
      </div>
      <div style = {{height:"500px", width:"1000px", zindex: "5"}}>
      {districtData.length !== 0 && (
          <Chart data={districtData}/>
          )}
      </div>
    </div>
  );
}

export default Districts;
