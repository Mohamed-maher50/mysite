import React from "react";
import "./IconMode.css";

function IconMode(props) {
  return (
    <div className="container">
      <div className="iconMode"onClick={()=>props.changeMode()}>
    
          <i className={props.mode? "fa fa-sun-o":"fa fa-moon-o"} ></i>
      </div>
    </div>
  );
}

export default IconMode;
