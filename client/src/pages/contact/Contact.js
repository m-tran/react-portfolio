import React from 'react';
import { Grid } from "@material-ui/core";
import "./contact.css";

const Contact = () => {
    return (
        <Grid container spacing={2} align-items="center" justify="center" id="contact">
            <Grid item xs={10} className="project-page">
                <div className="title">
                    <h1>Contact</h1>
                </div>
            </Grid>
            <Grid item xs={10} className="email">
                <h2>Got a project?<br/>Drop me a line!</h2>
                <a href="mailto:mptran0101@berkeley.edu"><h1>mptran0101@berkeley.edu</h1></a>
            </Grid>
        </Grid>
    )
}

export default Contact;
