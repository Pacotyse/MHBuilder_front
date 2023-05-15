import { configureStore } from '@reduxjs/toolkit';
import builderReducer from './reducers/builder';
import userReducer from './reducers/user';

const store = configureStore({
  reducer: {
    builder: builderReducer,
    user: userReducer,
  },
});

export default store;

// Deduce type of `RootState` and `AppDispatch` from store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
