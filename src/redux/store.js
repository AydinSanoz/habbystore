import {configureStore} from '@reduxjs/toolkit';
import searchReducer from '../redux/search';

export default configureStore({
  reducer: {
    search: searchReducer,
  },
});
