import styled from "styled-components";

const Wrapper = styled.div`
    .info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    nav {
        width: var(--fluid-width);
        max-width: var(--max-width);
        margin: auto auto;
        height: var(--nav-height);
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .page {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 1rem;
    }
    h1 {
        font-weight: 700;
        span {
            color: var(--red-dark);
        }
    }
    p {
        color: var(--grey-600);
    }
    .main-img {
        display: block;
        align-self: center;
    }
    @media (min-width: 992px) {
        .page {
            grid-template-columns: 1fr 1fr;
            column-gap: 3rem;
        }
        .main-img {
            display: block;
        }
    }
`;
export default Wrapper;
