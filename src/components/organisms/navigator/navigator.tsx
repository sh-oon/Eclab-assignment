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
  const router = usePathname()

  return (
    <aside className='w-[300px] h-full bg-secondary fixed pt-[80px]'>
      <nav className='w-full px-[40px] pt-[17px]'>
        <ul className='flex flex-col gap-1'>
          {navigation.map((nav, index) => (
            <Link
              className='w-full h-[60px] flex gap-[14px] items-center text-white'
              key={index}
              href={nav.link}
            >
              <div className='w-6 h-6 flex items-center justify-center'>I</div>
              <span>{nav.title}</span>
            </Link>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
