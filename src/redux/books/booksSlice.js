import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

const initialState = {
  books: [],
  isLoading: false,
  error: false,
  success: false,
};

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/SERz0T6MOlfncfi0umcc/books';

export const fetchBooks = createAsyncThunk('book/fetchBooks', async () => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    return error;
  }
});

export const deleteBook = createAsyncThunk('books/removeBook', async (id) => {
  await axios.delete(`${url}/${id}`);
});

export const postBook = createAsyncThunk('books/addBook', async (book) => {
  try {
    const res = await axios.post(url, book);
    return res.data;
  } catch (error) {
    return error;
  }
});

export const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const book = {
        itemId: action.payload.item_id,
        title: action.payload.title,
        author: action.payload.author,
        category: action.payload.category,
      };
      state.books.push(book);
    },
    removeBook: (state, action) => ({
      ...state,
      books: state.books.filter((book) => book.itemId !== action.payload),
    }),
  },
  extraReducers: {
    [fetchBooks.pending]: (state) => {
      const updatedState = state;
      updatedState.books = [];
      return updatedState;
    },
    [fetchBooks.fulfilled]: (state, action) => {
      const updatedState = state;
      updatedState.books = action.payload;
      return updatedState;
    },
    [fetchBooks.rejected]: (state, action) => {
      const updatedState = state;
      updatedState.books = action.payload;
      return updatedState;
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;

export default bookSlice.reducer;
