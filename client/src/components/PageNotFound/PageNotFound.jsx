import React from "react";
import css from "./PageNotFound.module.css";

function PageNotFound() {
  return (
    <div className={css.content}>
      <span>Page Not Found</span>
      <img src="https://i.ibb.co/1ZG6nfk/game-over.png" alt="" />
    </div>
  );
}
export default PageNotFound;
