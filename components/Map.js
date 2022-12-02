import React, { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib";

const Map = ({ searchResults }) => {
  const [selectedLocation, setSelectedLocation] = useState({});

  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);

  const [viewport, setViewport] = React.useState({
    latitude: center.latitude,
    longitude: center.longitude,
    width: "100%",
    height: "100%",
    zoom: 11,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/bawantha98/clb6ldg1f001w14p5rqdl4owm"
      mapboxAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              role="img"
              onClick={() => setSelectedLocation(result)}
              className="curson-pointer text-2xl animate-bounce"
              aria-label="push-pin"
            >
              📌
            </p>
          </Marker>

          {selectedLocation.long === result.long ? (
            <>
              <Popup
                closeOnClick={true}
                onClose={() => setSelectedLocation({})}
                latitude={result.lat}
                longitude={result.long}
              >
                {result.title}
              </Popup>
            </>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
};

export default Map;
