import React from "react";
import { H1 } from "./styles";

function Title/*(props)*/ ( { children } ) {

    return(
        //<H1>{ props.children }</H1>
        <H1>{ children }</H1>
    );
}

export default Title