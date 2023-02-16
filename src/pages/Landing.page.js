import { PAGES } from "../constants";

import main from "../assets/images/hogwarts.png";
import Wrapper from "../styles/styled/Landing.styled";
import { Logo } from "../components";

const [, login] = PAGES;

const Landing = ({ setPage }) => {
    return (
        <Wrapper>
            <nav>
                <Logo />
            </nav>
            <div className="container page">
                <div className="info">
                    <h1>Welcome to Hogwarts!</h1>
                    <p>Please, log in and vote for your house!!!!</p>
                    <button
                        onClick={() => setPage(login)}
                        className="btn btn-hero"
                    >
                        Log In
                    </button>
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
