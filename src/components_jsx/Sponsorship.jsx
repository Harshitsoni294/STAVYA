import React from 'react'
import sponsor01 from '../images/sponsor01.png'
import sponsor02 from '../images/sponsor02.png'
import '../components_css/Sponsor.css'
import '../components_res/Sponsor.css'

export default function Sponsorship() {
    return (
        <>
            <div className="sponsor-main">
                <h1>Our Partners</h1>
                <div className="img-div">
                    <div className="img-01"> <img src={sponsor01} alt="sponsor01 logo" /></div>
                    <div className="img-02"> <img src={sponsor02} alt="sponsor02 logo" /></div>
                </div>
            </div>
        </>
    )
}
