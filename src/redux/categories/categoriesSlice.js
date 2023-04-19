import { createSlice } from '@reduxjs/toolkit';

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    status: 'Under Construction',
  },
  reducers: {
    ctgrStatus: (state) => {
      let CurrentStatus = state;
      CurrentStatus = 'Under construction';
      return CurrentStatus;
    },
  },
});

export const { ctgrStatus } = categoriesSlice.actions;

export default categoriesSlice.reducer;
