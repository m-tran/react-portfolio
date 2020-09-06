import React from 'react';
import "./Navbar.css";
import logo from "../../components/img/logo.png";


const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-home">
                <a href="/">
                    <img className="logo" src={logo} alt="logo" />
                </a>
            </div>
            <ul className="navbar-links">
                <li className="navbar-link"><a href="/projects">projects</a></li>
                <li className="navbar-link"><a href="/contact">contact</a></li>
            </ul>
        </div>
    )
}

export default Navbar;
