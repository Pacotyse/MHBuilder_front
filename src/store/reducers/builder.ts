import { createAction, createReducer } from '@reduxjs/toolkit';
import { IWeapon } from '../../@types/weapon';
import {
  IArmor,
  IArms, IChest, IHead, ILegs, IWaist,
} from '../../@types/armor';
import { IStats } from '../../@types/stats';
import { createAppAsyncThunk } from '../../utils/redux';
import { axiosInstance } from '../../utils/axios';
import { ILoadout } from '../../@types/loadout';

export interface BuilderState {
  weaponList: IWeapon[] | null
  armorList: IArmor[] | null
  weaponType: string
  weapon: IWeapon | null
  head: IHead | null
  chest: IChest | null
  arms: IArms | null
  waist: IWaist | null
  legs: ILegs | null
  isLoading: boolean
  errorMessage: string
  buildStats: IStats | null
}

export const setWeaponType = createAction<string>('builder/SET_WEAPON_TYPE');
export const clearWeaponList = createAction('builder/CLEAR_WEAPON_LIST');
export const clearArmorList = createAction('builder/CLEAR_ARMOR_LIST');
export const setBuilderWeapon = createAction<IWeapon>('builder/SET_WEAPON');
export const setBuilderArmor = createAction<IArmor>('builder/SET_ARMOR');
export const resetBuilder = createAction('builder/RESET_BUILDER');

export const fetchWeaponsByType = createAppAsyncThunk(
  'builder/FETCH_WEAPONS_BY_TYPE',
  async (weaponType: string) => {
    const { data: weapons } = await axiosInstance.get(`/weapons/type/${weaponType}`);
    return weapons as IWeapon[];
  },
);

export const fetchArmorsByType = createAppAsyncThunk(
  'builder/FETCH_ARMORS_BY_TYPE',
  async (itemType: string) => {
    const { data: armors } = await axiosInstance.get(`/armors/type/${itemType}`);
    return armors as IArmor[];
  },
);

export const getBuilderStats = createAppAsyncThunk(
  'builder/GET_LOADOUT_STATS',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const {
      weapon, head, chest, arms, waist, legs,
    } = state.builder;
    const { data: stats } = await axiosInstance.post('/loadouts/details', {
      weapon,
      head,
      chest,
      arms,
      waist,
      legs,
    });
    return stats as IStats;
  },
);

export const fetchLoadoutById = createAppAsyncThunk(
  'builder/FETCH_ONE_LOADOUT',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const loadoutId = state.loadout.loadoutCode;
    const { data: loadout } = await axiosInstance.get(`/loadouts/${loadoutId}`);
    return loadout as ILoadout;
  },
);

export const initialState: BuilderState = {
  weaponList: null,
  armorList: null,
  weaponType: '',
  weapon: null,
  head: null,
  chest: null,
  arms: null,
  waist: null,
  legs: null,
  isLoading: false,
  errorMessage: '',
  buildStats: null,
};

const builderReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setWeaponType, (state, action) => {
      // here we can do this because Redux Toolkit makes the state immutable
      state.weaponType = action.payload;
    })
    .addCase(clearWeaponList, (state) => {
      state.weaponList = null;
    })
    .addCase(clearArmorList, (state) => {
      state.armorList = null;
    })
    .addCase(fetchWeaponsByType.pending, (state) => {
      state.errorMessage = '';
      state.isLoading = true;
    })
    .addCase(fetchWeaponsByType.fulfilled, (state, action) => {
      state.isLoading = false;
      state.weaponList = action.payload;
    })
    .addCase(fetchWeaponsByType.rejected, (state) => {
      state.isLoading = false;
      state.errorMessage = 'Server error, Failed to get data';
    })
    .addCase(fetchArmorsByType.pending, (state) => {
      state.errorMessage = '';
      state.isLoading = true;
    })
    .addCase(fetchArmorsByType.fulfilled, (state, action) => {
      state.isLoading = false;
      state.armorList = action.payload;
    })
    .addCase(fetchArmorsByType.rejected, (state) => {
      state.isLoading = false;
      state.errorMessage = 'Server error, Failed to get data';
    })
    .addCase(setBuilderWeapon, (state, action) => {
      state.weapon = action.payload;
    })
    .addCase(setBuilderArmor, (state, action) => {
      //! TS Error to fix later
      state[action.payload.type] = action.payload;
    })
    .addCase(getBuilderStats.fulfilled, (state, action) => {
      state.buildStats = action.payload;
    })
    .addCase(resetBuilder, (state) => {
      state.weapon = null;
      state.arms = null;
      state.head = null;
      state.chest = null;
      state.waist = null;
      state.legs = null;
    })
    .addCase(fetchLoadoutById.fulfilled, (state, action) => {
      const {
        weapon, arms, chest, head, waist, legs,
      } = action.payload;
      state.weapon = weapon;
      state.arms = arms;
      state.head = head;
      state.chest = chest;
      state.waist = waist;
      state.legs = legs;
    });
});

export default builderReducer;
