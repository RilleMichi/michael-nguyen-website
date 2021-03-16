import React from 'react';
import MePhoto from "../img/BewerbungFoto.jpg";

const AboutMe = () => {
    return (
        <div id="about" className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    {/*mb-5 Bootstrap margin bottom 5px;*/}
                    <div className="photo-wrap mb-5">
                        {/*Foto link*/}
                        <img className="profile-img" src={MePhoto} alt="Foto..." />
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">About Me</h1>
                    <p>I successfully completed an apprenticeship as an EFZ computer scientist. Afterwards, I worked as an ICT system specialist for a few months. I was
                    able to acquire in-depth IT expertise. I was mainly concerned with automation to support work
                    processes using PowerShell scripts.<br />
                    After my military service in 2019, I deepened my English skills with a language stay.
                    Now I want to contribute to and drive healthcare Switzerland.<br /><br />
                    Therefore, I study medical informatics at the BFH in Biel and work part-time at the Lindenhofgruppe
                    as a medicine computer scientist. This way I can put into practice what
                    I have learned and gain experience.

                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
