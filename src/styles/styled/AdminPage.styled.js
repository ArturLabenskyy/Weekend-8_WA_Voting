import styled from "styled-components";

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .user-vote-table {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .user-vote-box {
        width: 60%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    h5 {
        margin: auto 1rem;
    }

    .user-voted {
        background-color: #faeab1;
    }

    .user-not-voted {
        background-color: #c58940;
    }

    .user-table-first-line {
        background-color: #e97777;
    }

    button {
        height: 4rem;
        width: 10rem;
        font-size: 2.5rem;
        text-align: center;
    }
`;
export default Wrapper;
