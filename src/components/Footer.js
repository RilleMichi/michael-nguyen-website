import React from 'react';
//React-Share install
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    LineShareButton,
    LinkedinIcon,
    RedditShareButton,
    RedditIcon,
    LinkedinShareButton
} from "react-share";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>Kanton Bern</p>
                        </div>
                        <div className="d-flex">
                            <a href="tel:012 345 67 89">+41 123 456 789</a>
                        </div>
                        <div className="d-flex">
                            <p>Email</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <a className="footer-nav">Home</a>
                                <br />
                                <a className="footer-nav">About Me</a>
                                <br />
                                <a className="footer-nav">Services</a>
                            </div>
                            <div className="col">
                                <a className="footer-nav">Experiences</a>
                                <br />
                                <a className="footer-nav">Abilities</a>
                                <br />
                                <a className="footer-nav">Contact</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                            <FacebookShareButton
                                url={"https://michael-nguyen.ch/"}
                                /* Descriptopn */
                                quote={"Webseite React"}
                                hashtag="#MichaelWebseite">
                                <FacebookIcon className="mx-3" size={36}/>
                            </FacebookShareButton>
                            <TwitterShareButton
                                url={"https://michael-nguyen.ch/"}
                                /* Descriptopn */
                                quote={"Webseite React"}
                                hashtag="#MichaelWebseite">
                                <TwitterIcon className="mx-3" size={36}/>
                            </TwitterShareButton>
                            <LinkedinShareButton
                                url={"https://michael-nguyen.ch/"}
                                /* Descriptopn */
                                quote={"Webseite React"}
                                hashtag="#MichaelWebseite">
                                <LinkedinIcon className="mx-3" size={36}/>
                            </LinkedinShareButton>
                        </div>
                        <p className="pt-3 text-center">
                            Copyright&copy;
                            {new Date().getFullYear()}&nbsp;Michael Nguyen | All Rigths Reserved
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer
