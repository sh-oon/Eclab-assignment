import {MouseEventHandler} from "react";

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

export type ButtonSize = 'large' | 'medium' | 'small' | 'xSmall';

export type ButtonProps = {
  variant: ButtonVariant;
  size: ButtonSize;
  children: string | string[];
  pending?: boolean;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  className?: string;
  stretch?: boolean;
}
