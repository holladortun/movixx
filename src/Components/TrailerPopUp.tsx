/* eslint-disable react/display-name */
import React from 'react';
import ReactPlayer from 'react-player';
import { CgClose } from 'react-icons/cg';
import { useRecoilState, useRecoilValue } from 'recoil';
import { trailerPopUpState } from '../atoms/trailerPopUpAtom';
import { movieState } from '../atoms/movieAtom';
import useTrailers from '../swr/useTrailers';
import PopUpOverlay from './PopUpOverlay';
import useMovieDetails from '../swr/useMovieDetails';
import useMovieCredits from '../swr/useMovieCredits';
import useSimilarMovies from '../swr/useSimilarMovies';
import { BsPlayCircleFill } from 'react-icons/bs';
import SimilarMovieCard from './SimilarMovieCard';

const TrailerPopUp = React.memo(() => {
  const [isOpen, setIsOpen] = useRecoilState(trailerPopUpState);

  const movieId = useRecoilValue(movieState);
  const { data: trailer } = useTrailers(movieId);
  const { data: movieDetails } = useMovieDetails(movieId);
  const { data: movieCredits } = useMovieCredits(movieId);
  const { data: similarMovies } = useSimilarMovies(movieId);

  const videoTrailer = trailer?.find((item: any) => item.type === 'Trailer');
  let cast;
  if (movieCredits) {
    ({ cast } = movieCredits);
  }

  return (
    <>
      {isOpen === true ? (
        <>
          <PopUpOverlay />
          <div
            className=' top-[5%] z-[10000] left-[50%] w-[950px] ml-[-425px] fixed  bg-black popup h-[1000px] overflow-scroll'
            id='popup'
          >
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${videoTrailer?.key}`}
              playing
              loop
              width={950}
              height={600}
              style={{ borderRadius: 12 }}
            />

            <div className='absolute top-0 right-0 w-full  bg-black h-[105px] flex justify-end items-center pr-5'>
              <CgClose
                style={{ fontSize: 30 }}
                className='text-white cursor-pointer'
                onClick={() => {
                  setIsOpen(false);
                  document.body.classList.remove('no-scroll');
                }}
              />
            </div>
            <div className='bg-black mt-[-65px] absolute w-full'>
              <div className='relative z-20 flex flex-col items-start w-[full] h-[150px] px-10 '>
                <div className='mt-[-40%] w-[600px]'>
                  <h3 className='font-bold text-white text-[35px] leading-[44px] tracking-wide my-8 '>
                    {movieDetails?.title}
                  </h3>
                  <div className='flex items-center gap-1'></div>
                  <div className='flex items-center gap-4 mt-6 '>
                    <button className='flex items-center gap-3 btn-solid'>
                      <BsPlayCircleFill style={{ fontSize: 19 }} />
                      Play Now
                    </button>
                    <button className='flex items-center gap-3 text-white bg-black/50 btn-solid'>
                      <BsPlayCircleFill style={{ fontSize: 19 }} />
                      Watch Trailer
                    </button>
                    {/* <button className='flex items-center gap-3 bg-transparent border btn-solid '>
                    <FiBookmark style={{ fontSize: 19 }} />
                    Add to WatchList
                  </button> */}
                  </div>
                </div>
                <div className='mt-[180px] flex gap-12 w-[100%] '>
                  <div className='w-[65%] '>
                    <p className='font-light leading-6 tracking-wide text-white'>
                      {movieDetails?.overview}
                    </p>
                  </div>
                  <div className='text-white w-[35%] '>
                    <div>
                      <span className='text-[#777777] font-normal text-[14px] '>Cast:</span>
                      {cast?.slice(0, 6).map((item: any, index: number) => {
                        return (
                          <>
                            <span
                              key={item.id}
                              className='font-normal text-[14px] cursor-pointer hover:underline'
                            >
                              {' '}
                              {item.name}
                              {index !== 5 ? ', ' : null}
                              {/* Add comma and space if not the last item */}
                            </span>
                          </>
                        );
                      })}
                    </div>
                    <div className='mt-4'>
                      <span className='text-[#777777] font-normal text-[14px] '>Genres:</span>
                      {movieDetails?.genres.slice(0, 4).map((item: any, index: number) => {
                        return (
                          <>
                            <span
                              key={item.id}
                              className='font-normal text-[14px] cursor-pointer hover:underline'
                            >
                              {' '}
                              {item.name}
                              {index !== item.length - 1 ? ', ' : null}
                              {/* Add comma and space if not the last item */}
                            </span>
                          </>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className='mt-16 '>
                  <h3 className='text-2xl font-bold text-white'>Similar to This</h3>
                  <div className='grid grid-cols-3 gap-4 mt-8 text-white'>
                    {similarMovies?.length < 1 ? (
                      <p className='text-white'>No Similar Movies Found</p>
                    ) : (
                      similarMovies?.slice(0, 9).map((item: any) => {
                        return <SimilarMovieCard key={item.id} item={item} />;
                      })
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
});

export default TrailerPopUp;
