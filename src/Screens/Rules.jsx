import React from "react";
import '../components_css/Rules.css'
import '../components_res/Rules.css'
import { useLocation, useNavigate } from "react-router-dom";
import eventInfo from '../Eventdata/EventInfo'
import { li } from "framer-motion/client";
import Navbar from '../components_jsx/Navbar';

const Rules = () => {
    const eventname = useLocation().state
    // alert(eventname)
    const navigate = useNavigate()
    const handleRegisterClick = () => {
        window.location.href = eventInfo.RegisterLink;
    };


    const getImage = (path) => {
        return require(`../images/${path}.jpg`)
    }
    return (
        <>
            <Navbar />
            <div className="rules-container">
                <h1 className="rules-title">Rules And Registration</h1>

                <div className="rules-content">
                    <div className="rules-section">
                        <h2><span>Rules:</span></h2>
                        {
                            eventInfo[eventname]?.Rules?.map((item) => {
                                return <li>{item}</li>
                            })
                        }
                        <h2 className="prizes"><span>Total Prize: </span>{eventInfo[eventname]?.prize}/-</h2>
                        <div className="timing">
                            <h3 className="date"><span>Date: </span>{eventInfo[eventname]?.date}</h3>
                            <h3 className="time" ><span>Time: </span>{eventInfo[eventname]?.time}</h3>
                            <h3 className="note" ><span>Note: </span>{eventInfo[eventname]?.note}</h3>
                            <h3 className="venue"><span>Venue: </span> {eventInfo[eventname]?.venue}</h3>
                        </div>
                    </div>

                    <div className="organizers-section">
                        <h2>Organizers:</h2>
                        <div className="organizer-list">
                            <div className="organizer" style={{ overflow: "hidden" }}>
                                <div className="organizer-image"><img style={{ width: "inherit", height: "inherit" }} src={getImage(eventInfo[eventname].organisers["image1"])} alt="Organizer-01" /></div>
                                <p>{eventInfo[eventname].organisers["name1"]}</p>
                            </div>
                            <div className="organizer">
                                <div className="organizer-image"><img style={{ width: "inherit", height: "inherit" }} src={getImage(eventInfo[eventname].organisers["image2"])} alt="Organizer-02" /></div>                            <p>{eventInfo[eventname].organisers["name2"]}</p>
                            </div>
                            <div className="organizer">
                                <div className="organizer-image"><img style={{ width: "inherit", height: "inherit" }} src={getImage(eventInfo[eventname].organisers["image3"])} alt="Organizer-03" /></div>                            <p>{eventInfo[eventname].organisers["name3"]}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <button className="register-button " onClick={() => window.location.href = eventInfo[eventname]["RegisterLink"]} >Registration </button>
            </div>
        </>
    );
};

export default Rules;
