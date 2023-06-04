/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/naming-convention */
import { BsPlayCircle, BsPlusCircle } from 'react-icons/bs';
import { useState } from 'react';
import { Tooltip } from 'react-tooltip';

const SimilarMovieCard = ({ item }: any) => {
  const { title, release_date, backdrop_path, overview } = item;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className='   bg-[#0b0b0b]  w-[280px] rounded-b rounded-t-xl cursor-pointer relative'
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      {isHovered ? (
        <div className='absolute top-0 flex justify-center items-center w-full h-[158px] gap-4 bg-black/50'>
          <BsPlayCircle
            className='text-[40px] hover:scale-125'
            data-tooltip-id='my-tooltip'
            data-tooltip-content='Play'
            data-tooltip-place='top'
          />
          <BsPlusCircle
            className='text-[40px] hover:scale-125'
            data-tooltip-id='my-tooltip'
            data-tooltip-content='Add to Favourites'
            data-tooltip-place='top'
          />
          <Tooltip id='my-tooltip' className='bg-[#E6E6E6]' />
        </div>
      ) : null}

      {backdrop_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w300/${backdrop_path}`}
          alt=''
          className='w-[full]  object-cover object-top rounded-t'
        />
      ) : (
        <div className='h-[158px] flex justify-center items-center'>
          <p>No image available</p>
        </div>
      )}

      <div className='px-4 pt-4 pb-8'>
        <h4 className='font-medium '>{title}</h4>
        <h6 className='font-medium text-green text-[14px]'>{release_date.slice(0, 4)}</h6>
        <p className='font-thin text-[15px] text-[#efefef] mt-4'>{overview.slice(0, 200)}...</p>
      </div>
    </div>
  );
};

export default SimilarMovieCard;

/* bg-[#1d1d1d]  */
