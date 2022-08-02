import styled from "styled-components";

export const PageArea = styled.div`
    --primary-color: #141414;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--primary-color);
`;

export const Login = styled.div`
    .container {
        width: 450px;
        height: 560px;

        background: #242424;
        border-width: 1px 3px 3px 1px;
        border-style: solid;
        border-color: #000000;
        border-radius: 150px 0px;
    }
`;
