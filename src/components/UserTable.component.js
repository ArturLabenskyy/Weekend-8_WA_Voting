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
    return (
        <div className={name}>
            <h5>{userName}</h5>
            <h5>{email}</h5>
            <h5>{isVoted}</h5>
        </div>
    );
};

export default UserTable;
