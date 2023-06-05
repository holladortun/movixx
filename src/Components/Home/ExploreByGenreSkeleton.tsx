/* eslint-disable import/no-extraneous-dependencies */
import Skeleton from 'react-loading-skeleton';

const ExploreByGenreSkeleton = () => {
  return (
    <div
      /*  style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${item.backdrop_path})`,
        }} */
      className='h-[600px] px-[75px] relative flex flex-col justify-center bg-cover overflow-hidden '
    >
     {/*  <div className=' absolute top-0 left-0 z-10 w-full h-full bg-gradient-to-t from-[#0D0C0F] via-transparent to-[#0D0C0F]'></div>
      <div className=' absolute top-0 left-0 z-10 w-full h-full bg-gradient-to-r from-[#0D0C0F] '></div> */}
      <Skeleton height={30} width={100} className='mt-20' />
      <Skeleton height={50} width={400} className='mt-8 ' />
      <Skeleton height={50} width={350} className='' />
      <div className='relative z-20 flex flex-col items-start w-[600px] h-[350px]'>
        <div className='mt-4'>
          <Skeleton height={20} width={30} className='' />
        </div>
        <div className='mt-8'>
          <Skeleton height={50} width={280} className='' />
        </div>
        ;
      </div>
    </div>
  );
};

export default ExploreByGenreSkeleton;
