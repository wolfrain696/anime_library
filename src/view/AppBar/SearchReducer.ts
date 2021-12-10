import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getAnimeData} from '../../modal/modalSearchAnime';
import {modalData} from '../../modal/rawData';

type animeDataType = [{
  id: string,
  attributes: {
    description: string,
    canonicalTitle: string,
    startDate: string,
    popularityRank: number,
    posterImage: {
      small: string,
      medium: string,
      original: string
    },
    episodeCount: number
  }
}] | any[]


type SearchReducerTypes = {
  value : string
  animeData: animeDataType
  loading : boolean
  error: string
}

const initialState : SearchReducerTypes = {
  value: '',
  animeData: modalData.data,
  loading: false,
  error: '',
};


export const SearchReducer = createSlice({
  name: 'search',
  initialState,
  reducers: {
    changeValueSearch: (state, action : PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
  extraReducers: {
    [getAnimeData.fulfilled.type]: ( state, action : PayloadAction<animeDataType>) => {
      state.loading = false;
      state.error = '';
      state.animeData = action.payload;
    },
    [getAnimeData.pending.type]: ( state, action : PayloadAction<animeDataType>) => {
      state.loading = true;
    },
    [getAnimeData.rejected.type]: ( state, action : PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },

  },

});

export const {changeValueSearch} = SearchReducer.actions;
export default SearchReducer.reducer;
