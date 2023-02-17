import { PAGES } from "../constants";

import main from "../assets/images/hogwarts.png";
import Wrapper from "../styles/styled/Landing.styled";
import { Logo } from "../components";
import Login from "./Login.page";

const [, voting] = PAGES;

const Landing = ({ setPage }) => {
    return (
        <Wrapper className="landing-page">
            <nav className="header">
                <Logo />
            </nav>
            <div className="container page">
                <div className="info">
                    <h1>Welcome to Hogwarts!</h1>
                    <p>Please, log in and vote for your house!!!!</p>
                    <Login setPage={setPage} />
                </div>
                <img
                    src={main}
                    alt="love finding app"
                    className="img main-img"
                />
            </div>
        </Wrapper>
    );
};

export default Landing;
