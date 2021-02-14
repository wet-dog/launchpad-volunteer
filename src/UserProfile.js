import React, { useState, useEffect } from 'react';

import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Menu from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    menuBar: {
        alignItems: "center",
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
    field: {
      padding: 10,
    },
    paper: {
      width: "33%",
      padding: 24,
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
      backgroundColor: "#ffffff",
    },
    paper2: {
      width: "66%",
      padding: 24,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "#ffffff",
    },
    container: {
      display: "flex",
      flexDirection: "row",
      position: "absolute", 
      alignItems: "stretch",
      justifyContent: "center",
      width: "100%",
      height: "100%",
    },
    textBox: {
      backgroundColor: "#fafbfc"
    }
  }));
  
function Information(props) {
    const classes = useStyles();

    return (
        <React.Fragment>
            <InputLabel style={{color: "black"}} id="label">
            <Typography variant="h6" className={classes.title}>
                {props.label}
            </Typography>
            </InputLabel>
            <TextField value={props.value} className={classes.textBox}
            labelId="label"
            autoComplete="off"
            multiline
            variant="outlined"
            />
        </React.Fragment>     
    );
}

function UserProfile() {
    const classes = useStyles();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [fullName, setFullName] = useState("");
    const [occupation, setOccupation] = useState("");
    const [technologies, setTechnologies] = useState([]);
    const [bio, setBio] = useState("");
    const [address, setAddress] = useState("");

    useEffect(() => {
        let data = {
        "username": "foo", 
        "email": "foo@bar.com", 
        "phoneNumber": "077788854321",
        "fullName": "Foo Bar",
        "occupation": "Foologist",
        "technologies": "Bar++",
        "bio": "Foo bar bar",
        "address": "Foo bar lane"
        };

        fetch(data)


        setUsername(data["username"]);
        setEmail(data["email"]);
        setPhoneNumber(data["phoneNumber"]);
        setFullName(data["fullName"]);
        setOccupation(data["occupation"]);
        setTechnologies(data["technologies"]);
        setBio(data["bio"]);
        setAddress(data["address"]);
    }, []);

    return (
        <div className={classes.container}>
        <Paper className={classes.paper}>
            <Typography variant="h6" className={classes.title}>
                Profile
            </Typography>

            <hr style={{width: "100%"}}></hr>
            
            <Information label="Username" value={username} />
            <Information label="Full Name" value={fullName} />
            <Information label="Email" value={email} />
            <Information label="Phone Number" value={phoneNumber} />
            <Information label="Occupation" value={occupation} />
            <Information label="Technologies" value={technologies} />
            <Information label="Bio" value={bio} />
            <Information label="Address" value={address} />

        </Paper>
        
        {/* Second half */}
        <Paper className={classes.paper2}>
            <SearchBar />
            <Paper style={{width: "100%", height: "100px", color: "blue"}}>
            <SearchBar />
            </Paper>
        </Paper>
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

export default UserProfile;