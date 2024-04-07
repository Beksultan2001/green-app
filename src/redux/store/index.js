import { configureStore } from '@reduxjs/toolkit';
import tokenReducer from '../slices/tokenSlice';
import {thunk} from 'redux-thunk';

// const middleware = [...getDefaultMiddleware(), thunk];

export default configureStore({
  reducer: {
    token: tokenReducer,
  },
  middleware: (getDefaultMiddleware) => 
  getDefaultMiddleware({
    serializableCheck: false,
    immutableCheck: false
  })
});