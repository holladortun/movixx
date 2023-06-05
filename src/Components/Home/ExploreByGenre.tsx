import GenreCarousel from './GenreCarousel';

import ExploreByGenreSlider from './ExploreByGenreSlider';

const ExploreByGenre = () => {
  return (
    <div className='min-h-[700px] relative flex flex-col justify-center bg-cover overflow-hidden'>
      <ExploreByGenreSlider />
      <div>
        <GenreCarousel />
      </div>
    </div>
  );
};

export default ExploreByGenre;
