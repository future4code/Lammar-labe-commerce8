import Styled from "styled-components";

export const Card = Styled.div `
    height: 350px;
    width: 200px;
    box-shadow: 2px 2px 5px 2px LightSteelBlue;
    text-align: center;
    will-change: transform;
    transition: transform 450ms;
    background-color: white;
    margin-left: 100px;

    > img {
        width: 100%;
    }
    
    > button {
        &:hover {
            cursor: pointer;
        }
    }
    &:hover {
        transition: transform 125ms;
        transform: translateY(-10px);
    }
`









