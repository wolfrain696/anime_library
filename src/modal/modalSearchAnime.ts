import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {useAppSelector} from '../hooks/ReduxHooks';

// export const getAnimeData = async (searchValue : string) => {
//   const response = await axios({
//     method: 'get',
//     baseURL: `https://kitsu.io/api/edge/anime/anime?filter[text]=${searchValue}`,
//     timeout: 1000,
//   });
//
//   return response.data;
// };


export const getAnimeData = createAsyncThunk(
    'anime/searchData',
    async (searchValue: string, thunkAPI) =>{
      try {
        const response = await axios({
          method: 'get',
          baseURL: `https://kitsu.io/api/edge/anime?filter[text]=${searchValue}`,
        });
        return response.data.data;
      } catch (e) {
        return thunkAPI.rejectWithValue('Anime not found');
      }
    },
);
