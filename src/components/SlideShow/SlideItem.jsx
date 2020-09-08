import React from "react";
import CyberSecItem from "../Buttons/CyberSecItem"
import GithubItem from "../Buttons/GithubItem"

function SlideItem({ data, type }) {

    const githubUser = "JuWeber99";
  return (
      <>
      {data.map((content) => (
          <div className={"slide-item"}>
            <img src={content.picture} alt={""} />
            {type == "github" ? (
              <GithubItem
                username={githubUser}
                repository={content.repository}
                description={content.description}
              />
            ) : (
              <>
                <CyberSecItem
                  referrer={content.referrer}
                  url={content.url}
                  description={content.description}
                />
              </>
            )}
          </div>
        ))}

      </>
  );
}

export default SlideItem;
