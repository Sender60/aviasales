import { configureStore } from '@reduxjs/toolkit';
import sortReducer from './reducers/sortSlice';
import filterReducer from './reducers/filterSlice';

const store = configureStore({
  reducer: {
    sort: sortReducer,
    filter: filterReducer,
  },
});

export default store;
