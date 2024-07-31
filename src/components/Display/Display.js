import React from "react";
import copyIcon from "./icon-copy.svg";
import css from "./Display.module.css";

const Display = ({ copied, password, handleClick, isEmpty }) => {
  return (
    <div className={css.container}>
      <p className={`fontLarge ${isEmpty && "fontGrey"}`}>
        {isEmpty ? "P4$5W0rD!" : password}
      </p>
      <span className={css.copyContainer}>
        {copied && <p className="fontBody green">COPIED</p>}
        <img
          className={`${css.copyIcon} ${isEmpty && css.inactive}`}
          src={copyIcon}
          alt="Copy button"
          onClick={handleClick}
        />
      </span>
    </div>
  );
};

export default Display;
