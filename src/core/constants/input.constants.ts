import type { OnChangeInputProps } from "../../ui/components/inputs/shared";

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

export {
  INPUT_EMPTY_VALUE_CLASS,
  INPUT_NO_EMPTY_VALUE_CLASS,
  INPUT_TYPE,
  INPUT_TYPE_VALUE_MAPPER,
  SELECT_INPUT_INITIAL_DATA,
  SELECT_INPUT_OPEN_CLASS,
  SELECT_INPUT_SELECTED_CLASS,
  TEXT_INPUT_INITIAL_STATE_DATA,
};
