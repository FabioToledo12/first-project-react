import React from "react";
import { ContainerItens as ContItens} from "./styles";

function ContainerItens/*(props)*/( { children, isBlur } ) {

    return(
        //<H1>{ props.children }</H1>
        <ContItens isBlur = { isBlur } >{ children }</ContItens>
    );
}

export default ContainerItens