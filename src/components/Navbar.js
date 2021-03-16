import React from 'react'
import Logo from "../img/logo_large.png"
// React Font awesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons" 
//React-scroll install
import {Link} from "react-scroll"

//Navbar
const Navbar = () => {
    return (
        //Import from Bootstrap

        //Hier kann man einstellen wie die Navigationbar ist (z.B. dunkel)
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
            <div className="container">
                {/*Logo variable von oben*/}
                <Link smooth={true} to="home" className="navbar-brand" href="#"><img className="Logo" src={Logo}/> </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }}/>
                </button>


                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {/*ml-auto --> damit es rechts angezeigt wird*/}
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link smooth={true} to="about" offset={-90} className="nav-link" href="#">About Me<span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="services" offset={-90} className="nav-link" href="#">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="experiences" offset={-90} className="nav-link" href="#">Experiences</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="abilities" offset={-90} className="nav-link" href="#">Abilities</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="blog" offset={-90} className="nav-link" href="#">Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="freetime" offset={-90} className="nav-link" href="#">Freetime</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="contact" offset={-90} className="nav-link" href="#">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    )
}

export default Navbar
