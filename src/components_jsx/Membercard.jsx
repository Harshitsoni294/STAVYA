import React from 'react';
import '../components_css/Member.css';
// import '/Member.css';
import { Link } from 'react-router-dom';
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import dummy from '../images/profile.jpg';
// import dummy from '../images/ajaydeep.jpg';
import memberdata from '../memberdata/memberdata';

export default function Membercard({ item }) {

  const getimage = (input) => {
    return require(`../images/${input}.jpg`);
  };

  return (
    <div className="memcard">
      {/* <div className='text-red-500'>hello maalik</div> */}
      <img src={getimage(item.image)} alt={`${item?.memberName || 'Member'}'s profile`} />
      <div className="upper"></div>
      <div className="lower"></div>
      <div className="memtext">
        <h1>{item?.memberName}</h1>
        <h2>{item?.positionName}</h2>
        <h5>{item?.batch}</h5>
        {/* <p>{item?.aboutmember}</p> */}
        <h4>{item?.contact}</h4>
        <p className='email'>{item?.email}</p>
        <div>
          <Link to={item?.instagram}><InstagramIcon /></Link>
          <Link to={item?.linkedin}><LinkedInIcon /></Link>
        </div>
      </div>
    </div>
  );
}
