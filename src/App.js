import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import { CssBaseline, Grid } from "@mui/material";
import { getPlacesData } from "./api";
function App() {
  const [places, setPlaces] = useState([]);
  // states passed down to maps, based on these the coord obj the state updates and the UI re redners
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
  // they show sout west and nort east
  const [bounds, setBounds] = useState(null);

  // this is where we get the user current location, these methods are proided by the browser it self.
  useEffect(() => {
    // navigator obj contains the current user info geolocation for instance
    navigator.geolocation.getCurrentPosition(
      // initially setting the coord to the current user location
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);
  useEffect(() => {
    //any change in the coord will re render everything.
    if (bounds) {
      getPlacesData(bounds.sw, bounds.ne).then((data) => {
        console.log(coordinates);
        console.log(bounds);
        setPlaces(data);
      });
    }
  }, [coordinates, bounds]);
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List places={places} />
        </Grid>
        <Grid item xs={12} md={8}>
          {/* the comp that renders the map, state is passed from app  */}
          <Map
            coordinates={coordinates}
            setCoordinates={setCoordinates}
            bounds={bounds}
            setBounds={setBounds}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
