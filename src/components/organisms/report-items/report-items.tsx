'use client'

import {useDevice} from "@/context/device";
import {EcReportItem} from "@/types/response";
import {Button, Text} from "@/components/atoms";
import Link from "next/link";
import {FC} from "react";

type Props = {
  reportItem: EcReportItem;
  authorization: 'counselor' | 'student';
  index: number;
}

type ContentData = {
  title: string;
  content: string;
  icon: FC;
}

const FilterIcon:FC = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5.83334 5.00001H14.1667L9.99167 10.25L5.83334 5.00001ZM3.54167 4.67501C5.225 6.83334 8.33334 10.8333 8.33334 10.8333V15.8333C8.33334 16.2917 8.70834 16.6667 9.16667 16.6667H10.8333C11.2917 16.6667 11.6667 16.2917 11.6667 15.8333V10.8333C11.6667 10.8333 14.7667 6.83334 16.45 4.67501C16.875 4.12501 16.4833 3.33334 15.7917 3.33334H4.2C3.50834 3.33334 3.11667 4.12501 3.54167 4.67501Z"
      fill="#7A40F2"/>
  </svg>

)

const LibraryAddIcon:FC = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16.6667 3.33332V13.3333H6.66666V3.33332H16.6667ZM16.6667 1.66666H6.66666C5.75 1.66666 5 2.41666 5 3.33332V13.3333C5 14.25 5.75 15 6.66666 15H16.6667C17.5833 15 18.3333 14.25 18.3333 13.3333V3.33332C18.3333 2.41666 17.5833 1.66666 16.6667 1.66666ZM10.3917 11.6667L7.5 8.74999L8.66666 7.57499L10.3917 9.30832L14.6667 4.99999L15.8333 6.17499L10.3917 11.6667ZM3.33333 4.99999H1.66666V16.6667C1.66666 17.5833 2.41666 18.3333 3.33333 18.3333H15V16.6667H3.33333V4.99999Z"
      fill="#7A40F2"/>
  </svg>
)

