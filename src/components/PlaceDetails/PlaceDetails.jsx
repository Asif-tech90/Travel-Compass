import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  styled,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn"; // Corrected import
import PhoneIcon from "@mui/icons-material/Phone"; // Corrected import
import Rating from "@mui/material/Rating"; // Corrected import
import { Height } from "@mui/icons-material";

// Styled components
const Chip = styled("div")(({ theme }) => ({
  margin: "5px 5px 5px 0",
}));

const Subtitle = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: "10px",
}));

const Spacing = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

const PlaceDetails = ({ place }) => {
  console.log(place, "one place");

  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 350 }}
        title={place.name}
        image={
          place.photo
            ? place.photo.images.large.url
            : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
        }
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {place.name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PlaceDetails;
