import React, { useState } from 'react';
import "./main.css";
import { Grid } from "@material-ui/core";
import { HashLink as Link } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";

const Main = () => {
    const [isShown, setIsShown] = useState(false);

    return (
        <Router>
            <Grid container direction="row" spacing={2} justify="center" className="main">
                <Grid item xs={10} className="main-text">
                    <div className="name">
                        <h1 className="name-text">Hey, I'm Michelle.</h1>
                        <div className="name-color"></div>
                        <div className="name-color-2"></div>
                    </div>
                    <div className="about">
                        <h1 className="about-text">I'm a creative designer (who codes) @ <span><a 
                                className="two-link" 
                                href="www.twofurnish.com"
                                onMouseEnter={() => setIsShown(true)}
                                onMouseLeave={() => setIsShown(false)}>
                                    two</a></span> & I make brands come to <span><a 
                                className="project"
                                href="/projects"
                                onMouseEnter={() => setIsShown(true)}
                                onMouseLeave={() => setIsShown(false)}>
                                    life</a></span>&nbsp;through user and purpose-centered positioning.
                        </h1>
                    </div>
                    <div className="scroll-down">
                        <Link
                            to="/#projects"
                            scroll={el => el.scrollIntoView({ behavior: 'instant', block: 'end' })}
                        ><h2>&#x21E9;</h2>
                        </Link>
                    </div>
                </Grid>
                {isShown && (
                <div className="blob"></div>
                )}
            </Grid>
        </Router>
    )
}

export default Main;

