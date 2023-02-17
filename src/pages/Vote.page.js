import React from "react";
import Wrapper from "../styles/styled/Vote.styled";
import { Logo, LogoutButton, VoteBox } from "../components";
import { getItemByKey } from "../utils/localStorageFunctions";

const VotingPage = ({}) => {
    const houses = ["gryffindor", "hufflepuff", "ravenclaw", "slytherin"];
    return (
        <Wrapper>
            <div className="logo">
                <Logo />
                <LogoutButton />
            </div>
            <h3>
                Hello, {getItemByKey("loggedInUser")[0].name}! Please, make your
                vote.
            </h3>
            <div className="vote-choice">
                {houses.map((house) => (
                    <VoteBox houseName={house} />
                ))}
            </div>
        </Wrapper>
    );
};

export default VotingPage;
