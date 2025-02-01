import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tickets: [],
  stop: false,
};

const ticketSlice = createSlice({
  name: 'ticket',
  initialState,
  reducers: {
    addTickets(state, action) {
      return { ...state, tickets: [...state.tickets, ...action.payload] };
    },
    setStop(state, action) {
      return { ...state, stop: action.payload };
    },
  },
});

export const { addTickets, setStop } = ticketSlice.actions;
export default ticketSlice.reducer;
