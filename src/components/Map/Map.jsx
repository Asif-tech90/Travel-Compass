import React from "react";
import GoogleMapReact from "google-map-react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Typography } from "@mui/material";
import Rating from "@mui/material/Rating";
import { StyledPaper, MapContainer, MarkerContainer, Pointer } from "./styles"; // Import styled components

const Map = ({ coordinates, setCoordinates, setBounds }) => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <>
      <MapContainer>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCqN3rCyuzxYULQF5uoODorHfVjp0BGGg0" }}
          defaultCenter={coordinates}
          defaultZoom={14}
          center={coordinates}
          margin={[50, 50, 50, 50]}
          onChange={(e) => {
            setCoordinates({ lat: e.center.lat, lng: e.center.lng });
            setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
          }}
          onChildClick={""}
          options={""}
        >
          {/* Example Marker */}
          <MarkerContainer>
            <Pointer>
              <StyledPaper elevation={3}>
                <Typography variant="subtitle2">San Francisco</Typography>
                <Rating name="read-only" value={4.5} precision={0.5} readOnly />
              </StyledPaper>
            </Pointer>
          </MarkerContainer>
        </GoogleMapReact>
      </MapContainer>
    </>
  );
};

export default Map;
