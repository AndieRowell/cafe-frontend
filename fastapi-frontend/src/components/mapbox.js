import React from "react";
import { useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";

function MapBox({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState({});

  //search rersults object into latitude and longitude object
  //map goes and loops through an object
  const coordinates = searchResults.map((result) => ({
    longitude: result.longitude,
    latitude: result.latitude,
  }));

  const center = getCenter(coordinates);

  const [viewState, setViewState] = useState({
    // width: "100%",
    // height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  return (
    <Map
      mapStyle="mapbox://styles/arowell/clq1o8o8z013r01p49ulm9ul6"
      mapboxAccessToken={process.env.mapbox_key}
      {...viewState}
      // spread operator - opening up
      // onViewportChange={(nextViewport) => setViewport(nextViewport)}
      onMove={(evt) => setViewState(evt.viewState)}
    >
      {searchResults.map((result) => (
        <Marker
          key={result.longitude}
          longitude={result.longitude}
          latitude={result.latitude}
          // offsetLeft={-20}
          // offsetTop={-10}
        >
          <p
            onClick={() => setSelectedLocation(result)}
            className="cursor-pointer text-2xl animate-bounce"
          >
            📍
          </p>

          {selectedLocation.longitude === result.longitude && (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              latitude={result.latitude}
              longitude={result.longitude}
            >
              <div>
                <h2>{result.name}</h2>
                <p>{result.address}</p>
              </div>
            </Popup>
          )}
        </Marker>
      ))}
    </Map>
  );
}

export default MapBox;

//store access token as an environment variable
//put in next js config file
