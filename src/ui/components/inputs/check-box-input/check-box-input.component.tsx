import "./check-box-input.css";

import { INPUT_TYPE } from "../../../../core";
import type { OnChangeInputProps } from "../shared";

interface CheckBoxInputProps {
  checked: boolean;
  label: string;
  name: string;
  onChange: (event: OnChangeInputProps) => void;
}

const CheckBoxInputComponent = ({
  checked,
  label,
  name,
  onChange,
}: CheckBoxInputProps) => {
  const toggleCheckBox = () => {
    onChange({
      target: {
        name,
        value: "",
        checked: !checked,
      },
      inputTypeEnum: INPUT_TYPE.CHECK_BOX,
    });
  };

  return (
    <div className="check-box-input-component">
      <p className="check-box-input-component__name">{label}</p>
      <label className="check-box-input-component__label" htmlFor="check-box">
        <input
          id="check-box"
          name={name}
          type="checkbox"
          className="check-box-input-component__check-box"
          checked={checked}
          onChange={onChange}
        ></input>
        <button
          className="check-box-input-component__styled"
          onClick={toggleCheckBox}
        ></button>
        <div
          className={`check-box-input-component__styled-value  ${
            checked ? "check-box-input-component__styled-visible" : ""
          }`}
        >
          X
        </div>
      </label>
    </div>
  );
};

export { CheckBoxInputComponent };
