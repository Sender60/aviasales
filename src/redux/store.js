import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { ticketApi } from './api';
import sortReducer from './reducers/sortSlice';
import filterReducer from './reducers/filterSlice';
import ticketReducer from './reducers/ticketSlice';

const store = configureStore({
  reducer: {
    sort: sortReducer,
    filter: filterReducer,
    ticket: ticketReducer,
    [ticketApi.reducerPath]: ticketApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ticketApi.middleware),
});

setupListeners(store.dispatch);

export default store;
