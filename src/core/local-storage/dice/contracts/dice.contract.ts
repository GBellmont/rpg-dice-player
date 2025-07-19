export interface Dice {
  id: string;
  name: string;
  diceType: string;
  diceAdvantage: string;
  diceBuff: string;
  diceDeBuff: string;
  diceSelected: boolean;
  diceResultSelected: string;
  rollDiceData: {
    diceResultTypeSelected: string;
    diceResultsFieldLabel: string;
    diceResultOptions: Array<{ id: string; value: string }>;
    diceResultBuff: number;
    diceResultDebuf: number;
    diceResultDate: string;
  };
}
