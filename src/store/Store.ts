import {configureStore} from '@reduxjs/toolkit';
import SearchReducer from './Reducers/SearchReducer';
import PageReducer from './Reducers/PageReducer';
import ViewReducer from './Reducers/ViewReduser';

const store = configureStore({
  reducer: {
    search: SearchReducer,
    animePage: PageReducer,
    view: ViewReducer,
  },
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;
