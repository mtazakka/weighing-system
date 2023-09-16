import { create } from 'zustand';

import createUserInfoSlice from './userInfoSlice';

export const useBoundStore = create((...a) => ({
  ...createUserInfoSlice(...a)
}));
