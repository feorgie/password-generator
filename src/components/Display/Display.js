import React, { useState } from "react";
import css from "./Display.module.css";
import { CopyButton } from "./CopyButton";

const Display = ({ copied, password, handleClick, isEmpty }) => {
  // set and manage hover state for conditional styling copy button svg
  const [hoverActive, setHoverActive] = useState(false);
  const toggleHover = () => {
    setHoverActive(!hoverActive);
  };

  return (
    <div className={css.container}>
      <p className={`fontLarge ${isEmpty && "fontGrey"}`}>
        {isEmpty ? "P4$5W0rD!" : password}
      </p>
      <span className={css.copyContainer}>
        {copied && <p className="fontBody green">COPIED</p>}

        <div
          className={`${css.copyIcon} ${isEmpty && css.inactive}`}
          onClick={handleClick}
          onMouseEnter={toggleHover}
          onMouseLeave={toggleHover}
        >
          <CopyButton isHoverActive={hoverActive & !isEmpty} />
        </div>
      </span>
    </div>
  );
};

export default Display;
