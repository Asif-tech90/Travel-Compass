import React, { useState } from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
import {
  Formcontrol,
  SelectEmpty,
  Loading,
  Container,
  MarginBottom,
  ListStyle,
} from "./styles"; // Import the styled components
import PlaceDetails from "../../components/PlaceDetails/PlaceDetails";

const List = ({ places }) => {

  // places obj hold the current scrolled places.
  const [type, setType] = useState("restaurant");
  const [rating, setRating] = useState("");
  return (
    <div className={Container}>
      <Typography variant="h4">
        Restaurants, Hotels and attractions around you
      </Typography>
      <FormControl className={Formcontrol}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value="restaurant">Restaurants</MenuItem>
          <MenuItem value="hotels">hotels</MenuItem>
          <MenuItem value="attractions">attractions</MenuItem>
        </Select>
        <Select value={rating} onChange={(e) => setRating(e.target.value)}>
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="3.0">above 3</MenuItem>
          <MenuItem value="4">above 4</MenuItem>
          <MenuItem value="4.5">above 4.5</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={2}>
        {places.map((place, index) => (
          // mapping over places by GOOGLE MAPS
          <Grid className="" item key={index} xs={12}>
            <PlaceDetails place={place} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default List;
