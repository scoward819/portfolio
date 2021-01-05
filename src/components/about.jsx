import React from "react";
import "./about.css"

function About() {
    return (
        <div className="wrapper">
            <div className="header"> 
            <div>
            <img className="circle-img" src={process.env.PUBLIC_URL + "/images/ProfilePic.jpg"} alt="Profile"/>
            </div>
                <h1 id="heading">Hi I'm <br /> Nick Brown </h1> 
            </div>

            <h1 id="heading2"><strong>An Aspiring Web Develeoper!</strong></h1>

            <div className="text-area">   
                <p>Welcome & thank you for visiting my portfolio site. <br/>
                Like many in 2019 I found myself made redundant due to the events of the year. <br />
                I have been in print & design for 14 years with experince in lithogarphic print, digital print, print finishing <br />
                & digital design, using such designs suites as Adobe CS6, indesign, photoshop, Illustaror & Dreamweaver, however... <br />
                I feel this now opens a great opportunity for me to branch out, learn new skills and start a fresh. <br/>
                <br />I started to code during my 5 months of furlough and have self taught myself the basics of </p>
                
               
                <div className="iconGrid">
                <div><img className="icon html" src={process.env.PUBLIC_URL + "/images/html5.png"} alt="HTML 5"/></div>
                <div><img className="icon html" src={process.env.PUBLIC_URL + "/images/css3.png"} alt="CSS 3"/></div>
                <div><img className="icon html" src={process.env.PUBLIC_URL + "/images/js.png"} alt="Js"/></div>
                <div><img className="icon jquery" src={process.env.PUBLIC_URL + "/images/jQuery.webp"} alt="J query"/></div>
                <div><img className="icon bootstrap" src={process.env.PUBLIC_URL + "/images/bootstrap-5.png"} alt="Bootstrap 5"/></div>
                <div><img className="icon node" src={process.env.PUBLIC_URL + "/images/Node-js.png"} alt="Node JS"/></div>
                <div><img className="icon babel" src={process.env.PUBLIC_URL + "/images/babel.png"} alt="Babel"/></div>
                <div><img className="icon es6" src={process.env.PUBLIC_URL + "/images/es6.png"} alt="es6"/></div>
                <div><img className="icon express" src={process.env.PUBLIC_URL + "/images/ExpressJS.png"} alt="Express JS"/></div>
                <div><img className="icon mongo" src={process.env.PUBLIC_URL + "/images/MongoDB.png"} alt="Mongo DB"/></div>
                <div><img className="icon npm" src={process.env.PUBLIC_URL + "/images/npm-logo.png"} alt="npm"/></div>
                <div><img className="icon react" src={process.env.PUBLIC_URL + "/images/React.png"} alt="React"/></div>
                <div><img className="icon github" src={process.env.PUBLIC_URL + "/images/github.png"} alt="Github"/></div>
                <div><img className="icon hyper" src={process.env.PUBLIC_URL + "/images/hyper.png"} alt="Hyper"/></div>
                <div><img className="icon vscode" src={process.env.PUBLIC_URL + "/images/vscode-logo.png"} alt="vs code"/></div>
                <div><img className="icon atom" src={process.env.PUBLIC_URL + "/images/atom.png"} alt="Atom"/></div>
                </div>
                <p><em>HTML 5 | CSS 3 | JavaScript | JQuery | NodeJS | ExpressJS | Bootstrap 5 | ES6 | Babel | MongoDB | React | Github </em><br />
                <br />Please use this site to look through my projects and watch my progression.</p>

                <h4>Nick</h4>
            </div>
           
         </div>
    );
}

export default About;     