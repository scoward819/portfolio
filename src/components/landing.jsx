import React from "react";
import "./landing.css";

function Landing() {

    return(
        <div>
        <img className="Landing" src={process.env.PUBLIC_URL + "/images/Logo.png"} alt="Logo" />
        <h1>Nick Brown <br/> Aspiring Web Develeoper!</h1>
        </div>
    );
} 

export default Landing;