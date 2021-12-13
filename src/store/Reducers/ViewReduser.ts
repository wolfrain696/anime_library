import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type InitialState = {
  openedSidebar: boolean
}

const initialState = {
  openedSidebar: false,
};


const ViewReducer = createSlice({
  name: 'view',
  initialState,
  reducers: {
    toggleSideBar: (state, action: PayloadAction<InitialState['openedSidebar']>) => {
      state.openedSidebar = action.payload;
    },
  },
});

export default ViewReducer.reducer;
export const {toggleSideBar} = ViewReducer.actions;
