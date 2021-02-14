import React, { useState } from 'react';

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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
}));

function BusinessSignUp() {
    const classes = useStyles();
  
    const [businessName, setBusinessName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [websiteLink, setWebsiteLink] = useState("");
    const [businessStatement, setBusinessStatement] = useState([]);
    const [description, setDescription] = useState("");
    const [address, setAddress] = useState("");
  
    const valid = true;
  
    return (
      <form className={classes.form}>
        <TextField value={businessName} className={classes.field}
          onChange={(e) => setBusinessName(e.target.value)}
          placeholder="Business Name"
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
        
        <TextField value={websiteLink} className={classes.field}
          onChange={(e) => setWebsiteLink(e.target.value)}
          placeholder="Website Link"
          autoComplete="off"
        />
        
        <TextField value={businessStatement} className={classes.field}
          onChange={(e) => setBusinessStatement(e.target.value)}
          placeholder="Business Statement"
          autoComplete="off"
          multiline
          variant="outlined"
          rows={4}
        />
     
        <TextField value={description} className={classes.field}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
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

export default BusinessSignUp;
