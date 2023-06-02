/* eslint-disable @typescript-eslint/naming-convention */
import filmIcon from '../assets/filmIcon.svg';
import ratingstar from '../assets/star.svg';
import { Movie } from '../models/movies';

interface PopularMovieProps {
  item: Movie;
  index: number;
}

const PopularMovieCard = ({ item, index }: PopularMovieProps) => {
  const { title, poster_path, vote_average, release_date } = item;

  return (
    <div className='w-[350px] flex  items-center gap-6'>
      <div>
        <h4 className='text-white text-[48px] font-semibold leading-10'>{index}</h4>
      </div>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
          alt=''
          className=' w-[110px] h-[140px] object-cover rounded-[16px]'
        />
      </div>
      <div className='flex flex-col items-start gap-3'>
        <p className='text-[#D1D8DD] font-medium text-[14px] leading-5 border-2 border-[#28262D] rounded-[8px] py-1 px-2'>{release_date.slice(0,4)}</p>
        <h3 className='text-[#f9f9f9] font-bold text-[17px]'>{title}</h3>
        <div className='flex items-center gap-2 divide-x-2 divide-grey'>
          <img src={filmIcon} alt='' className='w-4' />
          <p className=' font-medium text-[13px] text-grey tracking-wider pl-2'></p>
        </div>
        <div className='flex items-center gap-2 divide-x-2 divide-grey'>
          <p className='flex items-center gap-1'>
            <img src={ratingstar} alt='' />
            <span className='text-white'> {vote_average}</span>
          </p>
          <p className=' font-medium text-[13px] text-grey tracking-wider pl-2'></p>
        </div>
      </div>
    </div>
  );
};

export default PopularMovieCard;
