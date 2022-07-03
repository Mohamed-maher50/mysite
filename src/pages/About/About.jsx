import React from "react";
import "./About.css";

function About() {
  return (
    <div>
      <div className="container">
        <h1 className="h-large text-center p_box">Hey there.</h1>
      </div>
      <div className="About_info">
        <div className="About_box">
          <img src="../imgs/156941914_2972220119767233_5127668877390390328_n.jpg" width={600} height={600} />
        </div>
        <div className="About_box p_box">
        <p> <span style={{"color":"var(--main-color)"}}>I’m Mohamed</span>, a Front-end Web Developer Based In Elsharqia, Egypt.</p>
        <p>I’m study at Sinai University, Department of Computer Science , and I am 22 years old</p>
        <p>My focus is on creating engaging, accessible & performant interfaces for humans.</p>
        </div>
      </div>
    </div>
  );
}
export default About;
