/* eslint-disable import/no-extraneous-dependencies */
// atom that controls visibility of popup
import { atom } from 'recoil';

export const trailerPopUpState = atom<boolean>({
  key: 'trailerPopUpState',
  default: false,
});
