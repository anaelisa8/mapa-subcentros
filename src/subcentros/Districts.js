import React, { useState, useEffect, useRef } from "react";
import subcentros from "../data/subcentros.geojson";
import subcentros_csv from "../data/subcentros_csv2.csv";
import mapboxgl from "mapbox-gl";
import Chart from "./BarChart";
import * as d3 from "d3";
import { withStyles } from "@material-ui/core/styles";
import "../popup.css";
import LegendChart from "./Legend/LegendChart";

const Districts = ({ classes }) => {
  //function Districts(props) {
  //Assign the Mapbox token from the environment variable set in .env
  mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY;
  //mapboxgl.accessToken = process.env.REACT_APP_MAP_BOX_API_KEY;

  const mapContainer = useRef(null);

  const [long, setLong] = useState(-100.356971);
  const [lat, setLat] = useState(25.671262);
  const [zoom, setZoom] = useState(12);

  const [districtData, setDistrictData] = useState([]);
  const [gobData, setGobData] = useState([]);
  //const [selectedDistrictName, setSelectedDistrictName] = useState(data[0].name)
  const [selectedDistrict, setSelectedDistrict] = useState(1);
  //const [selectedDistrict, _setSelectedDistrict] = useState(null)
  const [hoveredDistrict, _setHoveredDistrict] = useState(null);
  const hoveredDistrictRef = useRef(hoveredDistrict);
  const selectedDistrictRef = useRef(selectedDistrict);
  var mergedGeoJSON;
  var prevSelectedMun = null;

  const setHoveredDistrict = (data) => {
    hoveredDistrictRef.current = data;
    _setHoveredDistrict(data);
  };

  const [hoveredMunP, _setHoveredMunP] = useState(null);
  const hoveredMunPRef = useRef(hoveredMunP);
  const [selectedDistrictP, _setSelectedDistrictP] = useState(
    "Composición de subcentros urbanos por tipo de diversidad de empleo"
  );
  const selectedDistrictPRef = useRef(selectedDistrictP);

  var setHoveredMunP = (data) => {
    hoveredMunPRef.current = data;
    _setHoveredMunP(data);
  };

  var setSelectedDistrictP = (data) => {
    selectedDistrictPRef.current = data;
    _setSelectedDistrictP(data);
  };

  const [hoveredMunN, _setHoveredMunN] = useState(null);
  const hoveredMunNRef = useRef(hoveredMunN);
  const [selectedDistrictN, _setSelectedDistrictN] = useState("MONTERREY");
  const selectedDistrictNRef = useRef(selectedDistrictN);

  var setHoveredMunN = (data) => {
    hoveredMunNRef.current = data;
    _setHoveredMunN(data);
  };

  var setSelectedDistrictN = (data) => {
    selectedDistrictNRef.current = data;
    _setSelectedDistrictN(data);
  };

  var loadFiles = [d3.json(subcentros), d3.csv(subcentros_csv)];

  const setUpData = (id) => {
    let _districtData = [];
    mergedGeoJSON.features.map((feature) => {
      if (feature.properties.lbls == id) {
        if (feature.properties.TOPIC_0 >= 0) {
          _districtData.push({
            TOPICO: "Tipo 1",
            "Tipo 1": feature.properties.TOPIC_0,
          });
        }
        if (feature.properties.TOPIC_1 >= 0) {
          _districtData.push({
            TOPICO: "Tipo 2",
            "Tipo 2": feature.properties.TOPIC_1,
          });
        }
        if (feature.properties.TOPIC_2 >= 0) {
          _districtData.push({
            TOPICO: "Tipo 3",
            "Tipo 3": feature.properties.TOPIC_2,
          });
        }
        if (feature.properties.TOPIC_4 >= 0) {
          _districtData.push({
            TOPICO: "Tipo 4",
            "Tipo 4": feature.properties.TOPIC_4,
          });
        }
        if (feature.properties.TOPIC_5 >= 0) {
          _districtData.push({
            TOPICO: "Tipo 5",
            "Tipo 5": feature.properties.TOPIC_5,
          });
        }
        if (feature.properties.TOPIC_7 >= 0) {
          _districtData.push({
            TOPICO: "Tipo 6",
            "Tipo 6": feature.properties.TOPIC_7,
          });
        }
        if (feature.properties.TOPIC_9 >= 0) {
          _districtData.push({
            TOPICO: "Tipo 7",
            "Tipo 7": feature.properties.TOPIC_9,
          });
        }
        if (feature.properties.TOPIC_11 >= 0) {
          _districtData.push({
            TOPICO: "Tipo 8",
            "Tipo 8": feature.properties.TOPIC_11,
          });
        }
        if (feature.properties.TOPIC_12 >= 0) {
          _districtData.push({
            TOPICO: "Tipo 9",
            "Tipo 9": feature.properties.TOPIC_12,
          });
        }
      }
    });

    setDistrictData(_districtData);
  };

  useEffect(() => {
    let map = new mapboxgl.Map({
      container: mapContainer.current,

      style: "mapbox://styles/mapbox/light-v8",
      center: [long, lat],
      zoom: zoom,
    });

    Promise.all(loadFiles).then(function (data) {
      data[0].features = data[0].features.map((feature) => {
        data[1].forEach((prefData) => {
          if (feature.properties.id === prefData["id"]) {
            feature.properties.TOPIC_0 = Number(prefData["TOPIC_0"]);
            feature.properties.TOPIC_2 = Number(prefData["TOPIC_2"]);
            feature.properties.TOPIC_4 = Number(prefData["TOPIC_4"]);
            feature.properties.TOPIC_5 = Number(prefData["TOPIC_5"]);
            feature.properties.TOPIC_7 = Number(prefData["TOPIC_7"]);
            feature.properties.TOPIC_9 = Number(prefData["TOPIC_9"]);
            feature.properties.TOPIC_11 = Number(prefData["TOPIC_11"]);
            feature.properties.TOPIC_12 = Number(prefData["TOPIC_12"]);
            feature.properties.TOPICO = String(prefData["TOPICO"]);
          }
        });
        return feature;
      });
      mergedGeoJSON = data[0];

      setUpData(selectedDistrict);

      map.addControl(new mapboxgl.NavigationControl());

      map.once("load", function () {
        map.addSource("district-source", {
          type: "geojson",
          data: subcentros,
        });

        map.addLayer({
          id: "district-layer",
          type: "fill",
          source: "district-source",
          layout: {},
          paint: {
            "fill-color": [
              "match",
              ["get", "LDA"],
              "Topic_0",
              "#1d5c39",
              "Topic_1",
              "#e1e766",
              "Topic_2",
              "#f05097",
              "Topic_4",
              "#0b548b",
              "Topic_5",
              "#98e5d8",
              "Topic_7",
              "#702276",
              "Topic_9",
              "#0097cd",
              "Topic_11",
              "#f4313e",
              "Topic_12",
              "#fd8204",
              "#ffffff",
            ],
            "fill-opacity": [
              "case",
              ["boolean", ["feature-state", "hover"], false],
              0.9,
              0.63,
            ],
          },
        });

        var popup = new mapboxgl.Popup({
          closeButton: false,
          closeOnClick: false,
          className: "myPopup",
        });

        map.on("mousemove", "district-layer", function (e) {
          if (e.features.length > 0) {
            if (
              hoveredDistrictRef.current &&
              hoveredDistrictRef.current > -1 &&
              selectedDistrictRef.current != hoveredDistrictRef.current
            ) {
              map.setFeatureState(
                {
                  source: "district-source",
                  id: hoveredDistrictRef.current,
                  name: hoveredMunNRef.current,
                },
                { party: hoveredMunPRef.current, hover: false }
              );
            }

            let _hoveredDistrict = e.features[0].id;
            let _hoveredMunN = e.features[0].properties.Empleos;
            let _hoveredMunP = e.features[0].properties.Descripcion;

            var content = "<b>" + "Subcentro Urbano" + "</b>" + "<br>";
            content +=
              "<u>" + "Nº de empleos: " + "</u>" + _hoveredMunN + "<br>";
            content +=
              "<u>" +
              "Subcentro predominante: " +
              "</u>" +
              _hoveredMunP +
              "<br>";
            popup.setLngLat(e.lngLat).setHTML(content).addTo(map);

            map.setFeatureState(
              {
                source: "district-source",
                id: _hoveredDistrict,
                name: _hoveredMunN,
              },
              { party: _hoveredMunP, hover: true }
            );

            setHoveredDistrict(_hoveredDistrict);
            setHoveredMunN(_hoveredMunN);
            setHoveredMunP(_hoveredMunP);
          }
        });
        map.on("mouseleave", "district-layer", function () {
          if (
            hoveredDistrictRef.current &&
            selectedDistrictRef.current != hoveredDistrictRef.current
          ) {
            map.setFeatureState(
              {
                source: "district-source",
                id: hoveredDistrictRef.current,
                name: hoveredMunNRef.current,
              },
              { party: hoveredMunPRef.current, hover: false }
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

        map.on("click", "district-layer", function (e) {
          if (e.features.length > 0) {
            if (
              selectedDistrictRef.current &&
              selectedDistrictRef.current > -1
            ) {
              map.setFeatureState(
                {
                  source: "district-source",
                  id: selectedDistrictRef.current,
                  name: selectedDistrictNRef.current,
                },
                { party: selectedDistrictPRef.current, hover: false }
              );
              prevSelectedMun = selectedDistrictRef.current;
            }

            let _selectedDistrict = e.features[0].properties.lbls;
            let _selectedDistrictN = e.features[0].properties.Empleos;
            let _selectedDistrictP = e.features[0].properties.Descripcion;

            var content = "<b>" + "Subcentro Urbano" + "</b>" + "<br>";
            content +=
              "<u>" + "Nº de empleos: " + "</u>" + _selectedDistrictN + "<br>";
            content +=
              "<u>" +
              "Subcentro predominante: " +
              "</u>" +
              _selectedDistrictP +
              "<br>";
            popup.setLngLat(e.lngLat).setHTML(content).addTo(map);

            map.setFeatureState(
              {
                source: "district-source",
                id: _selectedDistrict,
                name: _selectedDistrictN,
              },
              { party: _selectedDistrictP, hover: true }
            );

            setUpData(_selectedDistrict);

            setSelectedDistrict(_selectedDistrict);
            setSelectedDistrictN(_selectedDistrictN);
            setSelectedDistrictP(_selectedDistrictP);
          }
        });
      });
    });
  }, []);
  return (
    <div className="district-map-wrapper">
      <div className="info">{/*lbls:{selectedDistrictN}*/}</div>
      <div id="districtDetailMap" className={classes.map}>
        <div
          style={{ height: "100vh", width: "100vw" }}
          ref={mapContainer}
        ></div>

        <div className={classes.chartContainer}>
          <h2 className={classes.districtTitle}>Tipo predominante: {selectedDistrictP}</h2>
          {districtData.length !== 0 && <Chart data={districtData} />}
        </div>
        <LegendChart />
      </div>
    </div>
  );
};

const styles = () => ({
  map: {
    height: "800px",
    width: "99vw",
  },
  chartContainer: {
    width: "35vw",
    height: "400px",
    minHeight: "400px",
    flex: 1,
    top: "-500px",
    position: "relative",
    background: "#E7E7E7",
  },
  districtTitle: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    paddingTop: "20px",
    paddingBottom: "-20px",
    color: "black",
  },
});

export default withStyles(styles)(Districts);
