import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./styles/main.css";
import brand from "./resources/brand.png";
import {PageRouter} from "./PageRouter"
import {BrowserRouter} from "react-router-dom";

function App() {

    return (
        <div className="main">
            <div className={"head"}>
                <img src={brand} width={150} height={100}/>
                <h1 style={{marginLeft: "20px"}}>Cybersec & Developement</h1>
                <h4><u>Created by: Julian Weber</u></h4>
            </div>
            <Navbar/>
            <BrowserRouter>
                <PageRouter/>
            </BrowserRouter>
            {/* <div className="presentation">
        <div className={"card"}>
          <h1>Meine Git-Projekte</h1>
          <SlideShow content={projectDetails} type={"github"} />
        </div>
        <div className={"card"}>
          <h1>Meine Hangouts</h1>
          <SlideShow content={linkings} />
        </div>
      </div>*/}
        </div>
    );
}

export default App;
