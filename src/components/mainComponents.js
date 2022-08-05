import styled from "styled-components";

export const Template = styled.div``;

export const PageContainer = styled.div`
    max-width: 1000px;
    margin: auto;
`;

export const PageTitle = styled.h1`
    font-size: 27px;
`;

export const PageBody = styled.div``;

export const ErrorMessage = styled.div`
    color: #FB0043;
`;

export const Fake = styled.div`
    background-color: #DDD;
    height: ${props=>props.height || 20}px;
`;
