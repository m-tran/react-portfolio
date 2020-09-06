import React, { useState } from 'react';
import "./main.css";

const Main = () => {
    const [isShown, setIsShown] = useState(false);

    return (
        <div className="main">
            <h1 className="main-text">
                <div className="name">Hey, I'm Michelle.</div>
                <div className="about">I'm a creative designer (who codes) @&nbsp;
                <a 
                    className="two-link" 
                    href="www.twofurnish.com"
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}>
                        two
                </a>
                <br/>
                & I make brands come to&nbsp;
                <a 
                    className="project"
                    href="/projects"
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}>
                        life
                </a>
                &nbsp;through user and purpose-centered positioning.</div>
            </h1>
            {isShown && (
            <div className="blob"></div>
            )}
        </div>
    )
}

export default Main;

