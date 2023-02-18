import React from "react";
// import { useState } from "react";
import { houses } from "../constants";
import { getItemByKey } from "../utils/localStorageFunctions";

const UserTable = ({ voted, user }) => {
    // const [display, setDisplay] = useState("block");

    let name = "";
    const userName = user.name;
    const email = user.email;
    let isVoted = "";
    if (voted) {
        name = "user-voted user-vote-box";
        isVoted = "✔";
    } else {
        name = "user-not-voted user-vote-box";
        isVoted = "❌";
    }

    const deleteVote = () => {
        houses.forEach((houseName) => {
            const votesOfHouse = getItemByKey(houseName);
            if (votesOfHouse.length > 0) {
                const allVotedUsers = getItemByKey("votedUsers");
                const newUsersArr = allVotedUsers.filter(
                    (obj) => obj.id !== user.id
                );
                const newHouseArr = votesOfHouse.filter(
                    (obj) => obj.id !== user.id
                );
                localStorage.setItem(houseName, JSON.stringify(newHouseArr));
                localStorage.setItem("votedUsers", JSON.stringify(newUsersArr));
                // window.location.reload(true);
            }
        });
    };

    const removeButton = () => {
        if (voted)
            return (
                <button className="remove-btn" onClick={deleteVote}>
                    Remove Vote
                </button>
            );
    };

    return (
        <div className={name}>
            <h5>{userName}</h5>
            <h5>{email}</h5>
            <div className="vote-status">
                <h5>{isVoted}</h5>
                {removeButton()}
            </div>
        </div>
    );
};

export default UserTable;
