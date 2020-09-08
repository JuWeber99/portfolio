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
        enableAutoPlay
        enableSwipe
        autoPlaySpeed={2500}
        showArrows={true}
        transitionMs={800}
        renderPagination={({ pages, activePage, onClick }) => (
          <Paginator activePage={activePage} onClick={onClick} pages={pages} />
        )}
      >
        {props.content.map((content) => (
          <div className={"slide-item"}>
            <img src={content.picture} width={200} height={150} alt={""} />
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
