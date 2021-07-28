import styled from "styled-components";

export const StyledFrase = styled.p`
    display: flex;
    border-color: black;
    border-width: 5px;
    border-radius: 25px;
    border: solid;
    height: 50px;
    font-size: 20px;
    align-items: center;
    justify-content: center;
    margin-left: 20px;
    margin-right: 20px;
    background-color: ${({active}) => active ? "#fa845c" : "white"};
`;

