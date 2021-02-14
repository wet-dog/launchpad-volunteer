import logo from './logo.svg';
import './App.css';
import React from "react";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AppBar from '@material-ui/core/Appbar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';

import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';

import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Popper from '@material-ui/core/Popper';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  menuBar: {
    alignItems: "center",
  },
  DropDown: {
    left: 0,
    margin: 0,
  },
  title: {
    align: "center",
    flexGrow: 1,
  },
  searchBar:{
    width:"70%"
  },
  margin: {
    margin: theme.spacing(1),
  },
  container:{ 
  }
}));
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
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
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
function App() {
  const classes = useStyles();
  return (
    <Router>
      <div className="App">
        <AppBar position="static" className={classes.menuBar}>
          <Toolbar>
            <DropDown edge="start" className={classes.dropDown}></DropDown>
            <Typography variant="h6" className={classes.title}>
              PLACEHOLDER
            </Typography>
            <IconButton color="white" aria-label="upload picture" component={"span", Link} to="/users">
              <AccountCircle />
            </IconButton>
            <Link to="/home">
            <Button color="inherit">Home</Button>
            </Link>

            <Link to="/about">
            <Button color="inherit">About</Button>
            
            </Link>

            <Link to="/signup">
            <Button color="inherit">Signup</Button>
            </Link>
            
            <Link to="/login">
            <Button color="inherit">Login</Button>
            </Link>

            <Link to="/CreateProject">
              <Button color="inherit">Create Project</Button>
            </Link>

          </Toolbar>
        </AppBar>          
        <header className="App-header">
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
           <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/home">
              <p>What kind of project are you looking for?</p>
              <SearchBar className={classes.menuBar} />
              <p>Location</p>
              <SearchBar />
              <Textbox />
            </Route>
            <Route path="/CreateProject">
              <h3>Project title</h3>
              <Textbox style={{width:"70%",height:"20%"}}/>
              <h3>Project description</h3>
              <Textbox />
            </Route>
            <Route path="/login">
              <Login />
              </Route>
          </Switch> 
        </header>
      </div>
    </Router>
  );
}
function SearchBar() {
  const classes = useStyles();
  return (
  
    <Paper component="form" className={classes.searchBar}>
      <IconButton style={{float:"left"}} aria-label="menu">
        <Menu />
      </IconButton>
      <InputBase
        className={"foo"}
        inputProps={{ 'aria-label': 'Search for a project here.' }}
      />
      <IconButton type="submit" style={{float:"right"}} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
function About()
{
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
      </Container>
    </React.Fragment>
  );
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
  const classes = useStyles();
  return (
    <div>
      <h1>Login</h1>
      <FormControl className={classes.margin}>
        <InputLabel htmlFor="input-with-icon-adornment">Username</InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl>
    </div>
  );
}

function Textbox()
{
  return(
  <TextField
  id="filled-secondary"
  variant="filled"
  color="secondary"
/>
  )
}
export default App;