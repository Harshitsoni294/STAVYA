import React from 'react'
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import deepjyoti02 from '../images/deepjyoti02.png'
import chakra05 from '../images/chakra05.png'
import chakra08 from '../images/chakra08.png'
import chakra09 from '../images/chakra09.png'
import design from '../images/design.png'
import stvyalogo from '../images/stavyalogo.png'
import profile from '../images/profile.jpg'
import { style } from 'framer-motion/client';
import Membercard from '../components_jsx/Membercard'
import '../components_css/Member.css'
import '../components_res/Member.css'
import { useLocation } from 'react-router-dom';
import memberdata from '../memberdata/memberdata';
import Navbar from '../components_jsx/Navbar';

export default function Members() {

  const getimage = (input) => {
    return require(`../images/${input}.jpg`)
  }
  return (
    <>
      <Navbar />
      <div className="M-image-div">
        <img className='M-deep' src={deepjyoti02} />
        <img className='M-stavya' src={stvyalogo} />
        <hr className='M-line' />
        <img className='M-chakra08' src={chakra08} />
        <img className='M-chakra09' src={chakra09} />
      </div>

      <div className="M-member-page">
        <div className="M-logo-container">
          <h3 className="M-main-text">MEMBERS</h3>
          <p className="M-sub-text">Cultural Committee</p>
        </div>
      </div>

      <div className="member-data">
        <div className="special">
          <Membercard item={memberdata[0]} />
        </div>
        {
          memberdata.map((item, i) => {
            if (i != 0)
              return <Membercard item={item} />
          })
        }

      </div>
    </>
  )
}
