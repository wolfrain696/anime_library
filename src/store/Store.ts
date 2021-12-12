import {configureStore} from '@reduxjs/toolkit';
import SearchReducer from './Reducers/SearchReducer';
import PageReducer from './Reducers/PageReducer';

const store = configureStore({
  reducer: {
    search: SearchReducer,
    animePage: PageReducer,
  },
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;
