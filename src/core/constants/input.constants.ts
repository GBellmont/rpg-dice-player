import type { OnChangeInputProps } from "../../ui/components/inputs/shared";
import { DICE_TYPES } from "./dices.constants";

const INPUT_EMPTY_VALUE_CLASS = "empty-value";
const INPUT_NO_EMPTY_VALUE_CLASS = "no-empty-value";

const INPUT_TYPE = {
  TEXT: "TEXT",
  TEXT_WITH_REGEX: "TEXT_WITH_REGEX",
  CHECK_BOX: "CHECK_BOX",
  SELECT: "SELECT",
};

const INPUT_TYPE_VALUE_MAPPER = {
  [INPUT_TYPE.TEXT]: (event: OnChangeInputProps) => event.target.value,
  [INPUT_TYPE.TEXT_WITH_REGEX]: (event: OnChangeInputProps) =>
    event.regexp ? event.target.value.replace(event.regexp, "") : "",
  [INPUT_TYPE.CHECK_BOX]: (event: OnChangeInputProps) => event.target.checked,
  [INPUT_TYPE.SELECT]: (event: OnChangeInputProps) => event.target.value,
};

const SELECT_INPUT_INITIAL_DATA = {
  visibleList: false,
};

const SELECT_INPUT_OPEN_CLASS = "select-input-component_open";
const SELECT_INPUT_SELECTED_CLASS = "select-input-component__selected";

const TEXT_INPUT_INITIAL_STATE_DATA = {
  additionalClassName: "",
};

const DICE_PANEL_INPUTS = {
  name: {
    inputFieldName: "name",
    inputFieldLabel: "Nome",
  },
  diceType: {
    inputFieldName: "diceType",
    inputFieldLabel: "Tipo de Dado",
    options: [
      { id: "1", value: DICE_TYPES.D4 },
      { id: "2", value: DICE_TYPES.D6 },
      { id: "3", value: DICE_TYPES.D8 },
      { id: "4", value: DICE_TYPES.D10 },
      { id: "5", value: DICE_TYPES.D12 },
      { id: "6", value: DICE_TYPES.D20 },
    ],
  },
  diceAdvantage: {
    inputFieldName: "diceAdvantage",
    inputFieldLabel: "Vantagem",
  },
  diceBuff: {
    inputFieldName: "diceBuff",
    inputFieldLabel: "Buff",
  },
  diceDeBuff: {
    inputFieldName: "diceDeBuff",
    inputFieldLabel: "DeBuff",
  },
  diceSelected: {
    inputFieldName: "diceSelected",
    inputFieldLabel: "Selecionado?",
  },
  diceResult: {
    inputFieldName: "diceResultSelected",
  },
};

export {
  DICE_PANEL_INPUTS,
  INPUT_EMPTY_VALUE_CLASS,
  INPUT_NO_EMPTY_VALUE_CLASS,
  INPUT_TYPE,
  INPUT_TYPE_VALUE_MAPPER,
  SELECT_INPUT_INITIAL_DATA,
  SELECT_INPUT_OPEN_CLASS,
  SELECT_INPUT_SELECTED_CLASS,
  TEXT_INPUT_INITIAL_STATE_DATA,
};
