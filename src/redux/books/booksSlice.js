import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
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
    const { data } = await axios.get(url);
    const books = Object.keys(data).map((key) => {
      const book = data[key][0];
      return {
        item_id: key,
        ...book,
      };
    });
    return books;
  } catch (error) {
    return error;
  }
});

export const removeBook = createAsyncThunk('books/removeBook', async (id) => {
  await axios.delete(`${url}/${id}`);
  fetchBooks();
  return id;
});

export const addBook = createAsyncThunk('books/addBook', async (book) => {
  try {
    await axios.post(url, book);
    fetchBooks();
    return book;
  } catch (error) {
    return error;
  }
});

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchBooks.fulfilled, (state, { payload }) => ({
      ...state,
      books: [...payload],
    }));
    builder.addCase(addBook.fulfilled, (state, { payload }) => {
      const newstate = { ...payload };
      return (
        { ...state, books: [...state.books, newstate] });
    });
    builder.addCase(removeBook.fulfilled, (state, { payload }) => ({
      ...state,
      books: state.books.filter((book) => book.item_id !== payload),
    }));
  },
});

export default booksSlice.reducer;
