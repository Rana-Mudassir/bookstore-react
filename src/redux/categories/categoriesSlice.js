/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    status: 'Under Construction',
  },
  reducers: {
    checkStatus: (state) => {
      state.status = 'Under Construction';
    },
  },
});

export const { checkStatus } = createSlice.actions;

export default createSlice.reducers;
