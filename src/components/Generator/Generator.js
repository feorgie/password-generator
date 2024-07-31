import React, { useState } from "react";
import RangeSelect from "../RangeSelect/RangeSelect";
import Checkbox from "../Checkbox/Checkbox";
import StrengthIndicator from "../StrengthIndicator/StrengthIndicator";
import Button from "../Button/Button";

//dev
import css from "./Generator.module.css";

const Generator = ({ className, setPassword }) => {
  const [length, setLength] = useState(10); // initial password length
  const [passwordStrength, setPasswordStrength] = useState(1); // this is rating 1-4

  const checkboxOptions = [
    {
      id: "uppercase",
      label: "Include Uppercase Letters",
      isChecked: true,
    },
    {
      id: "lowercase",
      label: "Include Lowercase Letters",
      isChecked: true,
    },
    {
      id: "numbers",
      label: "Include Numbers",
      isChecked: true,
    },
    {
      id: "symbols",
      label: "Include Symbols",
      isChecked: true,
    },
  ];
  // checked state values for checkboxes
  const [checked, setChecked] = useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
  });

  const handleSubmit = () => {
    let characterList = "";
    let newPassword = "";
    // populate available character list
    if (checked["uppercase"]) characterList += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (checked["lowercase"]) characterList += "abcdefghijklmnopqrstuvwxyz";
    if (checked["numbers"]) characterList += "0123456789";
    if (checked["symbols"]) characterList += "!@#$%^&*()";
    // build new password adding random values up to selected length
    for (let i = 0; i < length; i++) {
      newPassword +=
        characterList[Math.floor(Math.random() * characterList.length)];
    }
    // get the total number of selected character types
    let numberOfCheckedOptions = Object.values(checked).filter((x) => x).length;
    // set new password and password strength value
    setPassword(newPassword);
    setPasswordStrength(
      newPassword.length >= 10 && numberOfCheckedOptions >= 3
        ? 4
        : newPassword.length >= 8 && numberOfCheckedOptions >= 2
        ? 3
        : newPassword.length >= 6
        ? 2
        : 1
    );
  };

  const handleSliderChange = (value) => {
    //set password length
    setLength(value);
  };
  const handleCheckbox = (event) => {
    // set checked state on character set checkbox
    setChecked((prev) => ({
      ...prev,
      [event.target.name]: !!event.target.checked,
    }));
  };

  return (
    <div className={className}>
      <RangeSelect
        max={20}
        min={1}
        value={length}
        handleSliderChange={handleSliderChange}
      />
      <div className={css.checkboxContainer}>
        <label className={css.checkboxRow}>
          <input
            className={css.checkbox}
            type="checkbox"
            name={"uppercase"}
            checked={checked["uppercase"]}
            onChange={(e) => handleCheckbox(e)}
          />
          Include Uppercase Letters
        </label>
        <label className={css.checkboxRow}>
          <input
            className={css.checkbox}
            type="checkbox"
            name={"lowercase"}
            checked={checked["lowercase"]}
            onChange={(e) => handleCheckbox(e)}
          />
          Include Lowercase Letters
        </label>
        <label className={css.checkboxRow}>
          <input
            className={css.checkbox}
            type="checkbox"
            name={"numbers"}
            checked={checked["numbers"]}
            onChange={(e) => handleCheckbox(e)}
          />
          Include Numbers
        </label>
        <label className={css.checkboxRow}>
          <input
            className={css.checkbox}
            type="checkbox"
            name={"symbols"}
            checked={checked["symbols"]}
            onChange={(e) => handleCheckbox(e)}
          />
          Include Symbols
        </label>
      </div>
      <StrengthIndicator strength={passwordStrength} />
      <Button onClick={handleSubmit} />
    </div>
  );
};

export default Generator;
