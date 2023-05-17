import { createReducer } from '@reduxjs/toolkit';
import { createAppAsyncThunk } from '../../utils/redux';
import { axiosInstance } from '../../utils/axios';
import { ILoadout } from '../../@types/loadout';

export interface LoadoutState {
  loadouts: ILoadout[]
}

export const fetchLoadouts = createAppAsyncThunk(
  'loadout/FETCH_ALL_LOADOUTS',
  async () => {
    const { data: loadouts } = await axiosInstance.get('/loadouts');
    return loadouts as ILoadout[];
  },
);

export const initialState: LoadoutState = {
  loadouts: [],
};

const loadoutReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchLoadouts.fulfilled, (state, action) => {
      state.loadouts = action.payload;
    });
});

export default loadoutReducer;
