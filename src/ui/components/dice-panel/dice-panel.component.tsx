import "./dice-panel.css";

import {
  CheckBoxInputComponent,
  SelectInputComponent,
  TextInputComponent,
} from "../inputs";
import { DICE_ID_TO_DICE_ICONS_MAPPER, DICE_PANEL_INPUTS } from "../../../core";

import type { OnChangeInputProps } from "../inputs/shared";
import rollDiceImage from "../../../core/icons/roll-dice.png";
import rollAllDicesImage from "../../../core/icons/roll-all-dices.png";
import deleteDiceImage from "../../../core/icons/delete.png";
import plusDiceImage from "../../../core/icons/plus-dice.png";

interface DicePanelComponentProps {
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
  onChange: (event: OnChangeInputProps) => void;
  rollDice: (id: string) => void;
  plusDice: () => void;
  rollAllDices: () => void;
  removeDice: (id: string) => void;
  disableRemove: boolean;
}

const DicePanelComponent = ({
  id,
  name,
  diceType,
  diceAdvantage,
  diceBuff,
  diceDeBuff,
  diceSelected,
  diceResultSelected,
  rollDiceData,
  disableRemove,
  onChange,
  rollDice,
  plusDice,
  removeDice,
  rollAllDices,
}: DicePanelComponentProps) => {
  const getDiceResultValue = (id: string): string => {
    return (
      (rollDiceData.diceResultOptions || []).find((option) => option.id === id)
        ?.value || ""
    );
  };

  const calculateDiceTextResult = () => {
    if (!getDiceResultValue(diceResultSelected)) {
      return `Sem Dados Jogados Até o Momento...`;
    }

    const parsedDiceResult = parseInt(getDiceResultValue(diceResultSelected));

    const totalResult =
      parsedDiceResult -
      rollDiceData.diceResultDebuf +
      rollDiceData.diceResultBuff;

    const buffString = rollDiceData.diceResultBuff
      ? ` + ( ${rollDiceData.diceResultBuff}Bu )`
      : "";
    const deBuffString = rollDiceData.diceResultDebuf
      ? ` - ( ${rollDiceData.diceResultDebuf}De )`
      : "";

    return `Resultado: ( ${parsedDiceResult}Da )${buffString}${deBuffString} = ${totalResult}`;
  };

  const dicePanelOnChange = (event: OnChangeInputProps) => {
    onChange({ ...event, objectId: id });
  };

  return (
    <div className="dice-panel-component">
      <div className="dice-panel-component__input-data">
        <TextInputComponent
          name={DICE_PANEL_INPUTS.name.inputFieldName}
          label={DICE_PANEL_INPUTS.name.inputFieldLabel}
          value={name}
          onChange={dicePanelOnChange}
        />
        <div className="dice-panel-component__dice-numbers">
          <SelectInputComponent
            name={DICE_PANEL_INPUTS.diceType.inputFieldName}
            label={DICE_PANEL_INPUTS.diceType.inputFieldLabel}
            selectedId={diceType}
            onChange={dicePanelOnChange}
            icon={DICE_ID_TO_DICE_ICONS_MAPPER[diceType]}
            options={DICE_PANEL_INPUTS.diceType.options}
          />
          <TextInputComponent
            onlyNumbers={true}
            name={DICE_PANEL_INPUTS.diceAdvantage.inputFieldName}
            label={DICE_PANEL_INPUTS.diceAdvantage.inputFieldLabel}
            value={diceAdvantage}
            onChange={dicePanelOnChange}
          />
        </div>
        <div className="dice-panel-component__dice-increments">
          <TextInputComponent
            onlyNumbers={true}
            name={DICE_PANEL_INPUTS.diceBuff.inputFieldName}
            label={DICE_PANEL_INPUTS.diceBuff.inputFieldLabel}
            value={diceBuff}
            onChange={dicePanelOnChange}
          />
          <TextInputComponent
            onlyNumbers={true}
            name={DICE_PANEL_INPUTS.diceDeBuff.inputFieldName}
            label={DICE_PANEL_INPUTS.diceDeBuff.inputFieldLabel}
            value={diceDeBuff}
            onChange={dicePanelOnChange}
          />
        </div>
        <CheckBoxInputComponent
          checked={diceSelected}
          name={DICE_PANEL_INPUTS.diceSelected.inputFieldName}
          label={DICE_PANEL_INPUTS.diceSelected.inputFieldLabel}
          onChange={dicePanelOnChange}
        />
      </div>
      <div className="dice-panel-component__result-data">
        <button
          className="dice-panel-component__roll-dice"
          style={{
            backgroundImage: `url(${rollDiceImage})`,
          }}
          onClick={() => rollDice(id)}
        ></button>
        <SelectInputComponent
          name={DICE_PANEL_INPUTS.diceResult.inputFieldName}
          label={rollDiceData.diceResultsFieldLabel}
          selectedId={diceResultSelected}
          onChange={dicePanelOnChange}
          icon={
            DICE_ID_TO_DICE_ICONS_MAPPER[rollDiceData.diceResultTypeSelected]
          }
          options={rollDiceData.diceResultOptions}
        />
        <p className="dice-panel-component__text-result">
          {calculateDiceTextResult()}
        </p>
        <p className="dice-panel-component__date-result">{`Data: ${
          rollDiceData.diceResultDate || "Aguardando jogada."
        }`}</p>
      </div>
      <div className="dice-panel-component__functions">
        <button
          className="dice-panel-component__function"
          tooltip-message="Rolar dados selecionados."
          style={{
            backgroundImage: `url(${rollAllDicesImage})`,
          }}
          onClick={rollAllDices}
        ></button>
        <button
          className="dice-panel-component__function"
          tooltip-message="Adicionar dado."
          style={{
            backgroundImage: `url(${plusDiceImage})`,
          }}
          onClick={plusDice}
        ></button>
        <button
          className="dice-panel-component__function"
          tooltip-message={
            disableRemove ? "Remoção desabilitada" : "Remover dado."
          }
          style={{
            backgroundImage: `url(${deleteDiceImage})`,
          }}
          disabled={disableRemove}
          onClick={() => removeDice(id)}
        ></button>
      </div>
    </div>
  );
};

export { DicePanelComponent };
