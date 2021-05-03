import {createSlice} from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    data: [],
  },

  reducers: {
    addToFav(state, action) {
      state.data.push(action.payload);
    },
  },
});

export const {addToFav} = favoritesSlice.actions;
export default favoritesSlice.reducer;
