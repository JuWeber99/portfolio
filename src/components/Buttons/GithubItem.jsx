import React from "react";
import { AwesomeButtonSocial } from "react-awesome-button";
import styles from "react-awesome-button/src/styles/themes/theme-eric";

export function GithubItem({username, repository,description }) {
  return (
    <div>
     <p style={{textAlign: "center", fontWeight: "bold"}}>{description}</p>
      <AwesomeButtonSocial
        cssModules={[styles]}
        type="github"
        href={`https://github.com/${username}/${repository}`}
        target="_blank"
      >
         {repository} 
      </AwesomeButtonSocial>
    </div>
  );
}

export default GithubItem
