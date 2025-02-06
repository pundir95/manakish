import React from "react";
import { AdvancedMarker, APIProvider, Map } from "@vis.gl/react-google-maps";

const GoogleMap = ({height}) => {
  // const position = { lat: 30.6425, lng: 76.8173 };

  const lat = localStorage.getItem("latitude");
  const lng = localStorage.getItem("longitude");

  const position = { lat: lat ? Number(lat) : 30.6425, lng: lng ? Number(lng) : 76.8173 };

  return (
    <>
      <div style={{ width: "100%", height: height ? height : "250px" }}>
        <APIProvider apiKey={"AIzaSyDRb_BGMWY3XocACa_K976a0g6y-5QwkqU"}>
          <Map
            defaultCenter={position}
            defaultZoom={20}
            mapId="3a69014c8faa23da"
          >
            <AdvancedMarker position={position} />
          </Map>
        </APIProvider>
      </div>
    </>
  );
};

export default GoogleMap;
