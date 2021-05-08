import * as React from "react";
import { Page } from "./components/Page";
import usePages from "./usePages";

export default function () {
  const funcallback = (i: number) => {
    console.log(" funcallback ", i);
  };
  const pages = usePages(1, 5, funcallback);
  const [currentPage, setCurrentPage] = React.useState(1);
  return (
    <div className="example">
      <Page
        currentPage={currentPage}
        onChangePage={(index) => {
          setCurrentPage(index);
        }}
        effect="coverflow"
        style={{
          height: 220,
          width: 1200,
          overflow: "hidden",
        }}
      >
        {pages}
      </Page>
      <button
        onClick={() => {
          if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
          }
        }}
      >
        Prev
      </button>
      {currentPage + 1}
      <button
        onClick={() => {
          if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1);
          }
        }}
      >
        Next
      </button>
      <div className="dots">
        {pages.map((item, idx) => {
          return (
            <button
              key={idx}
              onClick={() => {
                setCurrentPage(idx);
              }}
              className={"dot" + (currentPage === idx ? " active" : "")}
            />
          );
        })}
      </div>
    </div>
  );
}
