/* eslint-disable @typescript-eslint/naming-convention */
import { BsPlayCircle, BsPlusCircle, BsInfoCircle } from 'react-icons/bs';
import { Tooltip } from 'react-tooltip';
import RuntimeConverter from './RuntimeConverter';
import ReactPlayer from 'react-player';
import useTrailers from '../swr/useTrailers';
import { useSetRecoilState } from 'recoil';
import { movieState } from '../atoms/movieAtom';
import { trailerPopUpState } from '../atoms/trailerPopUpAtom';

const MovieMoreInfo = ({ movieDetails }: any) => {
      const { backdrop_path, runtime, id } = movieDetails;
      const setMovieId = useSetRecoilState(movieState);
      const setIsOpen = useSetRecoilState(trailerPopUpState);

  const { data: trailer } = useTrailers(id);
  const videoTrailer = trailer?.find((item: any) => item.type === 'Trailer');

  return (
    <div className='bg-black w-full  shadow-xl rounded-lg  scale-150 fixed top-0 z-[10000] origin-top-right'>
      {/* <img src={`https://image.tmdb.org/t/p/w300/${backdrop_path}`} alt='' /> */}
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${videoTrailer?.key}`}
        playing
        loop
        width={'100%'}
        height={200}
        style={{ borderRadius: 12, zIndex: 1000, marginTop: 10 }}
      />

      <div className='w-full p-5 bg-black mt-[-36px] absolute rounded-b-lg'>
        <div className='flex justify-between w-full bg-black '>
          <div className='flex w-2/3 gap-3 '>
            <BsPlayCircle
              className='text-[25px]  text-white'
              data-tooltip-id='my-tooltip'
              data-tooltip-content='Play'
              data-tooltip-place='top'
            />
            <BsPlusCircle
              className='text-[25px]  text-white'
              data-tooltip-id='my-tooltip'
              data-tooltip-content='Add to Favourites'
              data-tooltip-place='top'
            />
            <Tooltip id='my-tooltip' className='bg-[#E6E6E6]' />
          </div>
          <div className='flex justify-end w-1/3 text-right b'>
            <BsInfoCircle
              className='text-[25px]  text-white'
              data-tooltip-id='my-tooltip'
              data-tooltip-content='More Info'
              data-tooltip-place='top'
              onClick={() => {
                setMovieId(id);
                setIsOpen(true);
                document.body.classList.add('no-scroll');
              }}
            />
          </div>
        </div>

        <div className='mt-4'>
          <RuntimeConverter minutes={runtime} />
        </div>
      </div>
    </div>
  );
};

export default MovieMoreInfo;
