import diceD4Image from "../icons/dice-d4.png";
import diceD6Image from "../icons/dice-d6.png";
import diceD8Image from "../icons/dice-d8.png";
import diceD10Image from "../icons/dice-d10.png";
import diceD12Image from "../icons/dice-d12.png";
import diceD20Image from "../icons/dice-d20.png";

const DICE_IDS = {
  D4: "1",
  D6: "2",
  D8: "3",
  D10: "4",
  D12: "5",
  D20: "6",
};

const DICE_TYPES = {
  D4: "D4",
  D6: "D6",
  D8: "D8",
  D10: "D10",
  D12: "D12",
  D20: "D20",
};

const DICE_ID_TO_DICE_TYPE_MAPPER = {
  [DICE_IDS.D4]: DICE_TYPES.D4,
  [DICE_IDS.D6]: DICE_TYPES.D6,
  [DICE_IDS.D8]: DICE_TYPES.D8,
  [DICE_IDS.D10]: DICE_TYPES.D10,
  [DICE_IDS.D12]: DICE_TYPES.D12,
  [DICE_IDS.D20]: DICE_TYPES.D20,
};

const DICE_ID_TO_DICE_ICONS_MAPPER = {
  [DICE_IDS.D4]: diceD4Image,
  [DICE_IDS.D6]: diceD6Image,
  [DICE_IDS.D8]: diceD8Image,
  [DICE_IDS.D10]: diceD10Image,
  [DICE_IDS.D12]: diceD12Image,
  [DICE_IDS.D20]: diceD20Image,
};

const DICE_ID_TO_DICE_VALUE_MAPPER = {
  [DICE_IDS.D4]: 4,
  [DICE_IDS.D6]: 6,
  [DICE_IDS.D8]: 8,
  [DICE_IDS.D10]: 10,
  [DICE_IDS.D12]: 12,
  [DICE_IDS.D20]: 20,
};

const EMPTY_DICE_DATA = {
  id: Date.now().toString(),
  name: "",
  diceType: DICE_IDS.D20,
  diceAdvantage: "",
  diceBuff: "0",
  diceDeBuff: "",
  diceSelected: false,
  diceResultSelected: "",
  rollDiceData: {
    diceResultTypeSelected: "",
    diceResultsFieldLabel: "Dados Jogados(---)",
    diceResultOptions: [],
    diceResultBuff: 0,
    diceResultDebuf: 0,
    diceResultDate: "",
  },
};

const SELECT_DICES_OPTIONS = [
  { id: DICE_TYPES.D4 },
  { id: DICE_TYPES.D6 },
  { id: DICE_TYPES.D8 },
  { id: DICE_TYPES.D10 },
  { id: DICE_TYPES.D12 },
  { id: DICE_TYPES.D20 },
];

export {
  DICE_IDS,
  DICE_ID_TO_DICE_ICONS_MAPPER,
  DICE_ID_TO_DICE_TYPE_MAPPER,
  DICE_ID_TO_DICE_VALUE_MAPPER,
  DICE_TYPES,
  EMPTY_DICE_DATA,
  SELECT_DICES_OPTIONS,
};
