import { createAction, createReducer } from '@reduxjs/toolkit';
import { createAppAsyncThunk } from '../../utils/redux';
import { axiosInstance } from '../../utils/axios';
import { ILoadout } from '../../@types/loadout';

export interface LoadoutState {
  loadouts: ILoadout[] | null
  isLoading: boolean
  errorMessage: string
  loadoutCredentials: {
    title: string
    description: string
  }
}
export const clearLoadouts = createAction('loadouts/CLEAR_LIST');
export const changeLoadoutCredentialsField = createAction<{
  value: string
  field: keyof LoadoutState['loadoutCredentials'];
}>('loadout/SET_LOADOUT_CREDENTIALS_FIELD');

export const fetchUserLoadouts = createAppAsyncThunk(
  'loadout/FETCH_USER_LOADOUTS',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const userId = state.user.id;
    const { data: loadouts } = await axiosInstance.get(`/loadouts/user/${userId}`);
    return loadouts as ILoadout[];
  },
);

export const fetchAllLoadouts = createAppAsyncThunk(
  'loadout/FETCH_ALL_LOADOUTS',
  async () => {
    const { data: loadouts } = await axiosInstance.get('/loadouts');
    return loadouts as ILoadout[];
  },
);

export const saveLoadout = createAppAsyncThunk(
  'loadout/SAVE_LOADOUT',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const userId = state.user.id;
    const {
      weapon, arms, chest, head, legs, waist,
    } = state.builder;
    const { title, description } = state.loadout.loadoutCredentials;
    const { data } = await axiosInstance.post('/loadouts', {
      name: title,
      description,
      user_id: userId,
      weapon_id: weapon?.id,
      head_id: head?.id,
      chest_id: chest?.id,
      arms_id: arms?.id,
      waist_id: waist?.id,
      legs_id: legs?.id,
    });
    return data;
  },
);

export const deleteLoadout = createAppAsyncThunk(
  'loadout/DELETE_LOADOUT',
  async (id: string) => {
    const { data } = await axiosInstance.delete(`/loadouts/${id}`, {
    });
    return data;
  },
);
export const initialState: LoadoutState = {
  loadouts: null,
  isLoading: false,
  errorMessage: '',
  loadoutCredentials: {
    title: '',
    description: '',
  },
};

const loadoutReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchUserLoadouts.pending, (state) => {
      state.isLoading = true;
      state.errorMessage = '';
    })
    .addCase(fetchUserLoadouts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.loadouts = action.payload;
    })
    .addCase(fetchUserLoadouts.rejected, (state) => {
      state.errorMessage = 'Server error, Failed to get data';
    })
    .addCase(clearLoadouts, (state) => {
      state.loadouts = null;
    })
    .addCase(changeLoadoutCredentialsField, (state, action) => {
      const { field, value } = action.payload;
      state.loadoutCredentials[field] = value;
    })
    .addCase(fetchAllLoadouts.pending, (state) => {
      state.loadouts = null;
      state.isLoading = true;
      state.errorMessage = '';
    })
    .addCase(fetchAllLoadouts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.loadouts = action.payload;
    })
    .addCase(fetchAllLoadouts.rejected, (state) => {
      state.isLoading = false;
      state.errorMessage = 'Server error, Failed to get data';
    })
    .addCase(deleteLoadout.rejected, (state) => {
      state.errorMessage = 'Failed to delete loadout';
    });
});

export default loadoutReducer;
