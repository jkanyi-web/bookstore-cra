import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  books: [],
  status: 'idle',
  error: null,
  createdStatus: '',
  deleteStatus: '',
};

const apiUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/go82NqnvmumVjSXIGwD7/books/';

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    throw Error(error.message);
  }
});

export const postBooks = createAsyncThunk('books/postBooks', async (initialBooks) => {
  try {
    const response = await axios.post(apiUrl, initialBooks);
    return response.data;
  } catch (error) {
    throw Error(error.message);
  }
});

export const deleteBooks = createAsyncThunk('books/deleteBooks', async (bookId) => {
  try {
    const response = await axios.delete(`${apiUrl}${bookId}`);
    return response.data;
  } catch (error) {
    throw Error(error.message);
  }
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBooks.fulfilled, (state, { payload }) => {
        const keys = Object.keys(payload);
        const tempArray = keys.map((key) => ({
          id: key,
          ...payload[key][0],
        }));
        state.books = [...tempArray];
        state.status = 'succeeded';
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(postBooks.fulfilled, (state, { payload }) => {
        state.createdStatus = payload;
      })
      .addCase(deleteBooks.fulfilled, (state, { payload }) => {
        state.deleteStatus = payload;
      });
  },
});

export default booksSlice.reducer;
