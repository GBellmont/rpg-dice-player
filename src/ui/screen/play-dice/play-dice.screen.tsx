import { useState } from "react";
import { DicePanelComponent } from "../../components";
import "./play-dice.css";
import { type OnChangeInputProps } from "../../components/inputs/shared";

import {
  INPUT_TYPE_VALUE_MAPPER,
  DICE_ID_TO_DICE_TYPE_MAPPER,
  DICE_ID_TO_DICE_VALUE_MAPPER,
  EMPTY_DICE_DATA,
} from "../../../core/constants";

import { DateTime } from "luxon";
import { getDiceData, saveDiceData } from "../../../core/local-storage";

interface Dice {
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

interface RollDiceResponse {
  diceResultSelected: string;
  diceResultTypeSelected: string;
  diceResultsFieldLabel: string;
  diceResultOptions: Array<{ id: string; value: string }>;
  diceResultBuff: number;
  diceResultDebuf: number;
  diceResultDate: string;
}

const PlayDiceScreen = () => {
  const [dicesData, setDicesData] = useState<Dice[]>(getDiceData());

  const getDiceRollNumber = (diceType: string): number => {
    return (
      Math.floor(
        Math.random() * (DICE_ID_TO_DICE_VALUE_MAPPER[diceType] - 1 + 1)
      ) + 1
    );
  };

  const rollDice = (id: string): RollDiceResponse => {
    const selectedDice = dicesData.find((dice) => dice.id === id);
    if (!selectedDice)
      return {
        diceResultSelected: "",
        diceResultTypeSelected: "",
        diceResultsFieldLabel: "Dados Jogados(---)",
        diceResultOptions: [],
        diceResultBuff: 0,
        diceResultDebuf: 0,
        diceResultDate: "",
      };

    const rolls = Array(
      selectedDice.diceAdvantage ? parseInt(selectedDice.diceAdvantage) + 1 : 1
    )
      .fill({})
      .map((_, index) => {
        return {
          id: Date.now().toString() + index,
          value: getDiceRollNumber(selectedDice.diceType).toString(),
        };
      })
      .sort((a, b) => parseInt(b.value) - parseInt(a.value));

    return {
      diceResultSelected: rolls[0]?.id,
      diceResultTypeSelected: selectedDice.diceType,
      diceResultsFieldLabel: `Dados Jogados(${
        DICE_ID_TO_DICE_TYPE_MAPPER[selectedDice.diceType]
      })`,
      diceResultOptions: rolls,
      diceResultBuff: parseInt(selectedDice.diceBuff) || 0,
      diceResultDebuf: parseInt(selectedDice.diceDeBuff) || 0,
      diceResultDate: DateTime.now()
        .setZone("America/Sao_Paulo")
        .toFormat("dd/LL/yyyy HH:mm:ss"),
    };
  };

  const onChange = (eventChange: OnChangeInputProps) => {
    const { name, value } = eventChange.target;
    const verifiedValue = eventChange.inputTypeEnum
      ? INPUT_TYPE_VALUE_MAPPER[eventChange.inputTypeEnum]?.(eventChange)
      : value;

    const newDicesData = dicesData.reduce((acumulator: any, dice) => {
      if (dice.id === eventChange.objectId) {
        return [
          ...acumulator,
          {
            ...dice,
            [name]: verifiedValue,
          },
        ];
      }

      return [...acumulator, dice];
    }, []);

    setDicesData(newDicesData);
  };

  const plusDice = () => {
    const newDicesData = [
      ...dicesData,
      { ...EMPTY_DICE_DATA, id: Date.now().toString() },
    ];

    setDicesData(newDicesData);
    saveDiceData(newDicesData);
  };

  const removeDice = (id: string) => {
    const newDicesData = dicesData.filter((dice) => dice.id !== id);

    setDicesData(newDicesData);
    saveDiceData(newDicesData);
  };

  const rollUniqueDice = (id: string): void => {
    const { diceResultSelected, ...rollDiceData } = rollDice(id);

    const replacedDices = dicesData.map((dice) => {
      if (dice.id === id) {
        return {
          ...dice,
          diceResultSelected,
          rollDiceData,
        };
      }

      return dice;
    });

    setDicesData(replacedDices);
    saveDiceData(replacedDices);
  };

  const rollAllDices = () => {
    const newDices = dicesData.map((dice) => {
      if (!dice.diceSelected) return dice;

      const { diceResultSelected, ...rollDiceData } = rollDice(dice.id);

      return {
        ...dice,
        diceResultSelected,
        rollDiceData,
      };
    });

    setDicesData(newDices);
    saveDiceData(newDices);
  };

  return (
    <div className="play-dice-screen">
      {dicesData &&
        dicesData.map((dice) => (
          <DicePanelComponent
            key={dice.id}
            id={dice.id}
            name={dice.name}
            diceType={dice.diceType}
            diceAdvantage={dice.diceAdvantage}
            diceBuff={dice.diceBuff}
            diceDeBuff={dice.diceDeBuff}
            diceSelected={dice.diceSelected}
            diceResultSelected={dice.diceResultSelected}
            rollDiceData={dice.rollDiceData}
            disableRemove={dicesData.length === 1}
            onChange={onChange}
            rollDice={rollUniqueDice}
            plusDice={plusDice}
            removeDice={removeDice}
            rollAllDices={rollAllDices}
          />
        ))}
    </div>
  );
};

export { PlayDiceScreen };
