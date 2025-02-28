import React, { useCallback } from "react";
import GoogleMapReact from "google-map-react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Rating from "@mui/material/Rating";
import { StyledPaper, MapContainer, MarkerContainer, Pointer } from "./styles"; // Import styled components
import { LocationOnOutlined } from "@mui/icons-material";
import { throttle } from "lodash";
// coordinates passed as props
const Map = ({ coordinates, setCoordinates, setBounds, places }) => {
  console.log(places.longitude, "places");
  const isMobile = useMediaQuery("(max-width:600px)");
  const throttledChange = useCallback(
    throttle((e) => {
      setCoordinates({ lat: e.center.lat, lng: e.center.lng });
      setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
    }, 500),
    []
  ); // 500ms throttle
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
          onChange={throttledChange}
          onChildClick={""}
          options={""}
        >
          {places &&
            places.length > 0 &&
            places?.map((place, i) => {
              return (
                <div
                  key={i}
                  lat={Number(place?.latitude)}
                  lng={Number(place?.longitude)}
                  style={{
                    position: "absolute", // Required for Google Maps markers
                    transform: "translate(-50%, -50%)", // Center the marker
                  }}
                >
                  {isMobile ? (
                    <LocationOnOutlined color="primary" fontSize="large" />
                  ) : (
                    <Paper
                      elevation={3}
                      style={{ padding: "8px", textAlign: "center" }}
                    >
                      <Typography variant="subtitle2" gutterBottom>
                        {place.name}
                      </Typography>
                      <img
                        alt={place.name}
                        src={
                          place.photo?.images?.small?.url ||
                          "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
                        }
                        style={{ width: "100px", height: "auto" }}
                      />
                    </Paper>
                  )}
                </div>
              );
            })}
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
