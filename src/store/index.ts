import { configureStore } from '@reduxjs/toolkit';
import builderReducer from './reducers/builder';

const store = configureStore({
  reducer: {
    builder: builderReducer,
  },
});

export default store;

// Je déduis le type `RootState` et `AppDispatch` depuis le store lui même
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
