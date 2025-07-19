import "./text-input.css";

import { useState } from "react";

import type { OnChangeInputProps } from "../shared";
import {
  INPUT_EMPTY_VALUE_CLASS,
  INPUT_NO_EMPTY_VALUE_CLASS,
  INPUT_TYPE,
  TEXT_INPUT_INITIAL_STATE_DATA,
} from "../../../../core";

interface TextInputProps {
  label: string;
  name: string;
  onChange: (event: OnChangeInputProps) => void;
  onlyNumbers?: boolean;
  value: string;
}

const TextInputComponent = ({
  label,
  name,
  onChange,
  onlyNumbers,
  value,
}: TextInputProps) => {
  const [inputData, setInputData] = useState({
    ...TEXT_INPUT_INITIAL_STATE_DATA,
    additionalClassName: value.trim()
      ? INPUT_NO_EMPTY_VALUE_CLASS
      : INPUT_EMPTY_VALUE_CLASS,
  });

  const verifyAndSetAdditionalClassName = (isFocused: boolean): void => {
    const newAdditionalClass =
      value.trim() || isFocused
        ? INPUT_NO_EMPTY_VALUE_CLASS
        : INPUT_EMPTY_VALUE_CLASS;

    setInputData({ additionalClassName: newAdditionalClass });
  };

  const inputOnChange = (event: OnChangeInputProps): void => {
    return onlyNumbers
      ? onChange({
          ...event,
          regexp: new RegExp("\\D", "g"),
          inputTypeEnum: INPUT_TYPE.TEXT_WITH_REGEX,
        })
      : onChange({ ...event, inputTypeEnum: INPUT_TYPE.TEXT });
  };

  return (
    <div className="text-input-component">
      <p
        className={`text-input-component__name ${inputData.additionalClassName}`}
      >
        {label}
      </p>
      <input
        className="text-input-component__value"
        type="text"
        name={name}
        value={value}
        onChange={inputOnChange}
        onFocus={() => verifyAndSetAdditionalClassName(true)}
        onBlur={() => verifyAndSetAdditionalClassName(false)}
      />
    </div>
  );
};

export { TextInputComponent };
