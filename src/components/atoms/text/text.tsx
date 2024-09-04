import React, {forwardRef} from "react";
import {TextProps} from "@/components/atoms/text/text.types";
import {semantic} from "@/components/atoms/text/text.constants";

export const Text = forwardRef<HTMLElement, TextProps>(
  ({id, className, as: Tag = 'span', color = 'primary', typography, children, lineLimit, align = 'start'}, ref) => {

    const lineLimitClass = lineLimit ? `line-clamp-${lineLimit}` : ''

    // getClassNames
    const getClassNames = () => {
      const classNames = [
        `text-wrap`,
        `text-${color}`,
        `${semantic.typography[typography]}`,
        `${semantic.align[align]}`,
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
  })

Text.displayName = 'Text'
