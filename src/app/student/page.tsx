import {formatDate} from "@/utils/timezone";
import React from "react";
import {ReportItems, Summary} from "@/components/organisms";
import {TestData} from "@/types/response";
import {headers} from "next/headers";

async function getTestData(): Promise<Awaited<TestData>> {
  try {
    const res = await fetch('http://localhost:3000/api/test')
    const {data} = await res.json()

    return data
  } catch (e) {
    console.error(e)
    return null
  }
}

export default async function Student() {
  const data: TestData | null = await getTestData()
  const headerList = headers()
  const device = headerList.get('x-device-type')

  if (!data) {
    return <div>Failed to load data</div>
  }

  return (
    <div className='px-4 md:pr-0 md:pl-[148px] pt-[95px] md:pt-[60px]'>
      <h1 className='text-xl md:text-xxl font-bold pb-[30px] md:pb-[48px]'>EC Report Details</h1>
      <section
        className='w-full h-full md:w-[1024px] p-0 md:p-[40px] bg-white rounded-[20px] flex flex-col gap-[30px] md:gap-[40px]'>
        {device === 'desktop' && (
          <>
            <div className='flex-1 flex items-center'>
              <div className='flex-1 flex'>
                <span className='font-bold md:w-1/3'>Title</span>
                <span className='inline-flex md:w-2/3'>{data.title}</span>
              </div>
              <div className='flex-1 flex'>
                <span className='font-bold md:w-1/3'>Counselor</span>
                <span className='inline-flex md:w-2/3'>{data.counselor.name}</span>
              </div>
            </div>
            <div className='flex-1 flex items-center'>
              <div className='w-1/2 flex'>
                <span className='font-bold md:w-1/3'>Received Date</span>
                <span className='inline-flex md:w-2/3'>{formatDate(data.delivered_dt)}</span>
              </div>
            </div>
          </>
        )}
        {device === 'mobile' && (
          <>
            <div className='w-full bg-white rounded-[10px] border border-card flex flex-col p-5 gap-5'>
              <div className='flex-1 flex items-center'>
                <span className='font-bold w-2/5'>Title</span>
                <span className='inline-flex w-3/5'>{data.title}</span>
              </div>
              <div className='flex-1 flex items-center'>
                <span className='font-bold w-2/5'>Counselor</span>
                <span className='inline-flex w-3/5'>{data.counselor.name}</span>
              </div>
              <div className='flex-1 flex items-center'>
                <span className='font-bold w-2/5'>Received Date</span>
                <span className='inline-flex w-3/5'>{formatDate(data.delivered_dt)}</span>
              </div>
            </div>
          </>
        )}
        <div className='flex-1 flex flex-col h-full'>
          <h1 className='font-bold inline-block pb-[15px]'>Total : {data.ec_report_items.length}</h1>
          <div className='flex flex-col gap-5'>
            <Summary data={data}/>
            <div className='md:max-h-96 flex-1 md:overflow-auto flex flex-col gap-5'>
              {data.ec_report_items.map((item, index) => (
                <ReportItems
                  key={index}
                  index={index + 1}
                  authorization={'student'}
                  reportItem={item}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
