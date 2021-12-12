import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {searchAnimeArgs} from './types';

export const searchAnimeData = createAsyncThunk(
    'anime/searchData',
    async ([searchValue, searchField] : searchAnimeArgs, thunkAPI) =>{
      try {
        const response = await axios({
          method: 'get',
          baseURL: `https://kitsu.io/api/edge/anime?filter[${searchField}]=${searchValue}&page[limit]=9&page[offset]=0`,
          timeout: 5000,
        });
        return response.data.data;
      } catch (e) {
        return thunkAPI.rejectWithValue('Anime not found');
      }
    },
);

export const getAnimeData = createAsyncThunk(
    'anime/searchData',
    async (_, thunkAPI) =>{
      try {
        const response = await axios({
          method: 'get',
          baseURL: `https://kitsu.io/api/edge/anime?page[limit]=9&page[offset]=0`,
        });
        return response.data.data;
      } catch (e) {
        return thunkAPI.rejectWithValue('Anime not found');
      }
    },
);

export const getCategories = createAsyncThunk(
    'anime/categories',
    async (_, thunkAPI) => {
      try {
        const response = await axios({
          method: 'get',
          baseURL: 'https://kitsu.io/api/edge/categories?page[limit]=20',
        });
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue('Categories not found');
      }
    },
);
