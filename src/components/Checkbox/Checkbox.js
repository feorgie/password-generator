import React from "react";
import css from "./Checkbox.module.css";

const Checkbox = ({ label, checked, handleCheckbox, name }) => {
  return (
    <div className={css.container}>
      <label className="font-body">
        <input
          className={css.checkbox}
          type="checkbox"
          name={name}
          checked={checked}
          onChange={(e) => handleCheckbox(e)}
        />
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
