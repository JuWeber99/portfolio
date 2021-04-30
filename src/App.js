import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./styles/main.css";
import brand from "./resources/brand.png";
import {PageRouter} from "./PageRouter"
import {BrowserRouter} from "react-router-dom";

function App() {

    return (
        <div className="main">
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
