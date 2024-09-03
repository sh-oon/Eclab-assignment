import React, {ForwardedRef, forwardRef} from "react";
import {TextProps} from "@/components/atoms/text/text.types";

const semantic = {
  typography: {
    'typo-xxl-bold': 'text-xxl font-bold',
    'typo-xxl-medium': 'text-xxl font-medium',
    'typo-xxl': 'text-xxl font-regular',
    'typo-xl-bold': 'text-xl font-bold',
    'typo-xl-medium': 'text-xl font-medium',
    'typo-xl': 'text-xl font-regular',
    'typo-l-bold': 'text-l font-bold',
    'typo-l-medium': 'text-l font-medium',
    'typo-l': 'text-l font-regular',
    'typo-m-bold': 'text-m font-bold',
    'typo-m-medium': 'text-m font-medium',
    'typo-m': 'text-m font-regular',
    'typo-s': 'text-s font-regular',
    'typo-xs': 'text-xs font-regular',
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
