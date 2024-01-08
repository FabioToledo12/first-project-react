import styled from "styled-components";

export const ContainerItens = styled.div `
    border-radius: 61px 61px 0px 0px;
    background: linear-gradient(157deg, rgba(255, 255, 255, 0.60) 0.84%, rgba(255, 255, 255, 0.60) 0.85%, rgba(255, 255, 255, 0.15) 100%);
    backdrop-filter: blur(22.5px);
    padding: 50px 36px;

    display: flex;
    flex-direction: column;
    /*align-items: flex-start;*/
    height: 100%;

    ${ props => props.isBlur && `
        backdrop-filter: blur(22.5px);        
        min-height: calc(100vh - 170px);
    ` }
`;