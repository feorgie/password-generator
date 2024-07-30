import React from "react";
import css from "./Checkbox.module.css";

const Checkbox = ({ label, checked, handleCheckbox, name }) => {
  return (
    <div className={css.container}>
      <input
        className={css.checkbox}
        type="checkbox"
        name={name}
        checked={checked}
        onChange={(e) => handleCheckbox(e)}
      />
      <label className="font-body">{label}</label>
    </div>
  );
};

export default Checkbox;
