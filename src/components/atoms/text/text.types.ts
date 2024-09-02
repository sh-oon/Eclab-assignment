import { ElementType, PropsWithChildren } from 'react'
import {TypographyTypes} from "@/tokens/vars";


export type TextProps = PropsWithChildren<{
  id?: string;
  className?: string;
  as?: ElementType;
  lineLimit?: number;
  typography: TypographyTypes;
  align?: 'left' | 'center' | 'right';
}>;
