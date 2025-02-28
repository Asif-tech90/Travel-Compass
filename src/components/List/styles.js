import { styled } from "@mui/material/styles";

// Styled components
export const Formcontrol = styled("div")(({ theme }) => ({
  margin: theme.spacing(1),
  minWidth: 120,
  marginBottom: "30px",
}));

export const SelectEmpty = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

export const Loading = styled("div")(({ theme }) => ({
  height: "600px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const Container = styled("div")(({ theme }) => ({
  padding: "25px",
}));

export const MarginBottom = styled("div")(({ theme }) => ({
  marginBottom: "30px",
}));

export const ListStyle = styled("div")(({ theme }) => ({
  height: "75vh",
  overflow: "auto",
}));
