import styled from "styled-components";

export const CarrinhoContainer = styled.div `
      display: inline-block;
      border: solid 1px;
`
export const CardCarrinho = styled.div `
    height: 200px;
    width: 200px;
    box-shadow: 2px 2px 5px 2px LightSteelBlue;
    text-align: center;
    will-change: transform;
    transition: transform 450ms;
    background-color: white;
    margin-rigth: 100px;

    > img {
        width: 40%;
    }
    
    > button {
    width:90;
    height:10;
    border: none;
    padding: 10px;
    text-decoration: none;
    cursor: pointer;
    transition: transform 3s;
    border-radius: 5px;
    align-items: center;  

}        &:hover {
            cursor: pointer;
        }
    }
    &:hover {
        transition: transform 125ms;
        transform: translateY(-10px);
    }` 
