'use client'


import {usePathname} from "next/navigation";
import Link from "next/link";

const navigation = [
  {
    title: 'EC Report_STU',
    link: '/student',
  },
  {
    title: 'EC Report_CON',
    link: '/counselor',
  },
]

export const Navigator = () => {
  const pathname = usePathname()

  const selectedClass = (link: string) => {
    const defaultClass = 'w-full h-[60px] p-5 flex gap-[14px] items-center  rounded-[10px]'
    return pathname === link ? `${defaultClass} bg-primary text-white` : `${defaultClass} text-unselected`
  }

  return (
    <aside className='w-[300px] h-full bg-secondary fixed pt-[80px] z-[9]'>
      <nav className='w-full px-[40px] pt-[17px]'>
        <ul className='flex flex-col gap-1'>
          {navigation.map((nav, index) => (
            <Link
              className={selectedClass(nav.link)}
              key={index}
              href={nav.link}
            >
              <div className='w-6 h-6 flex items-center justify-center'>
                <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6.79999 0.400024C6.13725 0.400024 5.59999 0.937283 5.59999 1.60002C5.59999 2.26277 6.13725 2.80002 6.79999 2.80002H9.19999C9.86273 2.80002 10.4 2.26277 10.4 1.60002C10.4 0.937283 9.86273 0.400024 9.19999 0.400024H6.79999Z"
                    fill={nav.link === pathname ? 'white' : '#9CA3AF'}/>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.799988 4.00002C0.799988 2.67454 1.8745 1.60002 3.19999 1.60002C3.19999 3.58825 4.81176 5.20002 6.79999 5.20002H9.19999C11.1882 5.20002 12.8 3.58825 12.8 1.60002C14.1255 1.60002 15.2 2.67454 15.2 4.00002V17.2C15.2 18.5255 14.1255 19.6 12.8 19.6H3.19999C1.8745 19.6 0.799988 18.5255 0.799988 17.2V4.00002ZM4.39999 8.80002C3.73725 8.80002 3.19999 9.33728 3.19999 10C3.19999 10.6628 3.73725 11.2 4.39999 11.2H4.41199C5.07473 11.2 5.61199 10.6628 5.61199 10C5.61199 9.33728 5.07473 8.80002 4.41199 8.80002H4.39999ZM7.99999 8.80002C7.33725 8.80002 6.79999 9.33728 6.79999 10C6.79999 10.6628 7.33725 11.2 7.99999 11.2H11.6C12.2627 11.2 12.8 10.6628 12.8 10C12.8 9.33728 12.2627 8.80002 11.6 8.80002H7.99999ZM4.39999 13.6C3.73725 13.6 3.19999 14.1373 3.19999 14.8C3.19999 15.4628 3.73725 16 4.39999 16H4.41199C5.07473 16 5.61199 15.4628 5.61199 14.8C5.61199 14.1373 5.07473 13.6 4.41199 13.6H4.39999ZM7.99999 13.6C7.33725 13.6 6.79999 14.1373 6.79999 14.8C6.79999 15.4628 7.33725 16 7.99999 16H11.6C12.2627 16 12.8 15.4628 12.8 14.8C12.8 14.1373 12.2627 13.6 11.6 13.6H7.99999Z"
                    fill={nav.link === pathname ? 'white' : '#9CA3AF'}
                  />
                </svg>
              </div>
              <span>{nav.title}</span>
            </Link>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
