import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// Images
import Adventure from "../img/Adventure.jpg";
import Soccer from "../img/Soccer.jpg";
import Surfing from "../img/Photo.jpg";
import Photo from "../img/Photo.jpg";

export const TestimonialsCarousel = () => {
    return (
        <Carousel
            showsArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={3000}
        >
            <>
                <img src={Adventure} alt="Adventure" />
                <div className="myCarousel">
                    <h3>Adventure</h3>
                    <p>Wuhuuu Adventure</p>
                </div>

            </>
            <>
                <img src={Soccer} alt="Soccer" />
                <div className="myCarousel">
                    <h3>Soccer</h3>
                    <p>Wuhuuu Soccer</p>
                </div>

            </>
            <>
                <img src={Surfing} alt="Surfing" />
                <div className="myCarousel">
                    <h3>Surfing</h3>
                    <p>Wuhuuu Surfing</p>
                </div>

            </>
            <>
                <img src={Photo} alt="Photo" />
                <div className="myCarousel">
                    <h3>Photo</h3>
                    <p>Nice Photo</p>
                </div>

            </>
        </Carousel>
    )
}

export default TestimonialsCarousel