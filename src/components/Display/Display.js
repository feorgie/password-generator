import React from "react";
import copyIcon from "./icon-copy.svg";
import css from "./Display.module.css";

const Display = ({ copied, password, handleClick, isEmpty }) => {
  return (
    <div className={css.container}>
      <input
        className={css.inputForCopy}
        id="inputForCopy"
        type="text"
        value={isEmpty ? "" : password}
        readOnly
      />
      <span className={`fontLarge ${isEmpty && "fontGrey"}`}>
        {isEmpty ? "P4$5W0rD!" : password}
      </span>
      <span className={css.copyContainer}>
        {copied && <span className="fontBody green">COPIED</span>}
        <img
          className={`${css.copyIcon} ${isEmpty && css.inactive}`}
          src={copyIcon}
          alt=""
          onClick={handleClick}
        />
      </span>
    </div>
  );
};

export default Display;
