import { useState, useEffect } from "react";

import { PAGES } from "./constants";
import { users } from "./data";

import { Landing, Vote } from "./pages";

import "./styles/App.css";

// users = localStorage.getItem("userData")
//     ? JSON.parse(localStorage.getItem("userData"))
//     : null;

const App = () => {
    const [page, setPage] = useState("landing");

    const [landing, voting] = PAGES;

    const data = [...users];
    localStorage.setItem("usersData", JSON.stringify(data));
    switch (page) {
        case landing:
            return <Landing setPage={setPage} />;
        case voting:
            return <Vote setPage={setPage} />;
        default:
            return <Landing setPage={setPage} />;
    }
};

export default App;
