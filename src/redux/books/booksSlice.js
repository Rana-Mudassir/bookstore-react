import { createSlice } from '@reduxjs/toolkit';

export const bookSlice = createSlice({
  name: 'books',
  inialState: [],
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    deleteBook: (state, action) => {
      state.books.filter((book) => book.id !== action.payload.id);
    },
  },
});

export const { addBook, deleteBook } = bookSlice.actions;

export default bookSlice.reducer;
