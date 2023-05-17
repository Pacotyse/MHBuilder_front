import { createAction, createReducer } from '@reduxjs/toolkit';
import { createAppAsyncThunk } from '../../utils/redux';
import { axiosInstance } from '../../utils/axios';
import { ILoadout } from '../../@types/loadout';

export interface LoadoutState {
  loadouts: ILoadout[] | null
  isLoading: boolean
  errorMessage: string
}
export const clearLoadouts = createAction('loadouts/CLEAR_LIST');

export const fetchLoadouts = createAppAsyncThunk(
  'loadout/FETCH_ALL_LOADOUTS',
  async () => {
    const { data: loadouts } = await axiosInstance.get('/loadouts');
    return loadouts as ILoadout[];
  },
);

export const initialState: LoadoutState = {
  loadouts: null,
  isLoading: false,
  errorMessage: '',
};

const loadoutReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchLoadouts.pending, (state) => {
      state.isLoading = true;
      state.errorMessage = '';
    })
    .addCase(fetchLoadouts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.loadouts = action.payload;
    })
    .addCase(fetchLoadouts.rejected, (state) => {
      state.errorMessage = 'Server error, Failed to get data';
    })
    .addCase(clearLoadouts, (state) => {
      state.loadouts = null;
    });
});

export default loadoutReducer;
