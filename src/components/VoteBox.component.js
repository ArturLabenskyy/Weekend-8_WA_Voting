import React from "react";
import { useState } from "react";
// const houses = ["Gryffindor", "hufflepuff", "ravenclaw", "slytherin"];
import gryffindor from "../assets/images/gryffindor.png";
import hufflepuff from "../assets/images/hufflepuff.png";
import ravenclaw from "../assets/images/ravenclaw.png";
import slytherin from "../assets/images/slytherin.png";

import Modal from "./Modal.component";

const VoteBox = ({ houseName }) => {
    const [hiddenButton, setButton] = useState("none");

    let imageUrl = "";

    switch (houseName) {
        case "gryffindor":
            imageUrl = gryffindor;
            break;
        case "hufflepuff":
            imageUrl = hufflepuff;
            break;
        case "ravenclaw":
            imageUrl = ravenclaw;
            break;
        case "slytherin":
            imageUrl = slytherin;
    }

    const handleClick = () => {
        setButton("block");
    };
    return (
        <div className="vote-box" onClick={handleClick}>
            <img src={imageUrl} alt={houseName} />
            <h4>Total Votes: 0</h4>
            <div className="vote-buttons">
                <button
                    className="vote-button"
                    style={{ display: hiddenButton }}
                >
                    Confirm
                </button>
                <button
                    className="vote-button"
                    style={{ display: hiddenButton }}
                >
                    Change
                </button>
            </div>
        </div>
    );
};

export default VoteBox;
