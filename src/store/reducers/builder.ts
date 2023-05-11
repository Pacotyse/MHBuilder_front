import { createAction, createReducer } from '@reduxjs/toolkit';
import { IWeapon } from '../../@types/weapon';
import {
  IArms, IChest, IHead, ILegs, IWaist,
} from '../../@types/armor';
import { createAppAsyncThunk } from '../../utils/redux';

export interface BuilderState {
  weaponType: string
  weapon: IWeapon | null
  head: IHead | null
  chest: IChest | null
  arms: IArms | null
  waist: IWaist | null
  legs: ILegs | null
}

export const setWeaponType = createAction<string>('builder/SET_WEAPON_TYPE');

export const initialState: BuilderState = {
  weaponType: '',
  weapon: null,
  head: null,
  chest: null,
  arms: null,
  waist: null,
  legs: null,
};

const builderReducer = createReducer(initialState, (builder) => {
  builder.addCase(setWeaponType, (state, action) => {
    state.weaponType = action.payload;
  });
});

export default builderReducer;
