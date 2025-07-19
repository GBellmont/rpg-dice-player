import "./select-input.css";

import { useState } from "react";
import type { OnChangeInputProps } from "../shared";
import {
  INPUT_TYPE,
  SELECT_INPUT_INITIAL_DATA,
  INPUT_NO_EMPTY_VALUE_CLASS,
  SELECT_INPUT_OPEN_CLASS,
  SELECT_INPUT_SELECTED_CLASS,
} from "../../../../core";

interface SelectInputItemProps {
  id: string;
  value: string;
  selectedId: string;
  selectItem: (value: string) => void;
}

interface SelectInputProps {
  icon?: string;
  label: string;
  name: string;
  onChange: (event: OnChangeInputProps) => void;
  options: Array<{ id: string; value: string }>;
  selectedId: string;
}

const SelectItemSubComponent = ({
  id,
  value,
  selectedId,
  selectItem,
}: SelectInputItemProps) => {
  return (
    <button
      key={id}
      className={`select-input-component__item ${
        id === selectedId ? SELECT_INPUT_SELECTED_CLASS : ""
      }`}
      onClick={() => selectItem(id)}
    >
      {value}
    </button>
  );
};

const SelectInputComponent = ({
  icon,
  label,
  onChange,
  options,
  name,
  selectedId,
}: SelectInputProps) => {
  const [inputData, setInputData] = useState(SELECT_INPUT_INITIAL_DATA);
  const selectedValue = options.find(
    (option) => option.id === selectedId
  )?.value;

  const toggleListVisible = () => {
    setInputData({ ...inputData, visibleList: !inputData.visibleList });
  };

  const setNewInputValue = (value: string) => {
    onChange({ target: { name, value }, inputTypeEnum: INPUT_TYPE.SELECT });
    toggleListVisible();
  };

  return (
    <div
      className={`select-input-component ${
        !options?.length || options.length === 1 ? "disabled" : ""
      }`}
    >
      <button
        className={`select-input-component__selected-info ${
          inputData.visibleList ? SELECT_INPUT_OPEN_CLASS : ""
        }`}
        onClick={toggleListVisible}
      >
        <p
          id="select-input-component__name"
          className={`select-input-component__name ${
            selectedValue?.trim() ? INPUT_NO_EMPTY_VALUE_CLASS : ""
          }`}
        >
          {label}
        </p>
        <p className="select-input-component__value">{selectedValue}</p>
        {!!icon && (
          <img
            className="select-input-component__icon"
            src={icon}
            alt="Select Icon"
          ></img>
        )}
      </button>
      <div
        className={`select-input-component__list ${
          inputData.visibleList ? SELECT_INPUT_OPEN_CLASS : ""
        }`}
      >
        {options.map((option) => (
          <SelectItemSubComponent
            key={option.id}
            id={option.id}
            value={option.value}
            selectItem={setNewInputValue}
            selectedId={selectedId}
          />
        ))}
      </div>
    </div>
  );
};

export { SelectInputComponent };
