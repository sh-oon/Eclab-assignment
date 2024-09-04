'use client'

import {forwardRef, memo} from "react";
import {CheckboxProps} from "@/components/atoms/checkbox/checkbox.types";

export const Checkbox = memo(({
                                                                                                    id,
                                                                                                    checked,
                                                                                                    onChange
                                                                                                  }: CheckboxProps) => {
  const getClassNames = () => {
    const defaultClasses = 'rounded-[5px] border border-primary flex items-center justify-center cursor-pointer w-[22px] h-[22px]'

    return [
      defaultClasses,
      checked ? 'bg-primary' : '',
    ].join(' ')
  }

  return (
    <>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        className={'hidden'}
      />
      <div className={getClassNames()}>
        <div className='icon-container'>
          <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 6.45832L4.69231 10.125L13 1.875" stroke="white" strokeWidth="2" strokeLinecap="round"
                  strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </>
  )
})

Checkbox.displayName = 'Checkbox'
