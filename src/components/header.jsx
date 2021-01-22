import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./header.css"

function Header() {

  const [clicked, setClicked]=useState(false);

  function handleClick() {
    setClicked(!clicked);
  }

    return (
      <div className="navbar">
        <div>
          <img
            className="logo"
            alt="logo"
            src={process.env.PUBLIC_URL + "/images/Logo.PNG"}
          />

        <div className="mobile-icon" onClick={handleClick}>
          <i className={clicked ? "fas fa-times-circle" : "fas fa-hamburger" }> </i>
        </div>
        
          <div className={clicked ? "nav-links active" : "nav-links"}>
            <NavLink className="link"  to="/about"><i className="fas fa-user-tie"></i> About</NavLink>
            <NavLink className="link" to="/projects"><i className="fas fa-laptop-code"></i> Projects</NavLink>
            <NavLink className="link" to="/contact"><i className="fas fa-envelope"></i> Contact</NavLink>
            <a className="link mobile" href="https://www.linkedin.com/in/nicholas-brown-9964051a1/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i> LinkedIn</a>
            <a className="link mobile" href="https://github.com/Nickb6437" target="_blank" rel="noopener noreferrer"> <i className="fab fa-github"></i> Github</a>
          </div>   
          </div>

        

        <div className="nav-social">
          <a href="https://www.linkedin.com/in/nicholas-brown-9964051a1/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i> LinkedIn</a>
          <a href="https://github.com/Nickb6437" target="_blank" rel="noopener noreferrer"> <i className="fab fa-github"></i> Github</a>
        </div>
      
        
      </div>
    );
}

   
export default Header;