import React from 'react';
import "./projects.css";
import { Grid } from "@material-ui/core";
import twoThumb from "../../components/img/Two.jpg";
import twoThumbGif from "../../components/img/two_thumb.gif";
import pairThumb from "../../components/img/divide_event_03.jpg";
import pairThumbGif from "../../components/img/divide_event_03.gif";

const Projects = () => {

    return (
        <Grid container spacing={2} align-items="center" justify="center" id="projects">
            <Grid item xs={10} className="project-page">
                <div className="title">
                    <h1>Projects</h1>
                </div>
            </Grid>
            <Grid item xs={5} p={10}>
                <img 
                    className="thumb" 
                    src={twoThumb} 
                    alt="two" 
                    onMouseEnter={e => (e.currentTarget.src=twoThumbGif)}
                    onMouseLeave={e => (e.currentTarget.src=twoThumb)}/>
                <h2>two</h2>
                <p>Marketing, Graphic + Web Design</p>
            </Grid>
            <Grid item xs={5} className="pair">
                <img 
                    className="thumb" 
                    src={pairThumb} 
                    alt="two" 
                    onMouseEnter={e => (e.currentTarget.src=pairThumbGif)}
                    onMouseLeave={e => (e.currentTarget.src=pairThumb)}/>
                <h2>Pair</h2>
                <p>Brand + Web Design</p>
            </Grid>
        </Grid>
    )
}

export default Projects;