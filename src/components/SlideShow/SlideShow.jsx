import React, { useRef } from "react";
import GithubItem from "../Buttons/GithubItem";
import Carousel from "react-elastic-carousel";
import Paginator from "../Paginator/Paginator";
import "./styles.css";
import CyberSecItem from "../Buttons/CyberSecItem";

function SlideShow(props) {
  const githubUser = "JuWeber99";


  return (
    <div className="slide-container">
      <Carousel
        enableSwipe
        showArrows={false}
        transitionMs={800}
        renderPagination={({ pages, activePage, onClick }) => (
          <Paginator activePage={activePage} onClick={onClick} pages={pages} />
        )}
      >
        {props.content.map((content) => (
          <div className={"slide-item"}>
            <img src={content.picture} alt={""} />
            {props.type == "github" ? (
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
      </Carousel>
    </div>
  );
}

export default SlideShow;
