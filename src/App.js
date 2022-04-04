import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Projects from "./components/Projects/Projects";
import Project from "./components/project/Project";
import Href from './hrefs/Href'
import IconMode from "./components/icon/IconMode";
import { useState } from "react";
let classNameApp = "App dark";


function App() {
  let [DarkMode,SetDarkMode] =useState(true);
  DarkMode?classNameApp="App dark" :classNameApp="App";

  let changeMode = ()=>{
    SetDarkMode(!DarkMode)
  }
  return (
    <BrowserRouter>
      <div className={classNameApp}>
      <Routes>
        <Route path="/" element={
          <>
                   <Navbar />
                   <Home />
                   <Projects hrefs={Href}/>
                   <IconMode changeMode={changeMode} mode={DarkMode}/>
          </>
        }/>

        <Route path="/project/:id" element={<Project  hrefs={Href}/>}/>
      </Routes>
     
      </div>

      
    </BrowserRouter>
  );
}

export default App;
