import React from 'react'
import Logo from "../img/logo_large.png"
// React Font awesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons" 

//Navbar
const Navbar = () => {
    return (
        //Import from Bootstrap

        //Hier kann man einstellen wie die Navigationbar ist (z.B. dunkel)
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container">
                {/*Logo variable von oben*/}
                <a className="navbar-brand" href="#"><img className="Logo" src={Logo}/> </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }}/>
                </button>


                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {/*ml-auto --> damit es rechts angezeigt wird*/}
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About Me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Experiences</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Freetime</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    )
}

export default Navbar
