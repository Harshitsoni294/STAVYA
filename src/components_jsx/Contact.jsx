import React from 'react'
import { FaDiscord, FaInstagram, FaLinkedin, FaGlobe } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { Link } from 'react-router-dom';
import stvyalogo from '../images/stavyalogo.png'
import chakra07 from '../images/chakra07.png'
import chakra09 from '../images/chakra09.png'
import deepjyoti02 from '../images/deepjyoti02.png'
import '../components_css/Contact.css'
import '../components_res/Contact.css'



export default function Contact() {
    return (

        <div className="contact-main" id='contact'>
            <div className="cont-img-div">
                {/* <img className='chakra09' src={chakra09} alt="loading" /> */}
                <img className='chakra07' src={chakra07} alt="loading" />
                <img className='stvya-logo' src={stvyalogo} alt="loading" />
                <h3 className='cont-stv'>STAVYA</h3>
                <img className='stvya-logo-02' src={stvyalogo} alt="loading" />
                <hr className='cont-stv-line' />
                <img className='deep-02' src={deepjyoti02} alt="loading" />
            </div>
            <div className="contact-details">
                <h2>Indian Institute of Information Technology Vadodara - International Campus Diu</h2>
                <div className="anchor-cont">

                    <div className='link'>
                        <h6>Links</h6>
                        <hr className='link-line' />
                    </div>
                    <div className='instawegra'>
                        <Link to='#' className='iconss'><FaDiscord className='iconstyle' style={{ width: '40px', marginBottom: '-8px' }} /><h3>Discord</h3></Link>
                        <Link to='#' className='iconss'><FaInstagram className='iconstyle' style={{ width: '40px', marginBottom: '-8px' }} /><h3>Instagram</h3></Link>
                        <Link to='#' className='iconss'><FaLinkedin className='iconstyle' style={{ width: '40px', marginBottom: '-8px' }} /><h3>LinkedIn</h3></Link>
                        <Link to='#' className='iconss'><FaGlobe className='iconstyle' style={{ width: '40px', marginBottom: '-8px' }} /><h3>Institute Site</h3></Link>





                    </div>


                    <div className='contact'>
                        <h6>Contacts</h6>
                        <hr className='link-line' />
                    </div>
                    <div className='emailwegra'>
                        <h4 PhoneIcon className='icons'>
                            <MdPhone className='iconstyle' style={{ width: '40px', marginBottom: "-8px" }} />
                            <h3>+91 9696319833, +91 8810544717</h3>
                        </h4>
                        <h4 className='icons'> <MdEmail className='iconstyle' style={{ width: '40px', marginBottom: "-8px" }} /><h3>cultural@vadodara.ac.in</h3></h4>
                        <h4 className='icons'>
                            <MdLocationOn className='iconstyle' style={{ width: '40px', marginBottom: "-8px" }} />
                            <h3>IIITV-ICD Eduaction Hub,Diu (U.T) 362520</h3>
                        </h4>
                    </div>

                </div>
                <div className="copyright">
                    <h3>@copyright-2025 Cultural and Academics Committee IIITV-ICD</h3>
                </div>

            </div>

        </div >

    )
}
