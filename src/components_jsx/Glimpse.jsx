import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaCircleArrowRight } from "react-icons/fa6";

import stavyalogo from '../images/stavyalogo.png';
import deepjyoti02 from '../images/deepjyoti02.png';
import chakra02 from '../images/chakra02.png';
import { Link, useNavigate } from "react-router-dom";
import '../components_css/Glimpse.css';
import '../components_res/Glimpse.css';

let images2 = [];
for (let i = 1; i <= 50; i++) {
    images2.push({ src: require(`../images/glimp${i <= 9 ? 0 : ''}${i}.JPG`), alt: "loading" });
}

const ImageCarousel = () => {
    const [isLastSlide, setIsLastSlide] = useState(false); // Track last slide
    const handleCarouselChange = (state) => {
        const isLast = state.currentSlide === state.totalItems - 1;
        setIsLastSlide(isLast);
    };

    const navigate = useNavigate();
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 3,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <div className="glimpse-main" id="glimpse">
            <div className="glimpse-div">
                <h3 className="stvya-glimp">STAVYA GLIMPSE</h3>
                <hr className="glipm-line-01" />
                <img className="glimp-stvya" src={stavyalogo} alt="Stavya Logo" loading="lazy" />
                <img className="glimp-dp-02" src={deepjyoti02} alt="Deepjyoti" loading="lazy" />
            </div>

            <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                keyBoardControl={true}
                showDots={true}
                customTransition="all 2s"
                transitionDuration={1000}
                containerClass="carousel-container"
                renderDotsOutside={true}
                customDot={<CustomDot />} // Custom dot component
                dotListClass="custom-dot-list"
                rewind={true}
                afterChange={handleCarouselChange} // Detect slide change
            >
                {images2.map((image, index) => (
                    <div key={index}>
                        <img src={image.src} alt={image.alt} width={"80%"} loading="lazy" />
                    </div>
                ))}
            </Carousel>

            <div className="button-div">
                <Link to="/members">
                    <button className="M-button">
                        <FaCircleArrowRight className="arrow" color="#ff0057" />
                        <span className="button-text">Members</span>
                    </button>
                </Link>
                <Link to="/events">
                    <button className="M-button">
                        <FaCircleArrowRight className="arrow" color="#ff0057" />
                        <span className="button-text">Events</span>
                    </button>
                </Link>
                <Link to="/clubs">
                    <button className="M-button">
                        <FaCircleArrowRight className="arrow" color="#ff0057" />
                        <span className="button-text">Clubs</span>
                    </button>
                </Link>
            </div>
        </div>
    );
};

const CustomDot = ({ index, onClick, active }) => {
    const totalPages = 3;
    const dotsToShow = Math.floor(index / totalPages);

    return (
        <li
            className={`custom-dot ${active ? "active" : ""}`}
            onClick={() => onClick(dotsToShow)}
        ></li>
    );
};

export default ImageCarousel;
