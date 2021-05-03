import {createSlice} from '@reduxjs/toolkit';

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    value: '',
    parent: 0,
    count: 0,
    search: '',
    name: 'Tüm Kategoriler',
    id: 15,
  },
  reducers: {
    handleSearch: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = action.payload;
    },
    handleCount: (state, action) => {
      state.count = action.payload;
    },
    handleName: (state, action) => {
      state.name = action.payload;
    },
  },
});
// Action creators are generated for each case reducer function
export const {handleSearch, handleName, handleCount} = searchSlice.actions;

export default searchSlice.reducer;
