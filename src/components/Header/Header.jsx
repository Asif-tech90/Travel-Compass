import React from "react";
import { AppBar, Toolbar, Typography, Box, InputBase } from "@mui/material";
import { Autocomplete } from "@react-google-maps/api";
import SearchIcon from "@mui/icons-material/Search";
import { Title, Search, SearchIconWrapper, StyledInputBase } from "./styles";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Title variant="h6">Travel Compass</Title>

        <Box
          display="flex"
          alignItems="center"
          flexGrow={1}
          justifyContent="flex-end"
        >
          <Typography
            variant="h6"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Explore New Places
          </Typography>
          {/* <Autocomplete> */}
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          {/* </Autocomplete> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
