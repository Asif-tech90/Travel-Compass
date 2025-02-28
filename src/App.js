import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import MapComponent from "./components/Map/MapComponent";
import { CssBaseline, Grid } from "@mui/material";
import { getPlacesData } from "./api";
import { debounce } from "lodash";
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

  // App.js (CORRECTED)
  useEffect(() => {
    const debouncedFetch = debounce(async () => {
      if (bounds) {
        const data = await getPlacesData(bounds.sw, bounds.ne);
        setPlaces(data);
      }
    }, 1000); // 1-second debounce

    debouncedFetch();

    // Cleanup: Cancel pending debounce on unmount/dependency change
    return () => debouncedFetch.cancel();
  }, [coordinates, bounds]); // Only run when bounds change
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
          <MapComponent
            coordinates={coordinates}
            setCoordinates={setCoordinates}
            bounds={bounds}
            setBounds={setBounds}
            places={places}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
