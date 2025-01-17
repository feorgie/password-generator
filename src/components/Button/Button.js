import React, { useState } from "react";
import css from "./Button.module.css";
import { Arrow } from "./Arrow";

const Button = ({ onClick }) => {
  // set and manage hover state for conditional styling button svg
  const [hoverActive, setHoverActive] = useState(false);
  const toggleHover = () => {
    setHoverActive(!hoverActive);
  };
  return (
    <button
      onClick={onClick}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      className={css.button}
    >
      GENERATE
      <Arrow className={css.arrow} isHoverActive={hoverActive} />
    </button>
  );
};

export default Button;
