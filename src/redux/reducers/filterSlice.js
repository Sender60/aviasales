import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  checkbox: {
    allTickets: true,
    noStop: true,
    oneStop: true,
    twoStop: true,
    threeStop: true,
  },
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCheckbox(state, action) {
      if (action.payload.id === 'allTickets' && action.payload.checked) {
        return { ...state, checkbox: { allTickets: true, noStop: true, oneStop: true, twoStop: true, threeStop: true } };
      }
      if (action.payload.id === 'allTickets' && !action.payload.checked) {
        return { ...state, checkbox: { allTickets: false, noStop: false, oneStop: false, twoStop: false, threeStop: false } };
      }
      const updateState = { ...state, checkbox: { ...state.checkbox, [action.payload.id]: action.payload.checked } };
      const allChecked =
        updateState.checkbox.noStop && updateState.checkbox.oneStop && updateState.checkbox.twoStop && updateState.checkbox.threeStop;
      if (action.payload.id !== 'allTickets' && allChecked) {
        return { ...state, checkbox: { ...state.checkbox, allTickets: true, [action.payload.id]: action.payload.checked } };
      }
      return { ...state, checkbox: { ...state.checkbox, allTickets: false, [action.payload.id]: action.payload.checked } };
    },
  },
});

export const { setCheckbox } = filterSlice.actions;
export default filterSlice.reducer;
