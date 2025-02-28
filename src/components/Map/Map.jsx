import React from "react";
import GoogleMapReact from "google-map-react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Rating from "@mui/material/Rating";
import { StyledPaper, MapContainer, MarkerContainer, Pointer } from "./styles"; // Import styled components
import { LocationOnOutlined } from "@mui/icons-material";
// coordinates passed as props
const Map = ({ coordinates, setCoordinates, setBounds, places }) => {
  console.log(places, "places");
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <>
      <MapContainer>
        {/*  comp from the google maps  */}
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
          defaultCenter={coordinates}
          defaultZoom={14}
          center={coordinates}
          margin={[50, 50, 50, 50]}
          // dynamically update the map by using mouse, onMouseChange event is there,
          // coordinates are set here
          // same is for bounds.
          onChange={(e) => {
            setCoordinates({ lat: e.center.lat, lng: e.center.lng });
            setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
          }}
          onChildClick={""}
          options={""}
        >
          {/* {places &&
            places.length > 0 &&
            places.map((place, i) => (
              <div
                key={i}
                lat={Number(place.latitude)}
                lng={Number(place.longitude)}
              >
                {isMobile ? (
                  <LocationOnOutlined color="primary" />
                ) : (
                  <Paper elevation={3}>
                    <Typography variant="subtitle2">{place.name}</Typography>
                    <img
                      alt={place.name}
                      src="https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
                    />
                  </Paper>
                )}
              </div>
            ))} */}
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
