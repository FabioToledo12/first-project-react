import styled from "styled-components";
import Background from "../../assets/background.svg"

/*import { Link } from "react-router-dom";*/

export const Container = styled.div `
    background: url(${Background});
    background-size: cover;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;

    height: 100%;
    min-height: 100vh;
`;

export const Image = styled.img `
    margin-top: 30px;
`;

export const InputLabel = styled.p `
    color: #EEE;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px; /* 122.222% */
    padding-left: 25px;

    margin-top: 10px;
`;

export const Input = styled.input `
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    width: 342px;
    height: 58px;
    padding-left: 25px;

    border: none;
    outline: none;

    color: #FFF;
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: normal;
    line-height: 28px;

    /*margin-bottom: 34px;*/
`;

export const User = styled.li`
    display: flex;
    justify-content: space-around;
    align-items: center;

    border-radius: 14px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    width: 342px;
    height: 58px;

    border: none;
    outline: none;
    margin-top: 20px;

    p {
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 28px ;
        color: #FFFFFF;
    }

    button{
        background: none;
        border: none;
        cursor: pointer;
    }
`