import {createSlice, PayloadAction} from '@reduxjs/toolkit';


export type PageType = {
  id: string,
  attributes: {
    description: string,
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
    episodeCount: number
  }
}


type InitialState = {
  currentPage : PageType | undefined
}


const initialState: InitialState = {
  currentPage: undefined,
};

export const PageReducer = createSlice({
  name: 'animePage',
  initialState,
  reducers: {
    getCurrentPage: (state, action: PayloadAction<InitialState['currentPage']>) => {
      state.currentPage = action.payload;
    },
  },
});


export const {getCurrentPage} = PageReducer.actions;
export default PageReducer.reducer;
