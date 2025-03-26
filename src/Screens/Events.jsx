import React from 'react';
import '../components_css/Event.css'
import '../components_res/Event.css'
import Eventscard from '../components_jsx/Eventscard';
// import '../components_css/Event.css'
import deepjyoti02 from '../images/deepjyoti02.png'
// import chakra05 from '../images/chakra05.png'
import chakra08 from '../images/chakra08.png'
import chakra09 from '../images/chakra09.png'
import stvyalogo from '../images/stavyalogo.png'
// import design from '../images/design.png'
// import profile from '../images/profile.jpg'
import pixellence01 from '../images/pixellence-3.0.jpg'
import nritayakala from '../images/nritayakala.jpg'
import chitarkala from '../images/chitarkala.jpg'
import rangoliclash from '../images/rangoliclash.jpg'
import dubkadarbar from '../images/dubkadarbar.jpg'
import bollywoodquize from '../images/bollywoodquize.jpg'
import personrewind from '../images/personrewind.jpg'
import antakshari01 from '../images/antakshari01.jpg'
import antakshari02 from '../images/antakshari02.jpg'
import urbanlense from '../images/urbanlense.jpg'
import debatecomp from '../images/debatecomp.jpg'
import modelUN from '../images/modelUN.jpg'
import shashwat from '../images/shashwat.jpg'
import shabdsangam from '../images/shabdsangam.jpg'
import culturalnight from '../images/culturalnight.jpg'
import avlekha from '../images/avlekha.jpg'
import Navbar from '../components_jsx/Navbar';

export default function Events() {
  return (
    <>
      <Navbar />
      <div className="E-image-div">
        <img className="E-deep" src={deepjyoti02} alt="Deepjyoti logo" />
        <img className="E-stavya" src={stvyalogo} alt="Stavya logo" />
        <hr className="E-line" />
        <img className="E-chakra08" src={chakra08} alt="Chakra08 logo" />
        <img className="E-chakra09" src={chakra09} alt="Chakra09 logo" />
        {/* <img className='E-design' src={design} alt="Design logo" /> */}
      </div>


      <div className="E-member-page">
        <div className="E-logo-container">
          <div className="circle"></div>
          <h3 className="E-main-text">EVENTS</h3>
          <p className="E-sub-text">cultural committee</p>
          <div className="circle"></div>
        </div>
      </div>

      <div className="wrapper">
        <Eventscard
          eventname={'Pixellence 3.0'}
          backgroundImage={pixellence01}
        />
        <Eventscard
          eventname={'Nrityakala'}
          backgroundImage={nritayakala}
        />
        <Eventscard
          eventname={'Chitrakala'}
          backgroundImage={chitarkala}
        />
        <Eventscard
          eventname={'Rangoli Clash'}
          backgroundImage={rangoliclash}
        />
        <Eventscard
          eventname={'Dub Ka Darbar'}
          backgroundImage={dubkadarbar}
        />
        <Eventscard
          eventname={'Bollywood Quiz'}
          backgroundImage={bollywoodquize}
        />
        <Eventscard
          eventname={'Persona Rewind'}
          backgroundImage={personrewind}
        />
        <Eventscard
          eventname={'Antakshari'}
          backgroundImage={antakshari01}
        />
        <Eventscard
          eventname={'Urban Harmony'}
          backgroundImage={antakshari02}
        />
        <Eventscard
          eventname={'Urban Lens'}
          backgroundImage={urbanlense}
        />
        <Eventscard
          eventname={'Debate Competition'}
          backgroundImage={debatecomp}
        />
        <Eventscard
          eventname={'Model United Nation'}
          backgroundImage={modelUN}
        />
        <Eventscard
          eventname={'Shashwat'}
          backgroundImage={shashwat}
        />
        <Eventscard
          eventname={'ShabdSangam'}
          backgroundImage={shabdsangam}
        />
        <Eventscard
          eventname={'Avlekha'}
          backgroundImage={avlekha}
        />
        <Eventscard
          eventname={'Cultural Night'}
          backgroundImage={culturalnight}
        />
      </div>
    </>

  );
}
