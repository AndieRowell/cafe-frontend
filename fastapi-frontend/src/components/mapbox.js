import React from "react";
import { useState } from "react";
import Map from "react-map-gl";

function MapBox() {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 11,
  });

  return (
    <Map
      mapStyle="mapbox://styles/arowell/clq1o8o8z013r01p49ulm9ul6"
      mapboxAccessToken={process.env.mapbox_key}
      {...viewport}
      // spread operator - opening up
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    ></Map>
  );
}

export default MapBox;

//store access token as an environment variable
//put in next js config file
