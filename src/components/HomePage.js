import React from "react";
import {  Link} from "react-router-dom";

function HomePage(){

    return (<div className="jumbotron">
         <h1>Pluralsight Administration</h1>
        <p>React, flux and react router for ultra responsive web apps</p>
        <Link to="/about">About</Link>
    </div>);
}

export default HomePage;