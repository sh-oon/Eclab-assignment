import {TestData} from "@/types/response";
import {headers} from "next/headers";
import {formatDate} from "@/utils/timezone";
import {Text} from "@/components/atoms/text/text";
import {ReportItems, Summary} from "@/components/organisms";
import {SendReportAgreement} from "@/components/organisms/agreement/send-report-agreement";
import React from "react";

interface CustomError extends Error {
  statusCode?: number;
  message: string;
}

async function getTestData(): Promise<TestData> {
  try {
    const res = await fetch('http://localhost:3000/api/test');

    if (!res.ok) {
      const error: CustomError = new Error('Failed to fetch data');
      error.statusCode = res.status;
      throw error;
    }

    const { data } = await res.json();
    return data;
  } catch (e) {
    const error = e as CustomError;
    error.message = error.message || 'An unexpected error occurred';
    throw error;
  }
}

export default async function Slug({params}: { params: { mode: 'student' | 'counselor' } }) {
  const data: TestData = await getTestData()
  const headerList = headers()
  const device = headerList.get('x-device-type')

  if (!data) {
    return <div>Failed to load data</div>
  }

  const ecHeaderData = params.mode === 'student' ? [
    {title: 'Title', content: data.title},
    {title: 'Counselor', content: data.counselor.name},
    {title: 'Received Date', content: formatDate(data.send_dt)},
  ] : [
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
    <div className='px-4 md:pr-0 w-full md:w-[1024px] md:ml-[148px] pt-[95px] md:pt-[60px] md:pb-8'>
      <h1 className='text-xl md:text-xxl font-bold pb-[30px] md:pb-[48px]'>EC Report Details</h1>
      <section
        className='w-full h-full p-0 md:p-[40px] md:bg-white rounded-[20px] flex flex-col gap-[30px] md:gap-[40px]'>
        <div className='grid md:grid-cols-2 gap-y-[20px] md:gap-y-[40px] border border-card rounded-[10px] md:border-none p-5 md:p-0 bg-white'>
          {ecHeaderData.map((item, index) => (
            <div className='flex-1 grid grid-cols-5 md:grid-cols-3' key={index}>
              <Text
                className='col-span-2 md:col-span-1'
                typography={device === 'desktop' ? 'typo-m-bold' : 'typo-s-bold'}
              >
                {item.title}
              </Text>
              <Text
                className='col-span-3 md:col-span-2'
                typography={device === 'desktop' ? 'typo-m' : 'typo-s'}
              >
                {item.content}
              </Text>
            </div>
          ))}
        </div>
        <div className='flex-1 flex flex-col h-full'>
          <h1 className='font-bold inline-block pb-[15px]'>Total : {data.ec_report_items.length}</h1>
          <div className='flex flex-col gap-5'>
            <Summary data={data}/>
            <div className='flex-1 md:overflow-auto flex flex-col gap-5'>
              {data.ec_report_items.map((item, index) => (
                <ReportItems
                  key={index}
                  index={index + 1}
                  authorization={params.mode}
                  reportItem={item}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      {params.mode === 'counselor' && (
        <SendReportAgreement/>
      )}
    </div>
  );
}
