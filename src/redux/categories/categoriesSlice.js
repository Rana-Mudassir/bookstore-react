import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [
    'Mystery',
    'Construction',
    'Romance',
    'Literary Fiction',
    'Thriller',
    'Economy',
    'Mind',
    'Love',
    'Poetry',
    'Comedy',
  ],
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    ctgrStatus: (state, Action) => Boolean(state.categories.includes(Action.payload)),
  },
});

export const { ctgrStatus } = categoriesSlice.actions;

export default categoriesSlice.reducer;
