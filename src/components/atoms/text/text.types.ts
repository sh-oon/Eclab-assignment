import { ElementType, PropsWithChildren } from 'react'
import {semantic} from "@/components/atoms/text/text.constants";

export type TypographyTypes = keyof typeof  semantic.typography;

export type AlignTypes = keyof typeof semantic.align;

export type TextProps = PropsWithChildren<{
  id?: string;
  className?: string;
  color?: string;
  as?: ElementType;
  lineLimit?: number;
  typography: TypographyTypes;
  align?: AlignTypes;
}>;
