import React from "react";
import css from "./Button.module.css";

const Button = ({ onClick }) => {
  return (
    <button onClick={onClick} className={css.button}>
      GENERATE
    </button>
  );
};

export default Button;
