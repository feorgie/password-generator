import React from "react";
import copyIcon from "./icon-copy.svg";
import css from "./Display.module.css";

const Display = ({ password }) => {
  return (
    <div className={css.container}>
      {/* <input type="text" placeholder="P4$5W0rD" readOnly /> */}
      <span className="fontLarge">{password}</span>
      <img className="copyIcon" src={copyIcon} alt="" />
    </div>
  );
};

export default Display;
