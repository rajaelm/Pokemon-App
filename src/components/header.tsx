import * as React from "react";

// importing material UI components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar className="toolbar" data-testid="toolbar">
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          className="title"
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
          data-testid="title"
        >
          POKEMON APP
        </Typography>
        <Button className="pokebutton" color="inherit">
          <img
            className="image"
            src="https://cdn-icons-png.flaticon.com/512/1408/1408927.png" alt="pokemon"
          />
        </Button>
      </Toolbar>
    </AppBar>
  );
}
