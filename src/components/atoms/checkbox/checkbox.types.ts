import {ChangeEvent} from "react";

export type CheckboxProps = {
  id: string;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};
