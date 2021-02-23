import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Menu, Brightness4, Brightness7 } from "@material-ui/icons";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Tooltip,
  Button
} from "@material-ui/core";

import Store from "../app-context";
import NavDrawer from "./NavDrawer";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const NavBar = () => {
  const { state, dispatch } = useContext(Store);
  const [drawerOpened, setDrawerOpened] = useState(false);

  const classes = useStyles();
  let mode;

  const changeTheme = (mode) => {
    if (state.myTheme === "dark") {
      mode = "light";
    } else {
      mode = "dark";
    }
    dispatch({ type: "TOGGLE_THEME", payload: mode });
  };

  const ToggleButton = () => {
    if (state.myTheme === "dark") {
      return <Brightness7 />;
    } else {
      return <Brightness4 />;
    }
  };


  const toggleDrawer = booleanValue => () => {
    setDrawerOpened(booleanValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {/* this is menu button*/}
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <Menu />
          </IconButton>

      {/* this is header content */}
          <Typography variant="h6" className={classes.title}>
            MindMajix User Dashboard
          </Typography>

        {/* this is theme toggler */}
          <Tooltip title="Toggle light/dark theme">
            <IconButton color="inherit" onClick={() => changeTheme(mode)}>
              <ToggleButton />
            </IconButton>
          </Tooltip>
        <Button color="inherit" onClick={()=>dispatch({type:"LOGOUT"})}>{state.user===null?"login":"logout"}</Button>
        </Toolbar>
      </AppBar>
      <NavDrawer drawerOpened={drawerOpened} toggleDrawer={toggleDrawer} />
    </div>
  );
};
export default NavBar;
