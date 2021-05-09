import {configureStore} from '@reduxjs/toolkit';
import searchReducer from './searchReducer';
import favoriteReducer from './favReducer';

export default configureStore({
  reducer: {
    search: searchReducer,
    basket: favoriteReducer,
  },
});
