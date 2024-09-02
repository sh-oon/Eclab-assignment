import {formatDate} from "@/utils/timezone";
import {Logger} from "@/components/atoms";
import React from "react";
import {Summary} from "@/components/organisms";

async function getTestData() {
  try {
    const res = await fetch('http://localhost:3000/api/test')
    const {data} = await res.json()

    return data
  } catch (e) {
    console.error(e)
  }
}

export default async function Student() {
  const data = await getTestData()

  return (
    <div className='pl-[148px] pt-[60px]'>
      <h1 className='text-xl font-bold pb-[48px]'>EC Report Details</h1>

      <section className='w-[1024px] p-[40px] bg-white rounded-[20px] flex flex-col gap-[40px]'>
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
        <div className='flex-1 flex flex-col'>
          <h1 className='font-bold inline-block pb-[15px]'>Total : {data.ec_report_items.length}</h1>
          <Summary data={data} />
        </div>
      </section>
    </div>
  );
}
