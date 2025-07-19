import { INPUT_TYPE } from "../../../../../core";

export interface OnChangeInputProps {
  target: { name: string; value: string; checked?: boolean };
  objectId?: string;
  inputTypeEnum?: (typeof INPUT_TYPE)[keyof typeof INPUT_TYPE];
  regexp?: RegExp;
}
