import {configureStore} from '@reduxjs/toolkit';
import reduxReducer from '../redux/reducers';

export default configureStore({
  reducer: {
    search: reduxReducer,
  },
});
