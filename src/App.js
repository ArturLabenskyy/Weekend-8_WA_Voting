import { useState } from "react";

import { PAGES, houses } from "./constants";
import { users } from "./data";

import { Landing, Vote, UserAfterVote, AdminPage } from "./pages";

import "./styles/App.css";

// users = localStorage.getItem("userData")
//     ? JSON.parse(localStorage.getItem("userData"))
//     : null;

const App = () => {
    const [page, setPage] = useState("landing");

    const [landing, voting, userAfterVote, adminPage] = PAGES;

    const data = [...users];

    if (localStorage.getItem("Gryffindor") === null) {
        houses.forEach((el) => {
            localStorage.setItem(el, [JSON.stringify([])]);
        });
    }

    if (localStorage.getItem("votedUsers") === null) {
        localStorage.setItem("votedUsers", JSON.stringify([]));
    }
    localStorage.setItem("usersData", JSON.stringify(data));
    switch (page) {
        case landing:
            return <Landing setPage={setPage} />;
        case voting:
            return <Vote setPage={setPage} />;
        case userAfterVote:
            return <UserAfterVote setPage={setPage} />;
        case adminPage:
            return <AdminPage setPage={setPage} />;
        default:
            return <Landing setPage={setPage} />;
    }
};

export default App;
