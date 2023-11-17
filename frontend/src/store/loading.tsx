import { createSlice } from '@reduxjs/toolkit';

export const loadingSlice = createSlice({
  name: 'loading',
  initialState: {
    show: true,
  },
  reducers: {
    showLoading: (state) => {
      state.show = true;
    },
    hideLoading: (state) => {
      state.show = false;
    },
  },
});

export const { showLoading, hideLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
