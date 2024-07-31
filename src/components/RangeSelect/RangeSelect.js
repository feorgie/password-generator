import React, { useEffect, useRef, useState } from "react";
import css from "./RangeSelect.module.css";

const RangeSelect = ({ handleSliderChange, max, min, value }) => {
  const [inputValue, setInputValue] = useState(value);
  const [sliderRange, setSliderRange] = useState(value);
  const sliderRef = useRef(null);

  const handleSliderInput = () => {
    const range = max - min;
    const distance = sliderRef.current.value - min;
    const percentage = (distance / range) * 100;
    setSliderRange(percentage);
    setInputValue(sliderRef.current.value);
    handleSliderChange(sliderRef.current.value);
  };
  useEffect(() => {
    handleSliderInput();
  }, [sliderRef]);

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
          className={css.sliderThumb}
          style={{ left: `calc(${sliderRange}%)` }}
        ></div>
        <div
          className={css.progress}
          style={{ width: `${sliderRange}%` }}
        ></div>
      </div>
    </>
  );
};

export default RangeSelect;
