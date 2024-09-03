import {formatDate} from "@/utils/timezone";
import React from "react";
import {ReportItems, Summary} from "@/components/organisms";
import {TestData} from "@/types/response";
import {headers} from "next/headers";
import {Button, Text} from "@/components/atoms";
import {Checkbox} from "@/components/atoms/checkbox";
import {SendReportAgreement} from "@/components/organisms/agreement/send-report-agreement";

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

export default async function Counselor() {
  const data: TestData | null = await getTestData()
  const headerList = headers()
  const device = headerList.get('x-device-type')

  if (!data) {
    return <div>Failed to load data</div>
  }

  const ecHeaderData = [
    {title: 'Title', content: data.title},
    {title: 'Student', content: `${data.counselor.name} (${data.counselor.email})`},
    {title: 'School', content: data.student.profile.school.name},
    {title: 'Grade', content: data.student.profile.grade},
    {title: 'Counselor', content: data.counselor.name},
    {title: 'Status', content: data.ec_report_status},
    {title: 'Received Date', content: formatDate(data.send_dt)},
    {title: 'Delivered Date', content: formatDate(data.delivered_dt)},
  ]

  return (
    <div className='px-4 md:pr-0 w-full md:w-[1024px] md:ml-[148px] pt-[95px] md:pt-[60px]'>
      <h1 className='text-xl md:text-xxl font-bold pb-[30px] md:pb-[48px]'>EC Report Details</h1>
      <section
        className='w-full h-full p-0 md:p-[40px] bg-white rounded-[20px] flex flex-col gap-[30px] md:gap-[40px]'>
        {device === 'desktop' && (
          <>
            <div className='grid grid-cols-2 gap-y-[30px]'>
              {ecHeaderData.map((item, index) => (
                <div className='flex-1 flex' key={index}>
                  <span className='font-bold md:w-1/3'>{item.title}</span>
                  <span className='inline-flex md:w-2/3'>{item.content}</span>
                </div>
              ))}
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
            <div className='flex-1 md:overflow-auto flex flex-col gap-5'>
              {data.ec_report_items.map((item, index) => (
                <ReportItems
                  key={index}
                  index={index + 1}
                  authorization={'counselor'}
                  reportItem={item}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <SendReportAgreement />
    </div>
  );
}
