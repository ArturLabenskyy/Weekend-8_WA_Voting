import React from "react";

const UserTable = ({ voted, user }) => {
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

    const removeButton = () => {
        if (voted) return <button className="remove-btn">Remove Vote</button>;
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
