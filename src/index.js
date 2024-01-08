import React from 'react';
import ReactDOM from "react-dom";
import GlobalStyle from "./styles/globalStyle";

import Routed from "./routes";
//import Home from "./pages/Home";

ReactDOM.render(
    <> 
        <Routed/>
        <GlobalStyle /> 
    </>, 
    document.getElementById("root")
);