import React, { useCallback, useEffect, useRef, useState } from "react";
import css from "./RangeSelect.module.css";

const RangeSelect = ({ handleSliderChange, max, min, value }) => {
  const [inputValue, setInputValue] = useState(value);
  const [sliderRange, setSliderRange] = useState(value);
  const sliderRef = useRef(null);

  const handleSliderInput = useCallback(() => {
    // get percentage of slider bar to highlight
    const range = max - min;
    const currentPoint = sliderRef.current.value - min;
    const percentage = (currentPoint / range) * 100;
    // set values
    setSliderRange(percentage);
    setInputValue(sliderRef.current.value);
    handleSliderChange(sliderRef.current.value);
  }, [handleSliderChange, max, min]);

  // update slider input on load
  useEffect(() => {
    handleSliderInput();
  }, [handleSliderInput, sliderRef]);

  return (
    <>
      <div className={css.textContainer}>
        <p className="fontBody">Character length</p>
        <p className="fontLarge green">{value}</p>
      </div>
      <div className={css.sliderContainer}>
        <input
          className={css.slider}
          type="range"
          min={min}
          max={max}
          step={1}
          value={inputValue}
          ref={sliderRef}
          onInput={handleSliderInput}
        />
        <div
          className={css.progress}
          style={{ width: `${sliderRange}%` }}
        ></div>
      </div>
    </>
  );
};

export default RangeSelect;
