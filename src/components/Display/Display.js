import React from "react";
import copyIcon from "./icon-copy.svg";
import css from "./Display.module.css";

const Display = ({ copied, password, handleClick }) => {
  return (
    <div className={css.container}>
      <input
        className={css.inputForCopy}
        id="inputForCopy"
        type="text"
        value={password}
        readOnly
      />
      <span className="fontLarge">{password}</span>
      <span className={css.copyContainer}>
        {copied && <span className="fontBody green">COPIED</span>}
        <img
          className={css.copyIcon}
          src={copyIcon}
          alt=""
          onClick={handleClick}
        />
      </span>
    </div>
  );
};

export default Display;
