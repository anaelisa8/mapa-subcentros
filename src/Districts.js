import React, { useState, useEffect, useRef } from "react";
import subcentros from "./data/mn/subcentros.geojson";
import mapboxgl from 'mapbox-gl';

function Districts(props) {

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

    const [hoveredDistrict, _setHoveredDistrict] = useState(null);
    const hoveredDistrictRef = useRef(hoveredDistrict);

    const setHoveredDistrict = data => {
        hoveredDistrictRef.current = data;
        _setHoveredDistrict(data);
    };

    useEffect(() => {

        let map = new mapboxgl.Map({
            container: mapContainer.current,
            //style: "mapbox://styles/mapbox/light-v10",
            style: "mapbox://styles/mapbox/dark-v10",
            center: [long, lat],
            zoom: zoom
        });


        // Add zoom and rotation controls to the map.
        map.addControl(new mapboxgl.NavigationControl());

        map.once("load", function () {

            map.addSource('district-source', {
                'type': 'geojson',
                'data': subcentros
            });

            map.addLayer({
                'id': 'district-layer',
                'type': 'fill',
                'source': 'district-source',
                'layout': {},
                'paint': {
                    'fill-color': [
                        'match',
                        ['get', 'LDA'],
                        'Topic_2',
                        '#5AA5D7',
                        'Topic_11',
                        '#02735E',
                        'Topic_0',
                        '#00E0EF',
                        'Topic_12',
                        '#84D0D9',
                        'Topic_7',
                        '#202359',
                        'Topic_4',
                        '#CE7529',
                        'Topic_9',
                        '#00AE6C',
                        'Topic_5',
                        '#0056A3',
                        /* other */ '#ffffff'
                    ],
                    'fill-opacity': [
                        'case',
                        ['boolean', ['feature-state', 'hover'], false],
                        .8,
                        0.5
                    ]
                }
            });

            map.on('mousemove', 'district-layer', function (e) {
                if (e.features.length > 0) {
                    if (hoveredDistrictRef.current && hoveredDistrictRef.current > -1) {

                        map.setFeatureState(
                            { source: 'district-source', id: hoveredDistrictRef.current },
                            { hover: false }
                        );
                    }

                    //let _hoveredDistrict = e.features[0].id;
                    let _hoveredDistrict = e.features[0].lbls;

                    map.setFeatureState(
                        { source: 'district-source', id: _hoveredDistrict },
                        { hover: true }
                    );

                    setHoveredDistrict(_hoveredDistrict);
                }

            });

            // When the mouse leaves the state-fill layer, update the feature state of the
            // previously hovered feature.
            map.on('mouseleave', 'district-layer', function () {
                if (hoveredDistrictRef.current) {
                    map.setFeatureState(
                        { source: 'district-source', id: hoveredDistrictRef.current },
                        { hover: false }
                    );
                }
                setHoveredDistrict(null);
            });

            map.on('move', () => {
                const { lng, lat } = map.getCenter();

                setLong(lng.toFixed(4));
                setLat(lat.toFixed(4));
                setZoom(map.getZoom().toFixed(2));
            });

        });

    }, []);

    return (
        <div className="district-map-wrapper">

            <div className="info">
               Current hovered district: <strong>{hoveredDistrict ? hoveredDistrict : ""}</strong> 
            </div>
            <div id="districtDetailMap" className="map">
                <div style={{ height: "100%" }} ref={mapContainer}>
                </div>
            </div>
        </div>
    );
}

export default Districts;