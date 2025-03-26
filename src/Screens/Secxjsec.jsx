import React from 'react'
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../components_css/Secxjsec.css'
import '../components_res/Secjsec.css'
import data from '../Sec&JsecData/data'
import { Link, useLocation } from 'react-router-dom';
import deepjyoti02 from '../images/deepjyoti02.png'
import chakra05 from '../images/chakra05.png'
import chakra08 from '../images/chakra08.png'
import chakra09 from '../images/chakra09.png'
import stvyalogo from '../images/stavyalogo.png'
import design from '../images/design.png'
import dummy from '../images/profile.jpg'
import Navbar from '../components_jsx/Navbar';

export default function Secxjsec() {
    const state = useLocation().state
    console.log(state)
    console.log(data[state])

    const getimage = (input) => {
        return require(`../images/${input}.jpg`)
    }
    return (
        <>
            <Navbar />
            <div className="sj-image-div">
                <img className='sj-deep' src={deepjyoti02} />
                <img className='sj-stavya' src={stvyalogo} />
                <hr className='sj-line' />
                <img className='sj-chakra08' src={chakra08} />
                <img className='sj-chakra09' src={chakra09} />
            </div>
            <div className="sj-member-page">
                <div className="sj-logo-container">
                    <h3 className="sj-main-text">CLUBS HEADS</h3>
                    <p className="sj-sub-text">cultural committee</p>
                </div>
            </div>
            <div className='wrapper-01'>
                <div className="inline card">
                    <div
                        className="front"
                        style={{
                            backgroundImage: `url(${getimage(data[state].secretary.image)})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            opacity: 0.8,
                        }}
                    >
                        <hr />
                    </div>
                    <div className="back">
                        <div className="head-data">
                            <h1>{data[state].secretary.name}</h1>
                            <h2>{data[state].secretary.position}</h2>
                            <h4>{data[state].secretary.batch}</h4>
                            <p>{data[state].secretary.about}</p>
                            <h4>{data[state].secretary.contact}</h4>
                            <p>{data[state].secretary.email}</p>
                            <Link to={data[state].secretary.instagram}><InstagramIcon /></Link>
                            <Link to={data[state].secretary.linkedin}><LinkedInIcon /></Link>
                        </div>
                    </div>
                </div>

                <div className="inline card">
                    <div
                        className="front"
                        style={{
                            backgroundImage: `url(${getimage(data[state].jointsecretary.image)})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            opacity: 0.8,
                        }}
                    >
                        <hr />
                    </div>
                    <div className="back">
                        <div className="head-data">
                            <h1>{data[state].jointsecretary.name}</h1>
                            <h2>{data[state].jointsecretary.position}</h2>
                            <h4>{data[state].jointsecretary.batch}</h4>
                            <p>{data[state].jointsecretary.about}</p>
                            <h4>{data[state].jointsecretary.contact}</h4>
                            <p>{data[state].jointsecretary.email}</p>
                            <Link to={data[state].jointsecretary.instagram}><InstagramIcon /></Link>
                            <Link to={data[state].jointsecretary.linkedin}><LinkedInIcon /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
