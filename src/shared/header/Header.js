import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";

import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import SettingsIcon from "@material-ui/icons/Settings";

const Header = (props) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Link to="/">
          <Typography
            style={{
              flexGrow: 1,
            }}
            variant="h6"
          >
            <span role="img" aria-label="popcorn!">
              🥤🎥🎞
            </span>
            Movie List W4 🥤🎥🎞
          </Typography>
        </Link>
        {props.user && <span>{props.user.userName}</span>}
        {props.user && (
          <span>
            <IconButton color="inherit">
              <SettingsIcon />
              <Link to="/settings"> </Link>
            </IconButton>
            <Button onClick={props.onLogout} color="inherit">
              Logout
            </Button>
          </span>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
