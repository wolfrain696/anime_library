import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getAnimeData, getCategories, searchAnimeData} from '../../modal/modalSearchAnime';

export type animeDataType = [{
  id: string,
  attributes: {
    titles: {
      en: string
    }
    canonicalTitle: string,
    startDate: string,
    popularityRank: number,
    posterImage: {
      small: string,
      medium: string,
      original: string
    },
    description: string
    youtubeVideoId: string
    episodeCount: number
  }
}] | []


type SearchReducerTypes = {
  value : string
  animeData: animeDataType
  loading : boolean
  error: string
  categories: {
    data : [{
      id: string,
      attributes: {
        title: string
      }
    }]
  } | undefined
}

const initialState : SearchReducerTypes = {
  value: '',
  animeData: [],
  loading: false,
  error: '',
  categories: undefined,

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
    [searchAnimeData.fulfilled.type]: ( state, action : PayloadAction<animeDataType>) => {
      state.loading = false;
      state.error = '';
      state.animeData = action.payload;
    },
    [searchAnimeData.pending.type]: ( state, action : PayloadAction<animeDataType>) => {
      state.loading = true;
    },
    [searchAnimeData.rejected.type]: ( state, action : PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
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
    [getCategories.fulfilled.type]: (state, action: PayloadAction<SearchReducerTypes['categories']>) => {
      state.categories = action.payload;
      state.error = '';
    },
    [getCategories.pending.type]: (state, action: PayloadAction<[]>) => {
    },
    [getCategories.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },

});

export const {changeValueSearch} = SearchReducer.actions;
export default SearchReducer.reducer;
