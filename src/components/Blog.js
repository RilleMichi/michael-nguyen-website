import React from 'react';
import Perth from "../img/Perth.jpg";
import Hawaii from "../img/Hawaii.jpg";
import Bali from "../img/Bali.jpg";
import Niederhorn from "../img/Niederhorn.JPG";

// Font awesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
//REACT PopupBox
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import "react-popupbox/dist/react-popupbox.css";


const Blog = () => {

    // Perth
    const openPopupboxPerth = () => {
        const content = (
            <>
                <img className="blog-image-popupbox" src={Perth} alt="Perth..." />
                <div className="blog-content-popupbox">
                    <p>Bla blassssssssss sssssssssssssss sssssssssssssssssssssssss sblasssssssssssssssssssssssssssssssssssssssssssssssssss</p>
                    <b>Perth: </b> <a className="hyper-link" onClick={() => window.open("https://www.westernaustralia.com/de/Destination/Perth/56b266c5d5f1565045da9dd7", "_blank")}>
                        https://www.westernaustralia.com/de/Destination-/Perth/56b266c5d5
                4544111111111111111f1565045da9dd7</a>
                </div>
            </>
        )
        PopupboxManager.open({ content });
        PopupboxManager.update({
            content,
            config: {
                titleBar: {
                    text: "Perth",
                },
            },
        });
    }

    // Hawaii
    const openPopupboxHawaii = () => {
        const content = (
            <>
                <img className="blog-image-popupbox" src={Hawaii} alt="Hawaii..." />
                <div className="blog-content-popupbox">
                    <p>Bla bla</p>
                    <b>Hawaii: </b> <a className="hyper-link" onClick={() => window.open("https://portal.ehawaii.gov/", "_blank")}>
                        https://portal.ehawaii.gov/</a>
                </div>
            </>
        )
        PopupboxManager.open({ content });
        PopupboxManager.update({
            content,
            config: {
                titleBar: {
                    text: "Hawaii",
                },
            },
        });
    }
 

    // Niederhorn
    const openPopupboxNiederhorn = () => {
        const content = (
            <>
                <img className="blog-image-popupbox" src={Niederhorn} alt="Niederhorn..." />
                <div className="blog-content-popupbox">
                    <p>Bla bla</p>
                    <b>Niederhorn: </b> <a className="hyper-link" onClick={() => window.open("https://www.niederhorn.ch/", "_blank")}>
                        https://www.niederhorn.ch/</a>
                </div>
            </>
        )
        PopupboxManager.open({ content });
        PopupboxManager.update({
            content,
            config: {
                titleBar: {
                    text: "Niederhorn",
                },
            },
        });
    }

    //Bali
    const openPopupboxBali = () => {
        const content = (
            <>
                <img className="blog-image-popupbox" src={Bali} alt="Bali..." />
                <div className="blog-content-popupbox">
                    <p>Bla bla</p>
                    <b>Bali: </b> <a className="hyper-link" onClick={() => window.open("https://bali.com/", "_blank")}>
                        https://bali.com/</a>
                </div>
            </>
        )
        PopupboxManager.open({ content });
        PopupboxManager.update({
            content,
            config: {
                titleBar: {
                    text: "Bali",
                },
            },
        });
    }
    // Wird unten aufgerufen um die popupbox zu zeigen, damit kan man die Einstellungen für den Popup vornehmen
    const popupBoxConfig = {
        fadeIn: true,
        fadeInSpeed: 500
    }

    return (
        <div className="blog-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">blog</h1>
                <div className="image-box-wrapper row justify-content-center">
                    {/* - */}
                    <div className="blog-image-box" onClick={openPopupboxPerth}>
                        <img className="blog-image" src={Perth} alt="Perth.." />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="blog-icon" icon={faSearchPlus} />
                    </div>
                    {/* - */}
                    <div className="blog-image-box" onClick={openPopupboxHawaii}>
                        <img className="blog-image" src={Hawaii} alt="Hawaii.." />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="blog-icon" icon={faSearchPlus} />
                    </div>
                    {/* - */}
                    <div className="blog-image-box" onClick={openPopupboxNiederhorn} >
                        <img className="blog-image" src={Niederhorn} alt="Niederhorn.." />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="blog-icon" icon={faSearchPlus} />
                    </div>
                    {/* - */}
                    <div className="blog-image-box" onClick={openPopupboxBali}>
                        <img className="blog-image" src={Bali} alt="Bali.." />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="blog-icon" icon={faSearchPlus} />
                    </div>
                </div>
            </div>
            {/*Aufruf Aller PopupboxConfigs*/}
            <PopupboxContainer {...popupBoxConfig} />
        </div>
    )
}

export default Blog
