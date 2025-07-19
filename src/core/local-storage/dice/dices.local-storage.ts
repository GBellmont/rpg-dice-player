import { EMPTY_DICE_DATA } from "../../constants";
import type { Dice } from "./contracts";

const DICES_DATA_KEY = "DICES_DATA";

const saveDiceData = (data: Dice[]): void => {
  localStorage.setItem(DICES_DATA_KEY, JSON.stringify(data));
};

const getDiceData = (): Dice[] => {
  const data = localStorage.getItem(DICES_DATA_KEY);

  return !data ? [EMPTY_DICE_DATA] : (JSON.parse(data) as Dice[]);
};

export { getDiceData, saveDiceData };
