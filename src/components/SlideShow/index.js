import React from 'react';
import SlideShow from "./SlideShow";
import hlfLogo from "../../resources/hlf.png";
import tsLogo from "../../resources/ts.png";
import mernLogo from "../../resources/mern.jpeg";
import htbLogo from "../../resources/htb.jpeg";
import bcLogo from "../../resources/bc.png";
import hoLogo from "../../resources/ho.png";
import ctfTimeLogo from "../../resources/ctftime.png";

export const SlideShowUI = () => {

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
            referrer: "HTB",
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
        <div className="presentation">
            <div className={"card"}>
                <h1 style={{marginTop: 0}}><u>Meine Git-Projekte</u></h1>
                <SlideShow content={projectDetails} type={"github"}/>
            </div>
            <div className={"card"}>
                <h1><u>Meine Hangouts</u></h1>
                <SlideShow content={linkings}/>
            </div>
        </div>
    );
};
