import heroimg from '../../assets/Mandalorian.png';
import { BsPlayCircleFill } from 'react-icons/bs';
import { FiBookmark } from 'react-icons/fi';

const HeroSlider = () => {
  return (
    <div
      style={{ backgroundImage: `url(${heroimg})` }}
      className='xl:h-[95vh] bg-cover bg-no-repeat bg-center  xl:px-[75px] flex items-end pb-16 relative px-5 h-[80vh]'
    >
      <div className=' absolute top-0 left-0 z-10 w-full h-full xl:bg-gradient-to-t from-[#0D0C0F] via-transparent to-[#0D0C0F] bg-black/60'></div>
      <div className='z-20 flex flex-col items-start w-full'>
        <h4 className='font-medium text-[12px] leading-5 bg-black px-4 py-1 rounded-full text-white'>
          Movie
        </h4>
        <h2 className='text-[42px] text-white font-bold leading-10 mt-6'>The Mandalorian</h2>
        <p className='text-[#ffffff] font-normal text-[16px] leading-[22px] flex gap-1 items-center mt-2'>
          <span>2h 40m</span>. <span>2022</span>.<span>Fantasy</span>.<span>Action</span>
        </p>
        <p className='font-normal text-white text-[17px] leading-6 tracking-wider mt-2 xl:w-[600px]'>
          The third season of the American television series The Mandalorian stars Pedro Pascal as
          the title character, a bounty hunter traveling to Mandalore to redeem his...
        </p>
        <div className='flex items-center gap-6 mt-6 '>
          <button className='flex items-center gap-3 btn-solid'>
            <BsPlayCircleFill style={{ fontSize: 19 }} />
            Play Now
          </button>
          <button className='items-center hidden gap-3 text-white xl:flex bg-black/50 btn-solid'>
            <BsPlayCircleFill style={{ fontSize: 19 }} />
            Watch Trailer
          </button>
          <button className='flex items-center gap-3 bg-transparent border btn-solid '>
            <FiBookmark style={{ fontSize: 19 }} />
            Add to WatchList
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
