import Header from '../Components/Header';
import ExploreByGenre from '../Components/Home/ExploreByGenre';
import HeroSlider from '../Components/Home/HeroSlider';
import JustReleasedList from '../Components/JustReleasedList';
import PopularMoviesList from '../Components/PopularMoviesList';

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSlider />
      <JustReleasedList />
      <JustReleasedList />
      <PopularMoviesList />
      <ExploreByGenre />
    </div>
  );
};

export default Home;
