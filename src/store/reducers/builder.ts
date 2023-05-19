import { createAction, createReducer } from '@reduxjs/toolkit';
import { IWeapon } from '../../@types/weapon';
import {
  IArmor,
  IArms, IChest, IHead, ILegs, IWaist,
} from '../../@types/armor';
import { IBuildStats } from '../../@types/stats';
import { createAppAsyncThunk } from '../../utils/redux';
import { axiosInstance } from '../../utils/axios';

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
  buildStats: IBuildStats | null
}

export const setWeaponType = createAction<string>('builder/SET_WEAPON_TYPE');
export const clearWeaponList = createAction('builder/CLEAR_WEAPON_LIST');
export const clearArmorList = createAction('builder/CLEAR_ARMOR_LIST');
export const setBuilderWeapon = createAction<IWeapon>('builder/SET_WEAPON');
export const setBuilderArmor = createAction<IArmor>('builder/SET_ARMOR');

export const fetchWeaponsByType = createAppAsyncThunk(
  'builder/FETCH_WEAPONS_BY_TYPE',
  async (weaponType: string) => {
    // Here, set to kebab-case format to fit api
    // const kebabCaseWeaponType = weaponType.split('_').join('-');
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
    return stats as IBuildStats;
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
    });
});

export default builderReducer;
