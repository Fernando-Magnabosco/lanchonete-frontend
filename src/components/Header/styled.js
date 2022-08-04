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

export const Product = styled.div`
    .cabecalho{
        height: 70px;
        background: #242424;

        font-family: 'Inter', sans-serif;
        color: #FB0043;
        font-size: 29px;

        border-width:0px 0px 2px 0px ;
        border-style: solid;
        border-color: #0D0D0D;

        h2{
            position: center;
            text-align: center;
        }
    }
    
`;
