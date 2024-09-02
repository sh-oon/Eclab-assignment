'use client'

import React from "react";

const summary = [
  [
    {
      icon: '✍️',
      title: 'Writing Competition',
    },
    {
      icon: '🏆',
      title: 'Competition',
    }
  ],
  [
    {
      icon: '🏫',
      title: 'Pre-College',
    },
    {
      icon: '💼',
      title: 'Internship',
    }
  ],
  [
    {
      icon: '⛑️',
      title: 'Volunteering',
    },
    {
      icon: '🔎',
      title: 'Research',
    }
  ]
]

type Props = {
  data: any
}

export const Summary = ({data}: Props) => {

  return (
    <div
      className='w-full bg-[#9747FF33] md:h-[98px] rounded-[10px] flex items-center justify-center md:px-[46px] gap-[50px]'>
      {summary.map((items, index) => (
        <React.Fragment key={index}>
          <div className='flex-1 flex gap-5 flex-col'>
            {items.map((item, index) => (
              <div key={index} className='flex-1 flex justify-between'>
                <div className='flex-1 flex items-center'>
                  <span className='w-6 h-6'>{item.icon}</span>
                  <span className='font-bold'>{item.title}</span>
                </div>
                <span>-</span>
              </div>
            ))}
          </div>
          {index !== summary.length - 1 && (
            <div className='h-[58px] w-[1px] bg-divider'/>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
