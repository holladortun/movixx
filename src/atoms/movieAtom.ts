/* eslint-disable import/no-extraneous-dependencies */


// atom that holds id of a particular movie
import { atom } from 'recoil';

export const movieState = atom<number | null>({
  key: 'movieState',
  default: null,
});
