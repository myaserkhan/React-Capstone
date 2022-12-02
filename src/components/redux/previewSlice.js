import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Initial State
const initialState = [];

// Base URL
const url = 'https://pokeapi.co/api/v2/pokemon/?limit=100';

// Async Thunk
export const fetchApi = createAsyncThunk('preview/fetchApi', async () => {
  const response = await axios.get(url);
  console.log(response.data);
  return response.data;
});

const previewSlice = createSlice({
  name: 'preview',
  initialState,
  extraReducers: {
    [fetchApi.fulfilled]: (state, action) => {
      const pokemons = action.payload.results.map((el, index) => ({
        id: index + 1,
        name: el.name,
        url: el.url,
      }));
      return pokemons;
    },
  },
});

export default previewSlice.reducer;
