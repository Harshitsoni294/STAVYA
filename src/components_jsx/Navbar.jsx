import React, { useState, useEffect, useRef } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import ganpati from '../images/cultxlogo.png';
import { Link } from 'react-router-dom';
import '../components_css/Navbar.css';
import '../components_res/Navbar.css';
import { gsap } from 'gsap';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navLinksRef = useRef(null);
    const logoRef = useRef(null);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        if (navLinksRef.current && logoRef.current) {
            gsap.fromTo(
                navLinksRef.current.children,
                { opacity: 0, x: 100 },
                {
                    opacity: 1,
                    x: 0,
                    stagger: 0.1,
                    duration: 1,
                    ease: "power3.out",
                }
            );

            gsap.fromTo(
                logoRef.current,
                { opacity: 0, x: 100 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1.5,
                    ease: "power3.out",
                }
            );
        }
    }, []);

    return (
        <div className="nav-main-div">

            <div className="logo" ref={logoRef}>
                <img src={ganpati} alt="Logo" />
            </div>

            <div className="nav-links" ref={navLinksRef}>
                <a href="/Homepage">Home</a>
                <a href="/#about">About</a>
                <a href="/#glimpse">Glimpse</a>
                <a href="/members">Members</a>
                <a href="/clubs">Clubs</a>
                <a href="/events">Events</a>
                <a href="/#contact">Contacts</a>
            </div>

            <div className="ham-div">
                <a href='/' className="hamburgur">
                    <MenuIcon onClick={handleMenuToggle} sx={{
                        fontSize: 40,
                        '@media (max-width: 768px)': {
                            fontSize: 20,
                        },
                        '@media (max-width: 500px)': {
                            fontSize: 20,
                        },
                        '@media (max-width: 390px)': {
                            fontSize: 20,
                        },
                        '@media (max-width: 350px)': {
                            fontSize: 20,
                        },
                        '@media (max-width: 320px)': {
                            fontSize: 16,
                        }
                    }} />
                </a>
                {menuOpen && (
                    <div className="mobile-menu">
                        <a href="/Homepage">Home</a>
                        <a href="/About">About</a>
                        <a href="/glimpse">Glimpse</a>
                        <a href="/members">Members</a>
                        <a href="/clubs">Events</a>
                        <a href="/events">Clubs</a>
                        <a href="/#contact">Contacts</a>
                    </div>
                )}
            </div>
        </div>
    );
}
