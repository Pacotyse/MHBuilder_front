import { createAction, createReducer } from '@reduxjs/toolkit';
import { IWeapon } from '../../@types/weapon';
import {
  IArms, IChest, IHead, ILegs, IWaist,
} from '../../@types/armor';
import { createAppAsyncThunk } from '../../utils/redux';
import { axiosInstance } from '../../utils/axios';

export interface BuilderState {
  weaponList: IWeapon[]
  weaponType: string
  weapon: IWeapon | null
  head: IHead | null
  chest: IChest | null
  arms: IArms | null
  waist: IWaist | null
  legs: ILegs | null
}

export const setWeaponType = createAction<string>('builder/SET_WEAPON_TYPE');

export const getWeaponsByType = createAppAsyncThunk(
  'builder/GET_WEAPONS_BY_TYPE',
  async (weaponType: string) => {
    // Here, set to kebab-case format to fit api
    const kebabCaseWeaponType = weaponType.split('_').join('-');
    console.log(kebabCaseWeaponType);
    const { data: weapons } = await axiosInstance.get(`/weapons/type/${kebabCaseWeaponType}`);
    return weapons as IWeapon[];
  },
);

export const initialState: BuilderState = {
  weaponList: [],
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
    .addCase(getWeaponsByType.fulfilled, (state, action) => {
      state.weaponList = action.payload;
    })
    .addCase(getWeaponsByType.rejected, () => {
      // to set error message later
      console.log('Erreur dans le fetch de weapons');
    })
    .addCase(getWeaponsByType.pending, () => {
      // to set a loading later
      console.log('pending ...');
    });
});

export default builderReducer;
