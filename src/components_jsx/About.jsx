import React from 'react';
import deepjyoti01 from '../images/deepjyoti01.png';
import deepjyoti02 from '../images/deepjyoti02.png';
import eyes from '../images/eyes.png';
import chakra04 from '../images/chakra04.png';
import stavyalogo from '../images/stavyalogo.png';
import '../components_css/About.css';
import '../components_res/About.css';

export default function About() {
  return (
    <div className="about-main-div" id='about'>
      {/* Section with Text Animation */}
      <div className="about-para">
        <h3 className="about">ABOUT</h3>
        <hr className="about-line" />
        <img className="dp-01" src={deepjyoti01} alt="deepjyoti01" />
        <img className="img-eyes" src={eyes} alt="eyes" />

        <div className="para-01">
          Stavya is the annual cultural festival of Indian Institute of Information Technology Vadodara-ICD Stavya
          serves as a platform for students to show their talents in performing arts and aesthetic arts, where
          students can collaborate and team up with other students to bring out the best in them.
        </div>

        <div className="para-02">
          The Annual Cultural Festival of IIIT Vadodara-ICD gets its name from the Esperanto word "Stavya", meaning
          "Creativity". Since its inception in 2022 as an intra-institute fest in 2022, it has consistently been a huge platform for individuals to showcase their talents. A spectacular extravaganza, Stavya is home to
          expression through art, music, drama, dance, and culture.
        </div>

        <div className="para-03">
          Join us to celebrate creativity, join us, to celebrate Stavya !!
        </div>

        <div className="para-res">
          Stavya, the annual cultural festival of IIIT Vadodara-ICD, is a vibrant celebration of creativity, talent, and collaboration. Derived from the Esperanto word for "Creativity," Stavya has grown since its inception in 2022 into a spectacular platform for students to showcase their skills in performing and aesthetic arts. From music and dance to drama and visual arts, Stavya brings together passionate individuals to express themselves and create unforgettable experiences. Join us in celebrating the spirit of creativity—join us for Stavya!
        </div>
      </div>

      <div className="chakra-div">
        <div className='my-div-01'>

          <div className='contentsy1'> <span>60k+</span>
            <h4>worth prizes to win</h4></div>
          <img src={chakra04} alt="chakra" />

        </div>

        <div className='my-div-02'>
          <div className='contentsy2'>
            <span>12+</span>
            <h4>events to participate</h4>
          </div>
          <img src={chakra04} alt="chakra" />

        </div>

        <div className='my-div-03'>
          <div className='contentsy3'><span>7D+</span>
            <h4>long fest to participate</h4></div>
          <img src={chakra04} alt="chakra" />
        </div>


        <img className="dp-02" src={deepjyoti02} alt="deepjyoti02" />
        <hr className="dp-line" />
        <img className="stv-logo" src={stavyalogo} alt="stavyalogo" />
      </div>
    </div>
  );
}
