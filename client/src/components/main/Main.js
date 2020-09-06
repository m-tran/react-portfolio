import React, { useState } from 'react';
import "./main.css";

const Main = () => {
    const [isShown, setIsShown] = useState(false);

    return (
        <div className="main">
            <div className="main-text">
                <div className="name">
                    <h1 className="name-text">Hey, I'm Michelle.</h1>
                    <div className="name-color"></div>
                    <div className="name-color-2"></div>
                </div>
                <div className="about">
                    <h1 className="about-text">I'm a creative designer (who codes) @&nbsp;
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
                        &nbsp;through user and purpose-centered positioning.
                    </h1>
                </div>
                <div className="scroll-down">
                    <h2>
                        &#x21E9;
                    </h2>
                </div>
            </div>
            {isShown && (
            <div className="blob"></div>
            )}
        </div>
    )
}

export default Main;

