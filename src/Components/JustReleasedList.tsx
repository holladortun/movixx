/* eslint-disable import/no-extraneous-dependencies */
import JustReleasedCard from './JustReleasedCard';
import Carousel from 'react-multi-carousel';
import useNowPlaying from '../swr/useNowPlaying';
import { Movie } from '../models/movies';
import MovieMoreInfo from './MovieMoreInfo';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 2000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 2000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const JustReleasedList = () => {
  const { data: movies, isLoading } = useNowPlaying();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className='pl-[75px] py-10'>
      <h2 className='text-white font-bold text-[24px] mb-6'>Just Released</h2>

      {
        <Carousel responsive={responsive} centerMode slidesToSlide={5}>
          {movies.map((item: Movie) => {
            return <JustReleasedCard key={item.id} item={item} />;
          })}
        </Carousel>
      }
    </div>
  );
};

export default JustReleasedList;
