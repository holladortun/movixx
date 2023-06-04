/* eslint-disable import/no-extraneous-dependencies */
import useSWR from 'swr';
import axios from 'axios';
const key = import.meta.env.VITE_APP_KEY;

const fetcher = async (url: string) => {
  const res = await axios.get(url, {
    params: { language: 'en-US', page: '1' },
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${key}`,
    },
  });
  return res.data?.results;
};

const useSimilarMovies = (movieId: number | null) => {
  const { data, error, isLoading } = useSWR(
    `  https://api.themoviedb.org/3/movie/${movieId}/similar`,
    fetcher,
  );

  return { data, error, isLoading };
};

export default useSimilarMovies;
