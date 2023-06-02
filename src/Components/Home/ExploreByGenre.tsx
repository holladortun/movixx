/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/naming-convention */
import ratingstar from '../../assets/star.svg';
import { BsPlayCircleFill } from 'react-icons/bs';
import { FiBookmark } from 'react-icons/fi';
import GenreCarousel from './GenreCarousel';
import useGenre from '../../swr/useGenres';
import { useRecoilValue } from 'recoil';
import { genreState } from '../../atoms/genreAtom';

const ExploreByGenre = () => {
  const genreId = useRecoilValue(genreState);

  const { data, isLoading } = useGenre(genreId);

  if (isLoading) {
    return <p>Loading</p>;
  }

  const randomIndex = Math.floor(Math.random() * 13);

  const defaultMovie = data[randomIndex];

  const { backdrop_path, title, vote_average, overview } = defaultMovie;

  return (
    <div
      style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})` }}
      className='h-[700px] px-[75px] relative flex flex-col justify-center bg-cover cursor-pointer'
    >
      <div className=' absolute top-0 left-0 z-10 w-full h-full bg-gradient-to-t from-[#0D0C0F] via-transparent to-[#0D0C0F]'></div>
      <div className=' absolute top-0 left-0 z-10 w-full h-full bg-gradient-to-r from-[#0D0C0F] '></div>
      <div className='relative z-20 flex flex-col items-start w-[537px]'>
        <h5 className='px-4 py-2 text-[#F9F9F9] bg-black/25 rounded-2xl leading-5 tracking-wide'>
          Explore by Genre
        </h5>
        <h3 className='font-bold text-white text-[48px] leading-[54px] tracking-wide my-8'>
          {title}
        </h3>
        <div className='flex items-center gap-1'>
          <img src={ratingstar} alt='' />
          <p className='font-semibold text-white text-[12px]'>{vote_average}</p>
        </div>
        <div className='flex items-center gap-6 mt-6 '>
          <button className='flex items-center gap-3 btn-solid'>
            <BsPlayCircleFill style={{ fontSize: 19 }} />
            Play Now
          </button>
          <button className='flex items-center gap-3 bg-transparent border btn-solid '>
            <FiBookmark style={{ fontSize: 19 }} />
            Add to WatchList
          </button>
        </div>
      </div>
      <div>
        <GenreCarousel />
      </div>
    </div>
  );
};

export default ExploreByGenre;
