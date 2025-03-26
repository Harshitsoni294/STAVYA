import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
// import { Link } from "react-router-dom";
import chakra08 from '../images/chakra08.png';
import chakra02 from '../images/chakra02.png';
import chakra05 from '../images/design.png';
import stavyalogo from '../images/stavyalogoo.png';
import '../components_css/Homepage.css';
import '../components_res/Homepage.css';
// import '/Homepage.css';

export default function Homepage() {
    const textRef = useRef(null);
    const imgDivRef = useRef(null);
    const paraRef = useRef(null);
    const logoRef = useRef(null);
    const cultxRef = useRef(null);
    const shlokRef = useRef(null);

    useEffect(() => {
        const letters = textRef.current.querySelectorAll('.letter');
        const images = imgDivRef.current.querySelectorAll('img');


        gsap.fromTo(
            letters,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 1.5,
                stagger: 0.15,
                ease: "power3.inOut",
            }
        );

        gsap.fromTo(
            images[0],
            { x: '100%', opacity: 0 },
            {
                x: '0%',
                opacity: 0.1,
                duration: 1.5,
                ease: "power3.out",
            }
        );

        gsap.fromTo(
            images[1],
            { scale: 0.8, opacity: 0 },
            {
                scale: 1,
                opacity: 0.1,
                duration: 2,
                ease: "power2.out",
            }
        );

        gsap.fromTo(
            images[2],
            { x: '-100%', opacity: 0 },
            {
                x: '0%',
                opacity: 0.1,
                duration: 1.5,
                ease: "power3.out",
            }
        );

        gsap.fromTo(
            logoRef.current,
            { opacity: 0, scale: 0.8 },
            {
                opacity: 1,
                scale: 1,
                duration: 1.5,
                ease: "power3.out",
                delay: 0.5,
            }
        );

        gsap.fromTo(
            paraRef.current,
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                duration: 1.5,
                delay: 1.5,
                ease: "power3.out",
            }
        );

        gsap.fromTo(
            cultxRef.current,
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                duration: 1.5,
                delay: 1.5,
                ease: "power3.out",
            }
        );


        gsap.fromTo(
            shlokRef.current,
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                duration: 1.5,
                delay: 1,
                ease: "power3.out",
            }
        );

    }, []);

    return (
        <>
            <div className="homepage-main">
                {/* Image Section */}
                <div className="img-div" ref={imgDivRef}>
                    <img className='ch-img-02' src={chakra02} alt="chakra02" />
                    <img className='ch-img-05' src={chakra05} alt="chakra05" />
                    <img className='ch-img-08' src={chakra08} alt="chakra08" />
                    <img className='stvya-logo' ref={logoRef} src={stavyalogo} alt="stavyalogo" />
                </div>

                {/* Text Section */}
                <div className="home-text">
                    <h1 className='home-stvya' ref={textRef}>
                        {"STAVYA".split("").map((letter, index) => (
                            <span key={index} className="letter">
                                {letter}
                            </span>
                        ))}
                    </h1>
                    <h3 className='home-culxlit' ref={cultxRef}>CultxAcads</h3>
                    <h3 className='home-shlok' ref={shlokRef}>Streets alive Culture Ignites</h3>
                    <p className='home-para' ref={paraRef}>
                        Stavya is the annual cultural fest of *IIIT Vadodara - International Campus Diu, organized by the Academics and Cultural Committee. It provides a platform for students to showcase their talents in events such as **photography, poetry, dance, music, debate, drawing, drama, and rangoli.
                    </p>
                </div>
            </div>
        </>
    );
}
