/* eslint-disable @typescript-eslint/naming-convention */
import { Movie } from '../models/movies';

interface PopularMovieProps {
  item: Movie;
  index: number;
}

const PopularMovieCard = ({ item, index }: PopularMovieProps) => {
  const { poster_path } = item;

  return (
    <div className='w-[450px] flex  items-center gap-3'>
      <div className='w-[15%]'>
        <h4 className='text-white text-[100px] font-semibold leading-10'>{index}</h4>
      </div>
      <div className='w-[70%]'>
        <img
          src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
          alt=''
          className=' w-[210px] object-cover rounded-[16px]'
        />
      </div>
    </div>
  );
};

export default PopularMovieCard;

//<div className='flex flex-col items-start gap-3 w-[60%]'>
{
  /* <p className='text-[#D1D8DD] font-medium text-[14px] leading-5 border-2 border-[#28262D] rounded-[8px] py-1 px-2'>
          {release_date.slice(0, 4)}
        </p> */
}
{
  /*  <h3 className='text-[#f9f9f9] font-bold text-[17px]'>{title}</h3> */
}
{
  /*  <div className='flex items-center gap-2 divide-x-2 divide-grey'>
          <img src={filmIcon} alt='' className='w-4' />
          <p className=' font-medium text-[13px] text-grey tracking-wider pl-2'></p>
        </div> */
}
//<div className='flex items-center gap-2 divide-x-2 divide-grey'>
{
  /*  <p className='flex items-center gap-1'>
            <img src={ratingstar} alt='' />
            <span className='text-white'> {vote_average}</span>
          </p> */
}
{
  /*  <p className=' font-medium text-[13px] text-grey tracking-wider pl-2'></p> */
}
// </div>
//</div>;
