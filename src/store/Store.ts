import {configureStore} from '@reduxjs/toolkit';
import SearchReducer from '../view/AppBar/SearchReducer';

const store = configureStore({
  reducer: {
    search: SearchReducer,
  },
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;
