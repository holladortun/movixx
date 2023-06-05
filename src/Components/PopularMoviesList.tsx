/* eslint-disable import/no-extraneous-dependencies */
import Carousel from 'react-multi-carousel';
import PopularMovieCard from './PopularMovieCard';
import usePopular from '../swr/usePopular';
import { Movie } from '../models/movies';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const PopularMoviesList = () => {
  const { data: popularMovies, isLoading } = usePopular();

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div className='pl-[75px] py-10 '>
      <h2 className='text-white font-bold text-[24px] mb-6'>Popular this Week</h2>
      <Carousel responsive={responsive}>
        {popularMovies.slice(0, 10).map((item: Movie, index: number) => {
          return <PopularMovieCard key={item.id} item={item} index={index + 1} />;
        })}
      </Carousel>
    </div>
  );
};

export default PopularMoviesList;
