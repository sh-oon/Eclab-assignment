'use client'

import {forwardRef} from "react";
import {ButtonProps} from "@/components/atoms/button/button.types";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({onClick, children, className, variant, stretch, size, pending, disabled}, ref) => {
  const getClassNameByVariant = () => {
    switch (variant) {
      case 'primary':
        return 'button-primary'
      case 'secondary':
        return 'button-secondary'
      case 'tertiary':
        return 'button-tertiary'
      default:
        return 'button-primary'
    }
  }

  const getClassNameBySize = () => {
    switch (size) {
      case 'large':
        return 'button-large'
      case 'medium':
        return 'button-medium'
      case 'small':
        return 'button-small'
      case 'xSmall':
        return 'button-xSmall'
      default:
        return 'button-medium'
    }
  }

  const getClassNameByState = () => {
    if (disabled) {
      return 'button-disabled'
    }
    if (pending) {
      return 'button-pending'
    }
    return ''
  }

  const buttonClassName = [
    'button',
    getClassNameByVariant(),
    getClassNameBySize(),
    getClassNameByState(),
    stretch ? 'flex-1' : 'w-fit',
    className
  ].join(' ')

  return (
    <button
      ref={ref}
      className={buttonClassName}
      onClick={onClick ? onClick : () => {}}
    >
      {children}
    </button>
  )
})

Button.displayName = 'Button'
