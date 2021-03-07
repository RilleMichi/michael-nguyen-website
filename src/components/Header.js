import React from 'react';
import Typed from "react-typed";


const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <canvas></canvas>
                <h1>Hi, I'm Michael Nguyen</h1>
                <Typed 
                    className="typed-text"
                    strings={["friendly", "social", "funny"]}
                    typeSpeed={100}
                    backSpeed={80}
                    loop
                />
                <a href='#' className="btn-main-offer">Contact Me</a>
            </div>
        </div>
    )
}

export default Header
