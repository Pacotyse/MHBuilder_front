import { createReducer } from '@reduxjs/toolkit';
import { IWeapon } from '../../@types/weapon';
import {
  IArms, IChest, IHead, ILegs, IWaist,
} from '../../@types/armor';

export interface BuilderState {
  weapon: IWeapon | null
  head: IHead | null
  chest: IChest | null
  arms: IArms | null
  waist: IWaist | null
  legs: ILegs | null
}

export const initialState: BuilderState = {
  weapon: null,
  head: null,
  chest: null,
  arms: null,
  waist: null,
  legs: null,
};

const builderReducer = createReducer(initialState, (builder) => {

});

export default builderReducer;
