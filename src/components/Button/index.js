import React from "react";
import { Button as ButtonCont } from "./styles";

function Button/*(props)*/ ( { children, ...props } ) {
    return(
        <ButtonCont { ...props } >{ children }</ButtonCont>
    );
}

export default Button