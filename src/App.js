import React from "react";
import SlideShow from "./components/SlideShow/SlideShow";
import Navbar from "./components/Navbar/Navbar";
import "./styles/main.css";
import hlfLogo from "./resources/hlf.png";
import htbLogo from "./resources/htb.jpeg";
import bcLogo from "./resources/bc.png";
import hoLogo from "./resources/ho.png";
import tsLogo from "./resources/ts.png";
import mernLogo from "./resources/mern.jpeg";
import ctfTimeLogo from "./resources/ctftime.png";
import brand from "./resources/brand.png";

function App() {
  const projectDetails = [
    {
      repository: "BachelorsFabric",
      picture: hlfLogo,
      description:
        "Proof of Concept - Für meine Bachelorarbeit 'Recurring Billing auf der Blockchain', Konzeptionierung und prototypischer Umsetzung  ",
    },
    {
      repository: "proncal",
      picture: tsLogo,
      description:
        "Typescript-React Code, welcher für ein Uni-Projekt erstellt wurde. Moderner Stundenplan. Integration mit Spring Boot REST-API (privates Repository)",
    },
    {
      repository: "",
      picture: mernLogo,
      description:
        "In-Progress: Fullstack-Entwicklung mit einem Auge auf Sicherheit - digitale Beratung und Entwicklung im Aufbau",
    },
  ];

  const linkings = [
    {
      referrer: "Hack The Box",
      picture: htbLogo,
      url: "https://www.hackthebox.eu/home/users/profile/52531",
      description:
        "Hier gibts das beste Virtual-Lab-Environment"
    },
    {
      referrer: "Bugcrowd",
      picture: bcLogo,
      url: "https://bugcrowd.com/",
      description:
        "BugBounty research - in arbeitsfreien Zeiten",
    },
    {
      referrer: "HackerOne",
      picture: hoLogo,
      url: "https://hackerone.com",
      description:
        "BugBounty research - in arbeitsfreien Zeiten",
    },
    {
      referrer: "CTFtime",
      picture: ctfTimeLogo,
      url: "https://ctftime.org/",
      description:
        "Internationale Plattform für CTF-Competitions",
    },
  ];

  return (
    <div className="main">
      <div className={"head"}>
        <img src={brand} width={150} height={100} />
        <h1>Cybersec & Developement</h1>
        <h4><u>Created by: Julian Weber</u></h4>
      </div>
      <Navbar />
      <div className="presentation">
        <div className={"card"}>
          <h1>Meine Git-Projekte</h1>
          <SlideShow content={projectDetails} type={"github"} />
        </div>
        <div className={"card"}>
          <h1>Meine Hangouts</h1>
          <SlideShow content={linkings} />
        </div>
      </div>
    </div>
  );
}

export default App;
