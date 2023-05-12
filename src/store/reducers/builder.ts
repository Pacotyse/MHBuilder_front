import { createAction, createReducer } from '@reduxjs/toolkit';
import { IWeapon } from '../../@types/weapon';
import {
  IArms, IChest, IHead, ILegs, IWaist,
} from '../../@types/armor';
import { createAppAsyncThunk } from '../../utils/redux';
import { axiosInstance } from '../../utils/axios';

export interface BuilderState {
  weaponList: IWeapon[] | null
  weaponType: string
  weapon: IWeapon | null
  head: IHead | null
  chest: IChest | null
  arms: IArms | null
  waist: IWaist | null
  legs: ILegs | null
}

export const setWeaponType = createAction<string>('builder/SET_WEAPON_TYPE');

export const fetchWeaponsByType = createAppAsyncThunk(
  'builder/FETCH_WEAPONS_BY_TYPE',
  async (weaponType: string) => {
    // Here, set to kebab-case format to fit api
    const kebabCaseWeaponType = weaponType.split('_').join('-');
    const { data: weapons } = await axiosInstance.get(`/weapons/type/${kebabCaseWeaponType}`);
    return weapons as IWeapon[];
  },
);
export const fetchArmorsByType = createAppAsyncThunk(
  'builder/FETCH_ARMORS_BY_TYPE',
  async (itemType: string) => {
    const { data: armors } = await axiosInstance.get(`/armors/type/${itemType}`);
    return armors;
  },
);

export const initialState: BuilderState = {
  weaponList: null,
  weaponType: '',
  weapon: null,
  head: null,
  chest: null,
  arms: null,
  waist: null,
  legs: null,
};

const builderReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setWeaponType, (state, action) => {
      state.weaponType = action.payload;
    })
    .addCase(fetchWeaponsByType.fulfilled, (state, action) => {
      state.weaponList = action.payload;
    })
    .addCase(fetchWeaponsByType.rejected, () => {
      // to set error message later
      console.log('Erreur dans le fetch de weapons');
    })
    .addCase(fetchWeaponsByType.pending, () => {
      // to set a loading later
      console.log('pending ...');
    })
    .addCase(fetchArmorsByType.fulfilled, (state, action) => {
      console.log(action.payload);
    });
});

export default builderReducer;
