import React from "react";

import gryffindor from "../assets/images/gryffindor.png";
import hufflepuff from "../assets/images/hufflepuff.png";
import ravenclaw from "../assets/images/ravenclaw.png";
import slytherin from "../assets/images/slytherin.png";

const VoteBox = ({ houseName, clickFunction, voteHouse }) => {
    let imageUrl = "";
    switch (houseName) {
        case "Gryffindor":
            imageUrl = gryffindor;
            break;
        case "Hufflepuff":
            imageUrl = hufflepuff;
            break;
        case "Ravenclaw":
            imageUrl = ravenclaw;
            break;
        case "Slytherin":
            imageUrl = slytherin;
            break;
        default:
    }

    const onHouseClick = () => {
        clickFunction();
        voteHouse(houseName);
    };
    const numberOFVotes = JSON.parse(localStorage.getItem(houseName)).length;
    return (
        <div className="vote-box" onClick={onHouseClick}>
            <img src={imageUrl} alt={houseName} />
            <h4>Total Votes: {numberOFVotes}</h4>
        </div>
    );
};

export default VoteBox;
