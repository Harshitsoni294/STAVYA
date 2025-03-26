import React from 'react';
import Clubscard from '../components_jsx/Clubscard';
import stvyalogo from '../images/stavyalogo.png';
import '../components_css/Club.css';
import '../components_res/Club.css';

import deepjyoti02 from '../images/deepjyoti02.png'
// import chakra05 from '../images/chakra05.png'
import chakra08 from '../images/chakra08.png'
import chakra09 from '../images/chakra09.png'
// import design from '../images/design.png'
import capturelogo from '../images/capturelogo.png'
import artslogo from '../images/artslogo.png'
import eloquencelogo from '../images/eloquencelogo.png'
import musiclogo from '../images/musiclogo.png'
import essencelogo from '../images/essencelogo.png'
import debatelogo from '../images/debatelogo.png'
import beatslogo from '../images/beatslogo.png'
import Navbar from '../components_jsx/Navbar';


export default function Clubs() {
  return (
    <>
      <Navbar />
      <div className="C-club-page">
        <div className="C-logo-container">
          <h3 className="text-green-600 C-main-text">CLUBS</h3>
          <p className="C-sub-text">Cultural Committee</p>
        </div>
      </div>

      <div className="C-image-div">
        <img className="C-deep" src={deepjyoti02} alt="Deepjyoti logo" />
        <img className="C-stavya" src={stvyalogo} alt="Stavya logo" />
        <hr className="C-line" />
        <img className="C-chakra08" src={chakra08} alt="Chakra08 logo" />
        <img className="C-chakra09" src={chakra09} alt="Chakra09 logo" />
        {/* <img className='C-design' src={design} alt="Design logo" /> */}
      </div>


      <div className="container">
        <Clubscard
          image={capturelogo}
          clubname="Captur: Photography Club"
          clubdescription="Capture is the Photography Club of IIITV-ICD. This club consists of photo enthusiasts who are willing to showcase the best of their works. You will find a fine blend of people who are well technically read in the field of photography."
        />
        <Clubscard
          image={eloquencelogo}
          clubname="Eloquence: Drama Club"
          clubdescription="Eloquence is the Drama Club of IIITV-ICD. This club is responsible to conducts all the events that consists of plays and much more. You will find people who have been actively engaged with the acting fraternities across the board. 
          "
        />
        <Clubscard
          image={artslogo}
          clubname="Genesis: Arts Club"
          clubdescription="Genesis is the Art Club of IIITV-ICD. Since its inception, the commune of the club has been growing at an unprecedented rate. You will find people who share artistic interests and strive to fabric Genesis an arena of colors."
        />
        <Clubscard
          image={musiclogo}
          clubname="Vehemence: Music Club"
          clubdescription="Vehemence is the Music Club of IIITV-ICD. It is the go-to club for all the music maniacs out there. It is a wholesome community of people who creates music and pledges to enrich everyone on every musical note possible."
        />

        <Clubscard
          image={beatslogo}
          clubname="Beats: Dance Club"
          clubdescription="Beats, the Dance Club of IIITV-ICD, offers a platform to express your inner emotions and rediscover the pure joy of dancing. Though we come from diverse cultures, our hearts synchronize as we connect through the art of movement."
        />
        <Clubscard
          image={essencelogo}
          clubname="Essence: Poetry Club"
          clubdescription="Essence is the literary club of IIITV-ICD, uniting readers, writers, and storytellers. It nurtures creativity and fosters a love for literature. The club celebrates the beauty of language and words. From poets to budding authors."
        />
        <Clubscard
          image={debatelogo}
          clubname="Uktam: Orators Society"
          clubdescription="Uktam is the oratory club of IIIT-VICD.The club focuses on encouraging constructive discussions and debates regarding various subjects including but not limited to societal,economic,philosophical and environment issues."
        />
      </div>
    </>
  );
}