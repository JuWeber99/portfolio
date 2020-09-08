import React from "react";
import "./paginator.sass";
import Square from "./Square";
import Flex from "./Flex";

function Paginator({ pages, activePage, onClick }) {
  return (
    <Flex direction="row">
      {pages.map((page) => {
        const isActivePage = activePage === page;
        return (
          <Square
            key={page}
            onClick={() => onClick(page)}
            active={isActivePage}
          />
        );
      })}
    </Flex>
  );
}

export default Paginator;
