import React from "react";
import "./Home.css";
function Home() {
  return (
    <div className="container setspace" style={{"padding":"80px 0px"}}>
      <div className="setSpace">
        <h2 className="myName">HELLO, MY NAME IS MOHAMEDM MAHER</h2>
        <h1 className="h-large">I make websites.</h1>
        <p className="aboutMe">
          I’m a front-end developer and co-founder of Codista, a software studio
          in Vienna. I also write about the web on my Blog and on Twitter.
        </p>
      </div>
    </div>
  );
}

export default Home;
