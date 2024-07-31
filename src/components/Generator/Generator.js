import React, { useState } from "react";
import RangeSelect from "../RangeSelect/RangeSelect";
import Checkbox from "../Checkbox/Checkbox";
import StrengthIndicator from "../StrengthIndicator/StrengthIndicator";
import Button from "../Button/Button";

import css from "./Generator.module.css";

const Generator = ({ className, setPassword, isEmpty }) => {
  const [passwordLength, setPasswordLength] = useState(0); // initial password length
  const [passwordStrength, setPasswordStrength] = useState(0); // this is rating 0-4
  // checked-state values for checkboxes
  const [checked, setChecked] = useState({
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false,
  });
  const checkboxOptions = [
    {
      name: "uppercase",
      label: "Include Uppercase Letters",
    },
    {
      name: "lowercase",
      label: "Include Lowercase Letters",
    },
    {
      name: "numbers",
      label: "Include Numbers",
    },
    {
      name: "symbols",
      label: "Include Symbols",
    },
  ];
  // get the total number of selected character types
  const numberOfCheckedOptions = Object.values(checked).filter((x) => x).length;

  const handleSubmit = () => {
    if (passwordLength && numberOfCheckedOptions === 0) {
      return;
    }
    let characterList = "";
    let newPassword = "";
    // populate available character list
    if (checked["uppercase"]) characterList += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (checked["lowercase"]) characterList += "abcdefghijklmnopqrstuvwxyz";
    if (checked["numbers"]) characterList += "0123456789";
    if (checked["symbols"]) characterList += "!@#$%^&*()";
    // build new password adding random values up to selected length
    for (let i = 0; i < passwordLength; i++) {
      newPassword +=
        characterList[Math.floor(Math.random() * characterList.length)];
    }
    // set new password and password strength value
    setPassword(newPassword);
    setPasswordStrength(
      newPassword.length === 0
        ? 0
        : newPassword.length >= 10 && numberOfCheckedOptions >= 3
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
    setPasswordLength(value);
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
        min={10}
        value={passwordLength}
        handleSliderChange={handleSliderChange}
      />
      <div className={css.checkboxContainer}>
        {checkboxOptions.map(({ name, label }) => (
          <Checkbox
            key={`checkbox-${name}`}
            label={label}
            handleCheckbox={handleCheckbox}
            name={name}
            checked={checked}
            numberOfCheckedOptions={numberOfCheckedOptions}
          />
        ))}
      </div>
      <StrengthIndicator strength={passwordStrength} />
      <Button onClick={handleSubmit} />
    </div>
  );
};

export default Generator;
