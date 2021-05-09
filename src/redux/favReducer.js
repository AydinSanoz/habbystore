import {createSlice} from '@reduxjs/toolkit';

const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    data: [],
  },

  reducers: {
    addToFav(state, action) {
      state.data.push(action.payload);
    },
  },
});

export const {addToFav} = basketSlice.actions;
export default basketSlice.reducer;
