import React from "react";
import { AwesomeButton } from "react-awesome-button";
import styles from "react-awesome-button/src/styles/themes/theme-indigo";
import override from "./override.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTerminal } from "@fortawesome/free-solid-svg-icons";

function CyberSecItem({ url, referrer, description }) {
  return (
    <div>
      <p style={{ textAlign: "center", fontWeight: "bold" }}>{description}</p>
      <AwesomeButton
        cssModules={[styles, override]}
        href={url}
        target="_blank"
        type={"secondary"}
      >
        <FontAwesomeIcon icon={faTerminal} />
        <span>{referrer}</span>
      </AwesomeButton>
    </div>
  );
}

export default CyberSecItem;
