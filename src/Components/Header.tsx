import { GoSearch } from 'react-icons/go';
import { HiOutlineBell } from 'react-icons/hi';
import { BsChevronDown } from 'react-icons/bs';
import profilepic from '../assets/dummyprofilepic.jpg';

const Header = () => {
  /* fsfsdfd */
  return (
    <div className='flex items-center justify-between px-[75px] h-[110px] mb-[-110px] z-80 relative w-full'>
      <div className='text-3xl font-extrabold text-white'>
        <h2> Movixx</h2>
      </div>
      <div className='flex gap-8 text-white'>
        <p className='font-extrabold'>Home</p>
        <p className='font-normal'>Home</p>
        <p className='font-normal'>Home</p>
        <p className='font-normal'>Home</p>
        <p className='font-normal'>Home</p>
        <p className='font-normal'>Home</p>
      </div>
      <div className='flex items-center text-white gap-[23px]'>
        <GoSearch style={{ fontSize: 24 }} />
        <HiOutlineBell style={{ fontSize: 24 }} />
        <div className='flex items-center gap-2'>
          <img src={profilepic} className='object-cover object-top w-8 h-8 rounded-full' alt=''/>
          <BsChevronDown />
        </div>
      </div>
    </div>
  );
};

export default Header;
