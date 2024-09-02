'use client'

type Props = {
  device: string;
};

export const Header = ({device}: Props) => {
  return (
    <header
      className='md:h-[80px] h-[55px] w-full bg-secondary fixed px-4 md:px-[40px] justify-between md:justify-start flex items-center z-10'>
      <div className='flex gap-[30px] items-center'>
        <h1 className='text-white text-l md:text-xl'>Header</h1>
        {device === 'desktop' && (
          <span className='text-white'>EDU.CENTER</span>
        )}
      </div>
      {device === 'mobile' && (
        <button className='text-white'>Menu</button>
      )}
    </header>
  );
}
