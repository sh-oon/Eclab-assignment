'use client'

import {useOverlay} from "@/context/overlay";
import {navigation} from "@/constants/navigation";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useEffect} from "react";

type Props = {
  device: string;
};

export const Header = ({device}: Props) => {
  const pathname = usePathname()
  const {showOverlay, hideOverlay, isVisible} = useOverlay();

  const selectedClass = (link: string) => {
    const defaultClass = 'text-white block py-[18px] px-5'
    return pathname === link ? `${defaultClass} bg-primary text-white` : `${defaultClass} text-unselected`
  }

  const handleShowOverlay = () => {
    if (isVisible) {
      hideOverlay();
    } else {
      showOverlay(
        <>
          {navigation.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className={selectedClass(item.link)}
            >
              {item.title}
            </Link>
          ))}
        </>
      );
    }
  };

  useEffect(() => {
    hideOverlay();
  }, [hideOverlay, pathname]);

  return (
    <header
      className='md:h-[80px] h-[55px] w-full bg-secondary fixed px-4 md:px-[40px] justify-between md:justify-start flex items-center z-[1001]'>
      <div className='flex gap-[30px] items-center'>
        <svg width="105" height="20" viewBox="0 0 105 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M105 14.4209C104.962 13.0322 104.49 11.9389 103.596 11.1715C102.833 10.5164 101.915 10.0273 100.864 9.71416C101.556 9.38883 102.195 8.9119 102.769 8.29223C103.475 7.52649 103.854 6.45257 103.894 5.10035V5.09814V5.09592V5.0406C103.892 4.40709 103.776 3.81397 103.552 3.27618C103.33 2.74559 103 2.26147 102.571 1.83821C101.99 1.27054 101.242 0.827914 100.348 0.523056C99.4501 0.216539 98.419 0.059407 97.2833 0.0566406H88.9097V19.9974H97.708C99.9071 19.9808 101.68 19.4834 102.978 18.5202C104.291 17.5459 104.971 16.1875 105 14.484V14.4823V14.4807V14.4209ZM90.7146 1.72644H97.2489C98.8025 1.73972 100.007 2.06394 100.826 2.68915C101.644 3.31104 102.046 4.12436 102.054 5.17504V5.22705C102.027 6.4924 101.579 7.42856 100.684 8.08917C100.176 8.46485 99.5658 8.73873 98.8698 8.9036L98.7414 8.93403V10.8429L98.8881 10.8606C100.044 11 100.985 11.2971 101.684 11.7441C102.671 12.3771 103.155 13.2507 103.163 14.4148V14.4685C103.144 15.6697 102.675 16.5842 101.727 17.2615C100.779 17.9437 99.4451 18.2967 97.7614 18.3099H90.7146V1.72644Z"
            fill="white"/>
          <path
            d="M85.288 19.7636L76.1489 0.147052L76.1045 0.0507812H75.9977H74.578H74.4719L74.4268 0.147052L65.2883 19.7636L65.1782 19.9993H65.4395H66.8575H66.9642L67.0087 19.9031L75.2879 2.13222L80.2452 12.7729H75.2873H74.9988L75.1428 13.0219L75.9616 14.4339L76.01 14.5169H76.1061H81.0578L83.5671 19.9031L83.6121 19.9993H83.7183H85.1368H85.3981L85.288 19.7636Z"
            fill="white"/>
          <path
            d="M61.5005 18.2563H48.9039V0.197234V0.03125H48.7371H47.3191H47.1523V0.197234V19.8337V19.9997H47.3191H61.5005H61.6673V19.8337V18.4223V18.2563H61.5005Z"
            fill="white"/>
          <path
            d="M35.4681 0.0626221H27.9894C26.6375 0.0626221 25.3257 0.325984 24.0911 0.846068C22.8982 1.34789 21.8276 2.06716 20.9076 2.98229C19.9876 3.89797 19.2655 4.96358 18.7614 6.15093C18.2388 7.37976 17.9742 8.68551 17.9742 10.0311C17.9742 11.3767 18.2388 12.6824 18.7614 13.9112C19.2655 15.0986 19.9882 16.1642 20.9076 17.0799C21.8276 17.9956 22.8982 18.7143 24.0911 19.2161C25.3257 19.7362 26.6375 19.9995 27.9894 19.9995H35.6349V18.2562H27.9894C25.782 18.2562 23.707 17.4008 22.1461 15.8472C20.5852 14.2936 19.7258 12.2282 19.7258 10.0311C19.7258 7.83401 20.5852 5.76861 22.1461 4.215C23.707 2.66138 25.782 1.80601 27.9894 1.80601H35.6349V0.0626221H35.4681Z"
            fill="white"/>
          <path
            d="M14.3482 8.68945H0.166762H0V8.85544V19.8336V19.9996H0.166762H14.3482H14.515V19.8336V18.4222V18.2562H14.3482H1.75156V10.4328H14.3482H14.515V10.2669V8.85544V8.68945H14.3482Z"
            fill="white"/>
          <path d="M14.3482 0H0.166762H0V0.165984V1.5774V1.74339H0.166762H14.3482H14.515V1.5774V0.165984V0H14.3482Z"
                fill="white"/>
        </svg>

        {device === 'desktop' && (
          <span className='text-white'>EDU.CENTER</span>
        )}
      </div>
      {device === 'mobile' && (
        <button
          className='text-white'
          onClick={() => handleShowOverlay()}
        >
          {isVisible ? (
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd"
                    d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L6 4.58579L10.2929 0.292893C10.6834 -0.0976311 11.3166 -0.0976311 11.7071 0.292893C12.0976 0.683417 12.0976 1.31658 11.7071 1.70711L7.41421 6L11.7071 10.2929C12.0976 10.6834 12.0976 11.3166 11.7071 11.7071C11.3166 12.0976 10.6834 12.0976 10.2929 11.7071L6 7.41421L1.70711 11.7071C1.31658 12.0976 0.683417 12.0976 0.292893 11.7071C-0.0976311 11.3166 -0.0976311 10.6834 0.292893 10.2929L4.58579 6L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"
                    fill="white"/>
            </svg>
          ) : (
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1H17M1 7H17M1 13H17" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

          )}
        </button>
      )}
    </header>
  );
}
