import React from "react";
import css from "./Checkbox.module.css";

const Checkbox = ({ label, checked }) => {
  return (
    <div className={css.container}>
      <input className={css.checkbox} type="checkbox" checked={checked} />
      <p>{label}</p>
    </div>
  );
};

export default Checkbox;
