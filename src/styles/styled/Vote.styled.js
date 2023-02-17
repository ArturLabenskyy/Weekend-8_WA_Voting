import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: #f2f2f2;

    .logo {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }

    h2 {
        width: 80%;
    }

    .vote-choice {
        height: 80vh;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }
    .vote-box {
        height: 80%;
        width: 20%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        margin-bottom: 1rem;
        border: 1px red solid;
    }

    .vote-box img {
        width: 100%;
        height: 70%;
        border: 3px black solid;
    }

    .vote-buttons {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }

    .vote-buttons h2 {
        text-align: center;
    }

    .vote-button {
        display: block;
        height: 5rem;
        width: 10rem;
        margin-bottom: 1rem;
        font-size: 2rem;
    }
`;
export default Wrapper;
