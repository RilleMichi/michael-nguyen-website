import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faLaptopMedical, faNetworkWired, faUsers } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
    return (
        <div className="services">
            <h1 className="py-5">My Services</h1>
            <div className="container">
                <div className="row">
                    {/* - */}
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon  className="icon" icon={faUsers} size="2x" /></div>
                            <h3>Junior IT-Projectmanager</h3>
                            <p>Expect the best, plan for the worst, and prepare to be surprised.</p>
                        </div>
                    </div>
                    {/* - */}
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faLaptopMedical} size="2x" /></div>
                            <h3>Application Manager</h3>
                            <p>Your most unhappy customers are your greatest source of learning.</p>
                        </div>
                    </div>
                    {/* - */}
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faNetworkWired} size="2x" /></div>
                            <h3>IT-System Specialist</h3>
                            <p>The only constant in the technology industry is change.</p>
                        </div>
                    </div>
                    {/* - */}
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faLaptopCode} size="2x" /></div>
                            <h3>Webdesign & Development</h3>
                            <p>I approach each project indivually and always focus on the result.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Services
