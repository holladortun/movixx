import { Genre } from '../../models/movies';
import GenreCard from './GenreCard';
import Carousel from 'react-multi-carousel';
import genres from '../../utils/genreData';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 2000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 2000, min: 1024 },
    items: 6,
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
const GenreCarousel = () => {
  return (
    <div className='relative z-30 mt-[60px]'>
      <Carousel responsive={responsive} slidesToSlide={6}>
        {genres.map((item: Genre) => {
          return <GenreCard key={item.id} item={item} />;
        })}
      </Carousel>
    </div>
  );
};

export default GenreCarousel;
