'use client'

import React from "react";
import {summary, useSummaryCounts} from "@/hooks/summary";
import {TestData} from "@/types/response";
import {useDevice} from "@/context/device";

type Props = {
  data: TestData
}

export const Summary = ({data}: Props) => {
  const summaryData = useSummaryCounts(data.ec_report_items)
  const device = useDevice();

  console.log(data)
  return (
    <>
      {device === 'desktop' && (
        <div
          className='w-full bg-[#9747FF33] h-[98px] rounded-[10px] flex items-center justify-center px-[46px] gap-[50px]'>
          <>
            {summary.map((items, index) => (
              <React.Fragment key={index}>
                <div className='flex-1 flex gap-5 flex-col'>
                  {items.map((item, index) => (
                    <div key={index} className='flex-1 flex justify-between'>
                      <div className='flex-1 flex items-center'>
                        <span className='w-6 h-6'>{item.icon}</span>
                        <span className='font-bold'>{item.title}</span>
                      </div>
                      <span>{summaryData[item.title] || '-'}</span>
                    </div>
                  ))}
                </div>
                {index !== summary.length - 1 && (
                  <div className='h-[58px] w-[1px] bg-divider'/>
                )}
              </React.Fragment>
            ))}
          </>
        </div>
      )}
      {device === 'mobile' && (
        <div className='flex-1 flex gap-[10px] flex-col'>
          {summary.flat().map((item, index) => (
            <div key={index} className='flex-1 flex gap-[40px] bg-[#9747FF33] py-5 px-[40px] rounded-[10px]'>
              <div className='flex items-center'>
                <span className='w-6 h-6'>{item.icon}</span>
                <span className='font-bold'>{item.title}</span>
              </div>
              <span>{summaryData[item.title] || '-'}</span>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
