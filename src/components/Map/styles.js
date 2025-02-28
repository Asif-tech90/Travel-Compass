import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

export const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "100px",
}));

export const MapContainer = styled("div")(({ theme }) => ({
  height: "85vh",
  width: "100%",
}));

export const MarkerContainer = styled("div")(({ theme }) => ({
  position: "absolute",
  transform: "translate(-50%, -50%)",
  zIndex: 1,
  "&:hover": { zIndex: 2 },
}));

export const Pointer = styled("div")(({ theme }) => ({
  cursor: "pointer",
}));
