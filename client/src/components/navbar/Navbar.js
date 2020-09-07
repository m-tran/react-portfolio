import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import "./Navbar.css";
import logo from "../../components/img/logo.png";
import { HashLink as Link } from 'react-router-hash-link';
import { Grid } from "@material-ui/core";

const Navbar = () => {

    return (
        <Router>
            <Grid container direction="row" justify="space-between" alignItems="center">
                <Grid item xs={4} className="navbar-home">
                    <a href="/">
                        <img className="logo" src={logo} alt="logo" />
                    </a>
                </Grid>
                <Grid container item xs={8} justify="flex-end">
                    <ul className="navbar-links">
                        <Link
                            to="/#projects"
                            scroll={el => el.scrollIntoView({ behavior: 'instant', block: 'end' })}
                        >
                            <li className="navbar-link">projects</li>
                        </Link>
                        <Link
                            to="/#contact"
                            scroll={el => el.scrollIntoView({ behavior: 'instant', block: 'end' })}
                        >
                            <li className="navbar-link">contact</li>
                        </Link>
                    </ul>
                </Grid>
            </Grid>
        </Router>
    )
}

export default Navbar;
