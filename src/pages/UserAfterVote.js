import React from "react";
import { PAGES } from "../constants";

const UserAfterVote = ({ setPage }) => {
    const [landing] = PAGES;

    const style = {
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    };
    const btnStyle = {
        width: "50%",
        height: "5rem",
        fontSize: "3rem",
        fontWeight: "bold",
    };

    const handleClick = () => {
        setPage(landing);
    };

    return (
        <div style={style} className="after-voting">
            <h1>Thank You for Voting!!!</h1>
            <button style={btnStyle} onClick={handleClick}>
                Logout
            </button>
        </div>
    );
};

export default UserAfterVote;
