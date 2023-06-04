/* eslint-disable @typescript-eslint/naming-convention */
import { useState } from 'react';
import { Movie } from '../models/movies';
import ratingstar from '../assets/star.svg';
import MovieMoreInfo from './MovieMoreInfo';
import useTrailers from '../swr/useTrailers';
import useMovieDetails from '../swr/useMovieDetails';

interface JustReleasedProps {
  item: Movie;
}

const JustReleasedCard = ({ item }: JustReleasedProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { title, poster_path, vote_average, id } = item;
  const { data: movieDetails, isLoading } = useMovieDetails(id);

  if (isLoading) {
    return <p>Loading...</p>;
  }

 /*  const handleIsHovered = ()=> */

  return (
    <>
      <div
        className='relative w-[90%]  transition-all ease-in cursor-pointer  '
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* <div className='bg-gradient-to-t from-[#0D0C0F]  absolute w-full h-full'></div> */}

        <img
          src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
          alt=''
          className='w-full rounded-lg'
        />

        {isHovered == true ? <MovieMoreInfo movieDetails={movieDetails} /> : null}
      </div>
    </>
  );
};

export default JustReleasedCard;

//display title and rating
{
  /* <div className='absolute bottom-0 px-5 py-5'>
        <h3 className='text-white font-bold text-[16px]'>{title}</h3>
        <div>
          <div className='flex items-center gap-1'>
            <img src={ratingstar} alt='' />
            <p className='font-semibold text-white text-[12px]'>{vote_average}</p>
          </div>
        </div>
      </div> */
}
