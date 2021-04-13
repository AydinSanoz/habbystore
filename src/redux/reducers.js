import {createSlice} from '@reduxjs/toolkit';

export const searchSlice = createSlice({
  name: 'redux',
  initialState: {
    value: '',
    isModalVisible: true,
    parent: 0,
    count: 0,
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
    handleModal: (state, action) => {
      state.parent = action.payload;
    },
  },
});
// Action creators are generated for each case reducer function
export const {handleSearch, handleModal} = searchSlice.actions;

export default searchSlice.reducer;
