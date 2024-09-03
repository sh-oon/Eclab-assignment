'use client'

import {Button, Text} from "@/components/atoms";
import {Checkbox} from "@/components/atoms/checkbox";
import React from "react";
import {useDevice} from "@/context/device";

type Props = {
  // 문구
  content: string;
  // 동의 여부 문구
  agreeContent: string;
  // 핸들러
  onAgree: () => void;
}

export const SendReportAgreement = () => {
  const [isAgreed, setIsAgreed] = React.useState(false)
  const {device} = useDevice()

  return (
    <section className='w-full max-w-[1024px] pt-[40px] flex items-center flex-col gap-[25px] pb-8'>
      <Text typography='typo-s' align='center'>Once sent, the report is final and cannot be retrieved. The counselor is solely responsible for any incorrections in the report.</Text>
      <label htmlFor='send-report' className='flex gap-[15px]'>
        <Checkbox
          id='send-report'
          checked={isAgreed}
          width={20}
          height={20}
          className='mr-3'
          onChange={() => {
            setIsAgreed(!isAgreed)
          }}
        />
        <Text typography='typo-s'>I agree to the above.</Text>
      </label>
      <Button
        variant='secondary'
        size='large'
        width='full'
        className={`${device === 'mobile' ? 'w-dvw rounded-none' : ''}`}
        disabled={!isAgreed}
        onClick={() => {
          alert('Send to Student')
        }}
      >Send to Student</Button>
    </section>
  )
}
