import React from "react";
import { PAGES } from "../constants";

const AdminPage = ({ setPage }) => {
    const [landing] = PAGES;

    const style = {
        height: "100%",
        width: "100%",
    };

    const handleClick = () => {
        setPage(landing);
    };
    return (
        <div>
            Welcome to AdminPage
            <button style={style} onClick={handleClick}>
                Logout
            </button>
        </div>
    );
};

export default AdminPage;
