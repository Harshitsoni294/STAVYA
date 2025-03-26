import React, { useState, useEffect } from 'react'
import Navbar from '../components_jsx/Navbar'
import Homepage from '../components_jsx/Homepage'
import About from '../components_jsx/About'
import Glimpse from '../components_jsx/Glimpse'
import Contact from '../components_jsx/Contact'
import '../index.css'
import { HashLoader } from 'react-spinners'

export default function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const timer = setTimeout(() => {
            setLoading(false);
        }, Math.random() * 2000 + 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {loading ? (

                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100vh',
                        backgroundColor: '#000',
                        flexDirection: 'column',
                    }}
                >
                    <HashLoader
                        loading={true}
                        color="#C70039"
                        size={getResponsiveSize()}
                    />
                </div>
            ) : (

                <>
                    <div className="doodleimage"></div>
                    <Navbar />
                    <Homepage />
                    <About />
                    <Glimpse />
                    {/* <Sponsorship /> */}
                    <Contact />
                </>
            )}
        </>
    );

    function getResponsiveSize() {
        const screenWidth = window.innerWidth;
        if (screenWidth < 768) return 30; // Phones
        if (screenWidth < 1024) return 40; // Tablets
        if (screenWidth < 1440) return 50; // Laptops
        return 60; // Larger screens (desktops)
    }

}
