import heroimg from '../../assets/Mandalorian.png';
import { BsPlayCircleFill } from 'react-icons/bs';
import { FiBookmark } from 'react-icons/fi';

const HeroSlider = () => {
  return (
    <div
      style={{ backgroundImage: `url(${heroimg})` }}
      className='h-[95vh] bg-cover bg-no-repeat bg-center  px-[75px] flex items-end pb-16 relative'
    >
      <div className='absolute top-0 left-0 z-10 w-full h-full bg-gradient-to-t from-black via-transparent to-black'></div>
      <div className='w-[700px] flex flex-col items-start z-20'>
        <h4 className='font-medium text-[12px] leading-5 bg-black px-4 py-1 rounded-full text-white'>
          Movie
        </h4>
        <h2 className='text-[32px] text-white font-bold leading-10 mt-6'>The Mandalorian</h2>
        <p className='text-[#9CA4AB] font-normal text-[14px] leading-[22px] flex gap-1 items-center mt-2'>
          <span>2h 40m</span>. <span>2022</span>.<span>Fantasy</span>.<span>Action</span>
        </p>
        <p className='font-normal text-white text-[14px] leading-5 tracking-wider mt-2 w-[520px]'>
          The third season of the American television series The Mandalorian stars Pedro Pascal as
          the title character, a bounty hunter traveling to Mandalore to redeem his past
          transgressions with his adopted son Grogu and being aided on their journey by fellow
          Mandalorian Bo-Katan Kryze.
        </p>
        <div className='flex items-center gap-6 mt-6 '>
          <button className='flex items-center gap-3 btn-solid'>
            <BsPlayCircleFill style={{ fontSize: 19 }} />
            Play Now
          </button>
          <button className='flex items-center gap-3 text-white bg-black/50 btn-solid'>
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
