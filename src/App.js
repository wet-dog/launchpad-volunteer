import './App.css';

import React, { useState, useEffect, useRef } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import BusinessSignUp from './BusinessSignUp';
import UserSignUp from './UserSignUp';
import UserProfile from './UserProfile';

import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Popper from '@material-ui/core/Popper';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import Chip from '@material-ui/core/Chip';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

import Menu from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  menuBar: {
    backgroundColor: "#1669BB"
  },
  DropDown: {
    zIndex: 5,
    position: "relative",
    left: 0,
    margin: 0,
  },
  title: {
    align: "center",
    flexGrow: 0,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    padding: 36,
    borderRadius: 3,
    height: "75%",
    width: "33%",
  },
  field: {
    padding: 10,
  },
  paper: {
    width: "50%",
    padding: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    backgroundColor: "#ffffff",
  },
  paper2: {
    width: "50%",
    padding: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    position: "absolute", 
    backgroundColor: "#ffffff",
    alignItems: "stretch",
    justifyContent: "center",
    borderRadius: 3,
    width: "100%",
    height: "100%",
    outline: "2px solid blue",
  },
  readBio: {
    backgroundColor: "#FAFBFC"
  }
}));

function App() {
  const classes = useStyles();
  return (
    <Router>
      <div className="App"> 
        <header style={{flexGrow: 0}}>        
          <Paper position="static" className={classes.menuBar}>
            <Toolbar color="inherit" style={{display: "flex", justifyContent: "space-around"}}>
              <DropDown edge="start" className={classes.dropDown}></DropDown>
              <Typography variant="h6" className={classes.title}>
                Volunteer
              </Typography>
              <IconButton color="inherit" aria-label="upload picture" component={"span", Link} to="/UserProfile">
                <AccountCircle />
              </IconButton>
              <Button color="inherit" component={Link} to="/UserSignUp">User Sign Up</Button>
              <Button color="inherit" component={Link} to="/BusinessSignUp">Business Sign Up</Button>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </Paper>
        </header>
        <main className="App-header">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/UserSignUp">
              <UserSignUp />
            </Route>
            <Route path="/BusinessSignUp">
              <BusinessSignUp />
            </Route>
            <Route path="/UserProfile">
              <UserProfile />
            </Route>
          </Switch> 
        </main>
      </div>
    </Router>
  );
}

function DropDown() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div>
      <div>
        <IconButton
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          color="inherit"
        >
          <Menu />
        </IconButton>
        <Popper style={{zIndex: 2}} open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}

function SearchBar() {
  const classes = useStyles();

  return (
    <Paper component="form" className={"foo"}>
      <IconButton className={classes.iconButton} aria-label="menu">
        <Menu />
      </IconButton>
      <InputBase
        className={"foo"}
        inputProps={{ 'aria-label': 'Search for a project here.' }}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

function Home() {
  const classes = useStyles();
  return SearchBar();
}

function About() {
  return <h1>About</h1>;
}

function Users() {
  return (
    <form className={"foo"} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Standard" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <p>hello world</p>
    </form>
  );
}

function Login()
{
  return <p>hello</p>;
}

export default App;
