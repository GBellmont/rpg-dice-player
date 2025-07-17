import diceD4Image from "../icons/dice-d4.png";
import diceD6Image from "../icons/dice-d6.png";
import diceD8Image from "../icons/dice-d8.png";
import diceD10Image from "../icons/dice-d10.png";
import diceD12Image from "../icons/dice-d12.png";
import diceD20Image from "../icons/dice-d20.png";

const DICE_IDS = {
  D4: "D4",
  D6: "D6",
  D8: "D8",
  D10: "D10",
  D12: "D12",
  D20: "D20",
};

const DICE_ICONS_MAPPER = {
  [DICE_IDS.D4]: diceD4Image,
  [DICE_IDS.D6]: diceD6Image,
  [DICE_IDS.D8]: diceD8Image,
  [DICE_IDS.D10]: diceD10Image,
  [DICE_IDS.D12]: diceD12Image,
  [DICE_IDS.D20]: diceD20Image,
};

const SELECT_DICES_OPTIONS = [
  { id: DICE_IDS.D4 },
  { id: DICE_IDS.D6 },
  { id: DICE_IDS.D8 },
  { id: DICE_IDS.D10 },
  { id: DICE_IDS.D12 },
  { id: DICE_IDS.D20 },
];

export { DICE_IDS, DICE_ICONS_MAPPER, SELECT_DICES_OPTIONS };
