import React from "react";
import Scale from "../Scale/Scale";
import css from "./StrengthIndicator.module.css";

const StrengthIndicator = ({ strength = 0 }) => {
  const descriptions = {
    0: "",
    1: "TOO WEAK!",
    2: "WEAK",
    3: "MEDIUM",
    4: "STRONG",
  };

  return (
    <div className={css.container}>
      <p className="fontBody fontGrey">STRENGTH</p>
      <p className={css.description}>{descriptions[strength]}</p>
      <Scale rating={strength} />
    </div>
  );
};

export default StrengthIndicator;
