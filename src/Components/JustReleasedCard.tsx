/* eslint-disable @typescript-eslint/naming-convention */
import { Movie } from '../models/movies';
import ratingstar from '../assets/star.svg';

interface JustReleasedProps {
  item: Movie;
}

const JustReleasedCard = ({ item }: JustReleasedProps) => {
  const { title, poster_path, vote_average } = item;

  return (
    <div className='relative cursor-pointer'>
      <div className='bg-gradient-to-t from-[#0D0C0F]  absolute w-full h-full'></div>
      <img
        src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
        alt=''
        className='w-[225px] rounded-lg'
      />
      <div className='absolute bottom-0 px-5 py-5'>
        <h3 className='text-white font-bold text-[16px]'>{title}</h3>
        <div>
          <div className='flex items-center gap-1'>
            <img src={ratingstar} alt='' />
            <p className='font-semibold text-white text-[12px]'>{vote_average}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JustReleasedCard;
