/* eslint-disable import/no-extraneous-dependencies */
import { BsPlayCircleFill } from 'react-icons/bs';
import ratingstar from '../../assets/star.svg';
import Carousel from 'react-multi-carousel';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { genreState } from '../../atoms/genreAtom';
import { movieState } from '../../atoms/movieAtom';
import { trailerPopUpState } from '../../atoms/trailerPopUpAtom';
import useGenre from '../../swr/useGenres';
import ExploreByGenreSkeleton from './ExploreByGenreSkeleton';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const ExploreByGenreSlider = () => {
  const genreId = useRecoilValue(genreState);
  const setMovieId = useSetRecoilState(movieState);
  const setIsOpen = useSetRecoilState(trailerPopUpState);

  const { data, isLoading } = useGenre(genreId);

  if (isLoading) {
    return <ExploreByGenreSkeleton />;
  }

  return (
    <div>
     
      <Carousel responsive={responsive}>
        {data.map((item: any) => {
          return (
            <div
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${item.backdrop_path})`,
              }}
              className='h-[600px] px-[75px] relative flex flex-col justify-center bg-cover overflow-hidden'
              key={item.id}
            >
              <div className=' absolute top-0 left-0 z-10 w-full h-full bg-gradient-to-t from-[#0D0C0F] via-transparent to-[#0D0C0F]'></div>
              <div className=' absolute top-0 left-0 z-10 w-full h-full bg-gradient-to-r from-[#0D0C0F] '></div>
              <h5 className='px-4 py-2 text-[#F9F9F9] bg-black/25 rounded-2xl leading-5 tracking-wide z-50 self-start'>
                Explore by Genre
              </h5>
              <div className='relative z-20 flex flex-col items-start w-[600px] h-[350px] '>
                <h3 className='font-bold text-white text-[48px] leading-[54px] tracking-wide my-8 '>
                  {item.title}
                </h3>
                <div className='flex items-center gap-1'>
                  <img src={ratingstar} alt='' />
                  <p className='font-semibold text-white text-[12px]'>{item.vote_average}</p>
                </div>
                <div className='flex items-center gap-4 mt-6 '>
                  <button className='flex items-center gap-3 btn-solid'>
                    <BsPlayCircleFill style={{ fontSize: 19 }} />
                    Play Now
                  </button>
                  <button
                    className='flex items-center gap-3 text-white bg-black/50 btn-solid'
                    onClick={() => {
                      setMovieId(item.id);
                      setIsOpen(true);
                      document.body.classList.add('no-scroll');
                    }}
                  >
                    <BsPlayCircleFill style={{ fontSize: 19 }} />
                    Watch Trailer
                  </button>
                  {/* <button className='flex items-center gap-3 bg-transparent border btn-solid '>
                    <FiBookmark style={{ fontSize: 19 }} />
                    Add to WatchList
                  </button> */}
                </div>
                ;
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default ExploreByGenreSlider;
