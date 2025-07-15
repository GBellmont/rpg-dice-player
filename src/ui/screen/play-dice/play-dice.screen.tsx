import { useState } from "react";
import {
  CheckBoxInputComponent,
  SelectInputComponent,
  TextInputComponent,
} from "../../components";
import "./play-dice.css";
import { type OnChangeInputProps } from "../../components/inputs/shared";
import {
  DICE_ICONS_MAPPER,
  DICE_IDS,
  SELECT_DICES_OPTIONS,
} from "../../../core/constants/dices.constants";
import { INPUT_TYPE_VALUE_MAPPER } from "../../../core";

const PlayDiceScreen = () => {
  const [formData, setFormData] = useState({
    textInput: "",
    numberInput: "",
    checkInput: false,
    selectInput: DICE_IDS.D20,
  });

  const onChange = (eventChange: OnChangeInputProps) => {
    const { name, value } = eventChange.target;
    const verifiedValue = eventChange.inputTypeEnum
      ? INPUT_TYPE_VALUE_MAPPER[eventChange.inputTypeEnum]?.(eventChange)
      : value;

    setFormData({
      ...formData,
      [name]: verifiedValue,
    });
  };

  return (
    <div className="play-dice-screen">
      <TextInputComponent
        name="textInput"
        label="Meu Input de Texto"
        value={formData.textInput}
        onChange={onChange}
      />
      <TextInputComponent
        onlyNumbers={true}
        name="numberInput"
        label="Meu Input de Números"
        value={formData.numberInput}
        onChange={onChange}
      />
      <CheckBoxInputComponent
        name="checkInput"
        label="Ele É?"
        checked={formData.checkInput}
        onChange={onChange}
      />
      <SelectInputComponent
        name="selectInput"
        value={formData.selectInput}
        label="Tipo de Dado"
        onChange={onChange}
        icon={DICE_ICONS_MAPPER[formData.selectInput]}
        options={SELECT_DICES_OPTIONS}
      />
    </div>
  );
};

export { PlayDiceScreen };
