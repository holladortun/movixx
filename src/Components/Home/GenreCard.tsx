/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Genre } from '../../models/movies';
import { useSetRecoilState } from 'recoil';
import { genreState } from '../../atoms/genreAtom';
import { useState } from 'react';

interface GenreCardProps {
  item: Genre;
}

const GenreCard = ({ item }: GenreCardProps) => {
  const { id, name, imageUrl } = item;
  const [isClicked, setIsClicked] = useState(false);
  const setGenreState = useSetRecoilState(genreState);

  return (
    <div
      className='relative flex flex-col items-center mb-8 text-white cursor-pointe '
      onClick={() => {
        setGenreState(id);
        setIsClicked(!isClicked);
      }}
    >
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className={
          !isClicked
            ? 'h-[99px] w-[210px] bg-cover bg-no-repeat rounded-[12px] relative hover:border hover:border-green'
            : 'h-[99px] w-[210px] bg-cover bg-no-repeat rounded-[12px] relative border border-green'
        }
      >
        <div className='absolute top-0 left-0 w-full h-full bg-black/70 rounded-[12px]'></div>
      </div>
      <p className='absolute top-[40px]'>{name}</p>
    </div>
  );
};

export default GenreCard;
