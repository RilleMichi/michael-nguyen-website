import React from 'react';
import { faCss3, faGit, faHtml5, faJava, faJs, faLinux, faPhp, faPython, faReact, faWindows, } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDatabase, faGlobe, faGlobeAmericas, faGlobeAsia, faGlobeEurope, faServer, faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';


const Abilities = () => {
    return (
        <div id="abilities" className="abilities section">
            <h1 className="abilities">Abilities</h1>

            <div className="abilities-center container">
                <div className="vertical-line"></div>
                <h3>Skills</h3>
                <div className="row">
                    <div className="col-md-6">
                        <ul className="no-bullets" >
                            <li className="abilities-line">
                                <span className="ability-title"><FontAwesomeIcon className="ability-title-icon" icon={faJava} />Java</span>
                                <span className="ability-score">
                                    <FontAwesomeIcon className="icon" icon={faStar} />
                                    <FontAwesomeIcon className="icon" icon={faStar} />
                                    <FontAwesomeIcon className="icon" icon={faStar} />
                                    <FontAwesomeIcon className="icon" icon={farStar} />
                                    <FontAwesomeIcon className="icon" icon={farStar} />
                                </span>
                            </li>
                            <li className="abilities-line">
                                <span className="ability-title"><FontAwesomeIcon className="ability-title-icon" icon={faJs} />JavaScript</span>
                                <span className="ability-score">
                                    <FontAwesomeIcon className="icon" icon={faStar} />
                                    <FontAwesomeIcon className="icon" icon={faStar} />
                                    <FontAwesomeIcon className="icon" icon={faStar} />
                                    <FontAwesomeIcon className="icon" icon={farStar} />
                                    <FontAwesomeIcon className="icon" icon={farStar} />
                                </span>
                            </li>
                            <li className="abilities-line">
                                <span className="ability-title"><FontAwesomeIcon className="ability-title-icon" icon={faHtml5} />HTML5</span>
                                <span className="ability-score">
                                    <FontAwesomeIcon className="icon" icon={faStar} />
                                    <FontAwesomeIcon className="icon" icon={faStar} />
                                    <FontAwesomeIcon className="icon" icon={faStar} />
                                    <FontAwesomeIcon className="icon" icon={farStar} />
                                    <FontAwesomeIcon className="icon" icon={farStar} />
                                </span>
                            </li>
                            <li className="abilities-line">
                                <span className="ability-title"><FontAwesomeIcon className="ability-title-icon" icon={faCss3} />CSS3</span>
                                <span className="ability-score">
                                    <FontAwesomeIcon className="icon" icon={faStar} />
                                    <FontAwesomeIcon className="icon" icon={faStar} />
                                    <FontAwesomeIcon className="icon" icon={faStar} />
                                    <FontAwesomeIcon className="icon" icon={farStar} />
                                    <FontAwesomeIcon className="icon" icon={farStar} />
                                </span>
                            </li>
                            <li className="abilities-line">
                                <span className="ability-title"><FontAwesomeIcon className="ability-title-icon" icon={faReact} />React</span>
                                <span className="ability-score">
                                    <FontAwesomeIcon className="icon" icon={faStar} />
                                    <FontAwesomeIcon className="icon" icon={faStar} />
                                    <FontAwesomeIcon className="icon" icon={faStar} />
                                    <FontAwesomeIcon className="icon" icon={farStar} />
                                    <FontAwesomeIcon className="icon" icon={farStar} />
                                </span>
                            </li>
                        </ul>
                    </div>


                    <div className="col-md-6">
                        <ul className="no-bullets" >
                            <li className="abilities-line">
                                <span className="ability-title"><FontAwesomeIcon className="ability-title-icon" icon={faWindows} />PowerShell</span>
                                <span className="ability-score">
                                    <FontAwesomeIcon className="icon" icon={faStar} />
                                    <FontAwesomeIcon className="icon" icon={faStar} />
                                    <FontAwesomeIcon className="icon" icon={faStar} />
                                    <FontAwesomeIcon className="icon" icon={faStar} />
                                    <FontAwesomeIcon className="icon" icon={farStar} />
                                </span>
                            </li>
                            <li className="abilities-line">
                                <span className="ability-title"><FontAwesomeIcon className="ability-title-icon" icon={faServer} />Server</span>
                                <span className="ability-score">
                                    <FontAwesomeIcon className="icon" icon={faStar} />
                                    <FontAwesomeIcon className="icon" icon={faStar} />
                                    <FontAwesomeIcon className="icon" icon={faStar} />
                                    <FontAwesomeIcon className="icon" icon={farStar} />
                                    <FontAwesomeIcon className="icon" icon={farStar} />
                                </span>
                            </li>
                            <li className="abilities-line">
                                <span className="ability-title"><FontAwesomeIcon className="ability-title-icon" icon={faDatabase} />SQL</span>
                                <span className="ability-score">
                                    <FontAwesomeIcon className="icon" icon={faStar} />
                                    <FontAwesomeIcon className="icon" icon={faStar} />
                                    <FontAwesomeIcon className="icon" icon={faStar} />
                                    <FontAwesomeIcon className="icon" icon={farStar} />
                                    <FontAwesomeIcon className="icon" icon={farStar} />
                                </span>
                            </li>
                            <li className="abilities-line">
                                <span className="ability-title"><FontAwesomeIcon className="ability-title-icon" icon={faLinux} />Linux</span>
                                <span className="ability-score">
                                    <FontAwesomeIcon className="icon" icon={faStar} />
                                    <FontAwesomeIcon className="icon" icon={faStar} />
                                    <FontAwesomeIcon className="icon" icon={faStar} />
                                    <FontAwesomeIcon className="icon" icon={farStar} />
                                    <FontAwesomeIcon className="icon" icon={farStar} />
                                </span>
                            </li>
                            <li className="abilities-line">
                                <span className="ability-title"><FontAwesomeIcon className="ability-title-icon" icon={faPython} />Python</span>
                                <span className="ability-score">
                                    <FontAwesomeIcon className="icon" icon={faStar} />
                                    <FontAwesomeIcon className="icon" icon={faStar} />
                                    <FontAwesomeIcon className="icon" icon={farStar} />
                                    <FontAwesomeIcon className="icon" icon={farStar} />
                                    <FontAwesomeIcon className="icon" icon={farStar} />
                                </span>
                            </li>
                        </ul>
                        {/* ehemalige Skills Anzeige
                        <div className="abilities-box" >
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faReact} size="2x" /></div>
                            <h4>HTML5</h4>
                            <div className="abilities-ilt">
                                <div className="abilities-bar html"></div>
                                <span>95%</span>
                            </div>
                        </div>*/}
                    </div>
                </div>

                <div className="vertical-line"></div>
                <h3>Languages</h3>
                <div className="row">
                    <div className="col-md-6">
                        <ul className="no-bullets" >
                            <li className="abilities-line">
                                <span className="ability-title"><FontAwesomeIcon className="ability-title-icon" icon={faGlobeEurope} />German</span>
                                <span className="ability-score">
                                    <FontAwesomeIcon className="icon" icon={faStar} />
                                    <FontAwesomeIcon className="icon" icon={faStar} />
                                    <FontAwesomeIcon className="icon" icon={faStar} />
                                    <FontAwesomeIcon className="icon" icon={faStar} />
                                    <FontAwesomeIcon className="icon" icon={faStar} />
                                </span>
                            </li>
                            <li className="abilities-line">
                                <span className="ability-title"><FontAwesomeIcon className="ability-title-icon" icon={faGlobeAmericas} />English</span>
                                <span className="ability-score">
                                    <FontAwesomeIcon className="icon" icon={faStar} />
                                    <FontAwesomeIcon className="icon" icon={faStar} />
                                    <FontAwesomeIcon className="icon" icon={faStar} />
                                    <FontAwesomeIcon className="icon" icon={faStar} />
                                    <FontAwesomeIcon className="icon" icon={farStar} />
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <ul className="no-bullets" >
                            <li className="abilities-line">
                                <span className="ability-title"><FontAwesomeIcon className="ability-title-icon" icon={faGlobeEurope} />French</span>
                                <span className="ability-score">
                                    <FontAwesomeIcon className="icon" icon={faStar} />
                                    <FontAwesomeIcon className="icon" icon={faStar} />
                                    <FontAwesomeIcon className="icon" icon={farStar} />
                                    <FontAwesomeIcon className="icon" icon={farStar} />
                                    <FontAwesomeIcon className="icon" icon={farStar} />
                                </span>
                            </li>
                            <li className="abilities-line">
                                <span className="ability-title"><FontAwesomeIcon className="ability-title-icon" icon={faGlobeAsia} />Vietnamese</span>
                                <span className="ability-score">
                                    <FontAwesomeIcon className="icon" icon={faStar} />
                                    <FontAwesomeIcon className="icon" icon={faStar} />
                                    <FontAwesomeIcon className="icon" icon={faStar} />
                                    <FontAwesomeIcon className="icon" icon={farStar} />
                                    <FontAwesomeIcon className="icon" icon={farStar} />
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Abilities
