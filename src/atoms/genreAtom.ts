/* eslint-disable import/no-extraneous-dependencies */

import { atom } from 'recoil';

export const genreState = atom<string>({
  key: 'genreState',
  default: '16',
});
