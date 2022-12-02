import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Initial State
const initialState = [];

// Base URL
const url = 'https://pokeapi.co/api/v2/pokemon/?limit=151';

// Async Thunk
export const fetchApi = createAsyncThunk('preview/fetchApi', async () => {
  const response = await axios.get(url);
  return response.data;
});

export const fetchData = createAsyncThunk(
  'preview/fetchData',
  async (input) => {
    const response = await axios.get(input);
    return response.data;
  },
);

const previewSlice = createSlice({
  name: 'preview',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchApi.fulfilled, (state, action) => {
      const pokemons = action.payload.results.map((el, index) => ({
        id: index + 1,
        name: el.name,
        url: el.url,
        img: '',
      }));
      return pokemons;
    });
  },
});

export default previewSlice.reducer;
