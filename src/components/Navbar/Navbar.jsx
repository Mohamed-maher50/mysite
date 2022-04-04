import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
function Navbar() {
  let [active,setActive] = useState(false);

  let changeActiveNav = ()=>{
    console.log('work')
    setActive(!active)
  }
  return (
    <nav>
      <div className="container">
        <div className="subnav">
          <div className="logo">
            <img src="../imgs/156941914_2972220119767233_5127668877390390328_n.jpg" />
            <span className="name">mohamed maher</span>
            
          </div>

          <ul className={active ? "active":""}>
            <NavLink to={'#'} className="nav-link active">Home</NavLink>
            <NavLink to={'#'} className="nav-link">Writing</NavLink>
            <NavLink to={'#'} className="nav-link">About</NavLink>
            
          
          </ul>
          <div className="nav-icon" onClick={()=>changeActiveNav()}>  
          
          <i class={` ${active ? "fa fa-times active-icon":" fa fa-bars "} `} aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
