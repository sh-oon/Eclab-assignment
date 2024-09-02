import React, {ForwardedRef, forwardRef} from "react";
import {TextProps} from "@/components/atoms/text/text.types";

const semantic = {
  typography: {
    'typo-xl-bold': 'text-xl font-bold leading-xl',
    'typo-xl-medium': 'text-xl font-medium leading-xl',
    'typo-xl': 'text-xl font-regular leading-xl',
    'typo-l-bold': 'text-l font-bold leading-l',
    'typo-l-medium': 'text-l font-medium leading-l',
    'typo-l': 'text-l font-regular leading-l',
    'typo-m-bold': 'text-m font-bold leading-m',
    'typo-m-medium': 'text-m font-medium leading-m',
    'typo-m': 'text-m font-regular leading-m',
    'typo-s': 'text-s font-regular leading-s',
    'typo-xs': 'text-xs font-regular leading-xs',
  },

}


export const Text:ForwardedRef<TextProps> = forwardRef<HTMLElement, TextProps>(
  ({ id, className, as: Tag = 'span', color = 'primary', typography, children, lineLimit, align }, ref) => {

    const lineLimitClass = lineLimit ? `line-clamp-${lineLimit}` : ''

    // getClassNames
    const getClassNames = () => {
      const classNames = [
        `text-wrap`,
        `text-${color}`,
        `${semantic.typography[typography]}`,
        `align-${align}`,
        lineLimitClass,
        className,
      ]
      return classNames.filter(Boolean).join(' ')
    }

    return (
      <Tag
        ref={ref}
        id={id}
        className={getClassNames()}
      >
        {children}
      </Tag>
    )
  },
)

Text.displayName = 'Text'