export const ReportItems = ({index, reportItem, authorization}: Props) => {
  const {device} = useDevice();

  const contentData:ContentData[] = [
    {title: 'Type', content: reportItem.ec_db.ec_type, icon: <FilterIcon /> },
    {title: 'Participation', content: reportItem.ec_db.participate_way[0], icon: <FilterIcon /> },
    {title: 'Recognition', content: reportItem.ec_db.recognition_level, icon: <FilterIcon />  },
    {title: 'Nationality', content: reportItem.ec_db.nationality, icon: <LibraryAddIcon />  },
    {title: 'Grade', content: reportItem.ec_db.grade_limit.join(', '), icon: <LibraryAddIcon /> },
    {title: 'Age', content: reportItem.ec_db.age_limit.join(', '), icon: <LibraryAddIcon /> },
  ]

  const handleAddToECList = () => {
    console.log('add to EC List')
  }

  return (
    <>
      {device === 'desktop' && (
        <div className='border border-card rounded-[10px] p-[30px]'>
          <div className='flex w-full relative'>
            <div className='flex gap-[10px] pb-[40px]'>
              <Text
                typography='typo-l-bold'
                color={'white'}
                className='inline-block h-fit py-[2px] px-2 bg-primary rounded-[3px]'>
                {index}
              </Text>
              <div className='flex flex-col gap-[10px]'>
                <Link
                  className='flex gap-[10px] items-center'
                  href={reportItem.ec_db.url}
                  target='_blank'
                >
                  <Text
                    className='cursor-pointer hover:underline'
                    typography='typo-l-bold'
                  >
                    {reportItem.ec_db.name}
                  </Text>
                  <div className='icon-container small'>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M11.8284 8.17157C10.2663 6.60948 7.73367 6.60948 6.17157 8.17157L2.17157 12.1716C0.609476 13.7337 0.609476 16.2663 2.17157 17.8284C3.73367 19.3905 6.26633 19.3905 7.82843 17.8284L8.92999 16.7269M8.17157 11.8284C9.73367 13.3905 12.2663 13.3905 13.8284 11.8284L17.8284 7.82843C19.3905 6.26633 19.3905 3.73367 17.8284 2.17157C16.2663 0.609476 13.7337 0.609476 12.1716 2.17157L11.072 3.27118"
                        stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </Link>
                <Text typography='typo-s'>{reportItem.ec_db.organization}</Text>
                {authorization === 'counselor' && (
                  <Text
                    typography='typo-xs-bold'
                    color='white'
                    className='py-[3px] px-2.5 bg-badge rounded-full w-fit'
                  >
                    {reportItem.ec_db.year}
                  </Text>
                )}
              </div>
            </div>
            {authorization === 'student' && (
              <Button
                variant={reportItem.is_added ? 'tertiary' : 'primary'}
                size='medium'
                onClick={() => handleAddToECList()}
                className='absolute right-0 top-0'
              >
                {reportItem.is_added ? 'already added!' : 'add to EC List'}
              </Button>
            )}
          </div>
          <div className='w-full border-t-2 border-dashed border-card pt-5 flex flex-col gap-[18px]'>
            <div className='flex gap-[10px] items-center'>
              <div className='icon-container small'>
                <FilterIcon />
              </div>
              <Text typography='typo-s'>
                <strong>Type: </strong>
                {reportItem.ec_db.ec_type}
                &nbsp;•&nbsp;
                <strong>Participation: </strong>
                {reportItem.ec_db.participate_way[0]}
                &nbsp;•&nbsp;
                <strong>Recognition: </strong>
                {reportItem.ec_db.recognition_level}
              </Text>
            </div>
            <div className='flex gap-[10px]'>
              <div className='icon-container small'>
                <LibraryAddIcon />
              </div>
              <Text typography='typo-s'>
                <strong>Nationality: </strong>
                {reportItem.ec_db.nationality}
                &nbsp;•&nbsp;
                <strong>Grade: </strong>
                {reportItem.ec_db.grade_limit.join(', ')}
                &nbsp;•&nbsp;
                <strong>Age: </strong>
                {reportItem.ec_db.age_limit.join(', ')}
              </Text>
            </div>
          </div>
        </div>
      )}

      {device === 'mobile' && (
        <div className='border border-card rounded-[10px] flex flex-col p-[20px] bg-white'>
          <div className='flex w-full relative'>
            <div className='flex gap-[10px] pb-[20px]'>
              <Text
                typography='typo-l-bold'
                color={'white'}
                className='inline-block h-fit py-[2px] px-2 bg-primary rounded-[3px]'>
                {index}
              </Text>
              <div className='flex flex-col gap-[10px]'>
                <Text typography='typo-s-bold'>{reportItem.ec_db.name}</Text>
                <Text typography='typo-s'>{reportItem.ec_db.organization}</Text>
              </div>
            </div>
          </div>
          <div className='w-full border-t-2 border-dashed border-card pt-5 flex flex-col gap-[18px]'>
            {contentData.map((item, index) => (
              <div className='flex gap-[10px]' key={index}>
                <div className='icon-container small'>
                  {item.icon}
                </div>
                <Text typography='typo-s'>
                  <strong>{item.title} </strong>
                  {item.content}
                </Text>
              </div>
            ))}
          </div>
          <div className='w-full flex gap-[10px] pt-[30px]'>
            {authorization === 'student' && (
              <Button
                variant={reportItem.is_added ? 'tertiary' : 'primary'}
                size='medium'
                stretch
                onClick={() => console.log('add to EC List')}
                className='whitespace-nowrap'
              >
                {reportItem.is_added ? 'already added!' : 'add to EC List'}
              </Button>
            )}
            <Button
              variant='secondary'
              size='medium'
              stretch
              className='whitespace-nowrap'
              onClick={() => window.open(reportItem.ec_db.url)}
            >
              {authorization === 'counselor' ? (
                <>
                  <div className='icon-container small'>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M11.8284 8.17157C10.2663 6.60948 7.73367 6.60948 6.17157 8.17157L2.17157 12.1716C0.609476 13.7337 0.609476 16.2663 2.17157 17.8284C3.73367 19.3905 6.26633 19.3905 7.82843 17.8284L8.92999 16.7269M8.17157 11.8284C9.73367 13.3905 12.2663 13.3905 13.8284 11.8284L17.8284 7.82843C19.3905 6.26633 19.3905 3.73367 17.8284 2.17157C16.2663 0.609476 13.7337 0.609476 12.1716 2.17157L11.072 3.27118"
                        stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <Text typography='typo-s'>Visit Website</Text>
                </>
              ) : 'Visit Website'}
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
