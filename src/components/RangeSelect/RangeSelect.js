import React, { useState } from "react";
import css from "./RangeSelect.module.css";
const RangeSelect = ({ length, handleSliderChange }) => {
  return (
    <div>
      <div className={css.textContainer}>
        <p className="fontBody">Character length</p>
        <p className="fontLarge green">{length}</p>
      </div>
      <input
        type="range"
        min={1}
        max={20}
        step={1}
        value={length}
        onChange={(e) => handleSliderChange(e.currentTarget.value)}
      />
    </div>
  );
};

export default RangeSelect;
