import React from "react";
import css from "./Checkbox.module.css";

const Checkbox = ({
  checked,
  label,
  handleCheckbox,
  name,
  numberOfCheckedOptions,
}) => {
  return (
    <label className={css.checkboxRow}>
      <input
        className={`${css.checkboxInput} ${checked[name] && css.checked}`}
        type="checkbox"
        name={name}
        checked={checked[name]}
        disabled={numberOfCheckedOptions === 1 && checked[name]}
        onChange={(e) => handleCheckbox(e)}
      />
      {label}
    </label>
  );
};

export default Checkbox;
