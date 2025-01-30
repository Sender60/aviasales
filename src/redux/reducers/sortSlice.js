import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sort: 'cheap',
};

const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    setSort(state, action) {
      return { ...state, sort: action.payload };
    },
  },
});

export const { setSort } = sortSlice.actions;
export default sortSlice.reducer;
