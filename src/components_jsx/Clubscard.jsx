import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Clubscard({ image, clubname, clubdescription }) {
    const navigate = useNavigate()
    return (
        <div className="card">
            <div className="face face1">
                <div className="content">
                    <img src={image} alt="Club Logo" />
                    <h3>{clubname}</h3>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <p>{clubdescription}</p>
                    <a href="" onClick={() => navigate('/ClubMembers', { state: clubname })}>Club Heads</a>
                </div>
            </div>
        </div>
    );
}