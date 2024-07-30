import React, { useState } from "react";
import RangeSelect from "./RangeSelect/RangeSelect";
import Checkbox from "./Checkbox/Checkbox";
import StrengthIndicator from "./StrengthIndicator/StrengthIndicator";
import Button from "./Button/Button";

const Generator = ({ className }) => {
  const [length, setLength] = useState(10);

  const checkboxOptions = [
    {
      id: "uppercase",
      label: "Include Uppercase Letters",
      checked: true,
    },
    {
      id: "lowercase",
      label: "Include Lowercase Letters",
      checked: true,
    },
    {
      id: "numbers",
      label: "Include Numbers",
      checked: true,
    },
    {
      id: "symbols",
      label: "Include Symbols",
      checked: false,
    },
  ];

  const handleSliderChange = (value) => {
    setLength(value);
  };
  return (
    <div className={className}>
      <RangeSelect length={length} handleSliderChange={handleSliderChange} />
      {checkboxOptions.map((option) => (
        <Checkbox
          key={`checkbox_${option.id}`}
          label={option.label}
          checked={option.checked}
        />
      ))}

      <StrengthIndicator />
      <Button />
    </div>
  );
};

export default Generator;
