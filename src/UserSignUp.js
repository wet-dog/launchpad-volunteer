import React, { useState } from 'react';

import Chip from '@material-ui/core/Chip';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
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
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;  
const MenuProps = {
  PaperProps: {
    style: {
    maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    width: 250,
    },
  },
};

const occupations = [
  'Management', 
  'Business and financial operations', 
  'Computers and mathematics', 
  'Architecture and engineering', 
  'Law', 
  'Healthcare practitioners'
];

const technologyNames = [
  'C',
  'C#', 
  'C++', 
  'CSS',
  'Git',
  'HTML', 
  'Haskell', 
  'Java', 
  'JavaScript', 
  'Lisp', 
  'Python', 
  'R', 
  'React', 
  'Ruby'
];

function UserSignUp() {
    const classes = useStyles();
  
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [fullName, setFullName] = useState("");
    const [occupation, setOccupation] = useState("");
    const [technologies, setTechnologies] = useState([]);
    const [bio, setBio] = useState("");
    const [address, setAddress] = useState("");
  
    const valid = true;
  
    return (
      <form className={classes.form}>
        <TextField value={username} className={classes.field}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          autoComplete="off"
        />
        <TextField value={email} className={classes.field}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          autoComplete="off"
        />
        <TextField value={phoneNumber} className={classes.field}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Phone Number"
          autoComplete="off"
        />
        <TextField value={fullName} className={classes.field}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Full Name"
          autoComplete="off"
        />
       
        <FormControl className={classes.field}>
          <InputLabel id="occupation-label">Occupation</InputLabel>
          <Select
            labelId="occupation-label"
            id="occupation-select"
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
            input={<Input id="occupation-select" />}
          >
            {occupations.map((occupation) => (
              <MenuItem key={occupation} value={occupation}>
                {occupation}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
       
        <FormControl className={classes.field}>
          <InputLabel id="technologies-label">Technologies</InputLabel>
          <Select
            labelId="technologies-label"
            id="technologies-select"
            multiple
            value={technologies}
            onChange={(e) => setTechnologies(e.target.value)}
            input={<Input id="technologies-select" />}
            renderValue={(selected) => (
              <div className={classes.chips}>
                {selected.map((value) => (
                  <Chip key={value} label={value} className={classes.chip} />
                ))}
              </div>
            )}
            MenuProps={MenuProps}
          >
            {technologyNames.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
     
        <TextField value={bio} className={classes.field}
          onChange={(e) => setBio(e.target.value)}
          placeholder="Bio"
          autoComplete="off"
          multiline
          variant="outlined"
          rows={4}
        />
  
        <TextField value={address} className={classes.field}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Address"
          autoComplete="off"
          multiline
          variant="outlined"
          rows={2}
        />
  
        <button type="submit" autoComplete="off" disabled={!valid}>Send</button>
      </form>
    );
  }

export default UserSignUp;
