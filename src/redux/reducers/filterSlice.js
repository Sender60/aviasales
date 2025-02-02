import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  checkbox: {
    checkbox1: true,
    checkbox2: true,
    checkbox3: true,
    checkbox4: true,
    checkbox5: true,
  },
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCheckbox(state, action) {
      if (action.payload.id === 'checkbox1' && action.payload.checked) {
        return { ...state, checkbox: { checkbox1: true, checkbox2: true, checkbox3: true, checkbox4: true, checkbox5: true } };
      }
      if (action.payload.id === 'checkbox1' && !action.payload.checked) {
        return { ...state, checkbox: { checkbox1: false, checkbox2: false, checkbox3: false, checkbox4: false, checkbox5: false } };
      }
      const updateState = { ...state, checkbox: { ...state.checkbox, [action.payload.id]: action.payload.checked } };
      const allChecked =
        updateState.checkbox.checkbox2 &&
        updateState.checkbox.checkbox3 &&
        updateState.checkbox.checkbox4 &&
        updateState.checkbox.checkbox5;
      if (action.payload.id !== 'checkbox1' && allChecked) {
        return { ...state, checkbox: { ...state.checkbox, checkbox1: true, [action.payload.id]: action.payload.checked } };
      }
      return { ...state, checkbox: { ...state.checkbox, checkbox1: false, [action.payload.id]: action.payload.checked } };
    },
  },
});

export const { setCheckbox } = filterSlice.actions;
export default filterSlice.reducer;
