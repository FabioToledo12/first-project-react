import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import Home from "./pages/Home";
import Users from "./pages/Users";

function Routed() {
    /* react-router-dom@5 -> Antigo 5.*
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/usuarios" component={Users} />
            </Switch>
        </Router>
    );*/

    /* react-router-dom@6 -> Mais Novo Dom**/
    return (
        <Router>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/usuarios" element={ <Users/> } />
            </Routes> 
        </Router>
    );
}

export default Routed