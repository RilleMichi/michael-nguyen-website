import React from 'react';
//Wird nicht gebraucht, aber für Markenbilder
import { faCss3, faGit, faHtml5, faJava, faJs, faLinux, faPhp, faPython, faReact, faWindows,  } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faServer } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
    return (
        <div className="skills">
            <h1 className="py-5">Skills</h1>
            <div className="container">
                <div className="row">
                    {/* - */}
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon  className="icon" icon={faReact} size="2x" /></div>
                            <h3>React</h3>
                            <p>Advanced</p>
                        </div>
                    </div>
                    {/* - */}
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon  className="icon" icon={faJava} size="2x" /></div>
                            <h3>Java</h3>
                            <p>Advanced</p>
                        </div>
                    </div>
                    {/* - */}
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon  className="icon" icon={faJs} size="2x" /></div>
                            <h3>JavaScript</h3>
                            <p>Advanced</p>
                        </div>
                    </div>
                    {/* - */}
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon  className="icon" icon={faHtml5} size="2x" /></div>
                            <h3>HTML 5</h3>
                            <p>Advanced</p>
                        </div>
                    </div>
                    {/* - */}
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon  className="icon" icon={faCss3} size="2x" /></div>
                            <h3>CSS3</h3>
                            <p>Advanced</p>
                        </div>
                    </div>
                    {/* - */}
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon  className="icon" icon={faPython} size="2x" /></div>
                            <h3>Python</h3>
                            <p>Basic knowledge</p>
                        </div>
                    </div>
                    {/* - */}
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon  className="icon" icon={faLinux} size="2x" /></div>
                            <h3>Linux</h3>
                            <p>Basic knowledge</p>
                        </div>
                    </div>
                     {/* - */}
                     <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faPhp} size="2x" /></div>
                            <h3>PHP</h3>
                            <p>Basic knowledge</p>
                        </div>
                    </div>
                    {/* - */}
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faGit} size="2x" /></div>
                            <h3>Git</h3>
                            <p>Advanced</p>
                        </div>
                    </div>
                    {/* - */}
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faDatabase} size="2x" /></div>
                            <h3>SQL</h3>
                            <p>Advanced</p>
                        </div>
                    </div>
                    {/* - */}
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faWindows} size="2x" /></div>
                            <h3>PowerShell</h3>
                            <p>Advanced</p>
                        </div>
                    </div>
                     {/* - */}
                     <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faServer} size="2x" /></div>
                            <h3>Server</h3>
                            <p>Advanced</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Skills
