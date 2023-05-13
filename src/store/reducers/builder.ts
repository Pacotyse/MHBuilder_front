import { createAction, createReducer } from '@reduxjs/toolkit';
import { IWeapon } from '../../@types/weapon';
import {
  IArmor,
  IArms, IChest, IHead, ILegs, IWaist,
} from '../../@types/armor';
import { createAppAsyncThunk } from '../../utils/redux';
import { axiosInstance } from '../../utils/axios';

export interface BuilderState {
  weaponList: IWeapon[] | null
  armorList: IArmor[] | null
  armorType: string
  weaponType: string
  weapon: IWeapon | null
  head: IHead | null
  chest: IChest | null
  arms: IArms | null
  waist: IWaist | null
  legs: ILegs | null
  isLoading: boolean
}

export const setWeaponType = createAction<string>('builder/SET_WEAPON_TYPE');
export const setArmorType = createAction<string>('builder/SET_ARMOR_TYPE');

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
    return armors as IArmor[];
  },
);

export const clearWeaponList = createAction('builder/CLEAR_WEAPON_LIST');
export const clearArmorList = createAction('builder/CLEAR_ARMOR_LIST');

export const setBuilderWeapon = createAction<IWeapon>('builder/SET_WEAPON');

export const setBuilderArmor = createAction<IArmor>('builder/SET_ARMOR');

export const initialState: BuilderState = {
  weaponList: null,
  armorList: null,
  armorType: '',
  weaponType: '',
  weapon: null,
  head: null,
  chest: null,
  arms: null,
  waist: null,
  legs: null,
  isLoading: false,
};

const builderReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setWeaponType, (state, action) => {
      state.weaponType = action.payload;
    })
    .addCase(setArmorType, (state, action) => {
      state.armorType = action.payload;
    })
    .addCase(clearWeaponList, (state) => {
      state.weaponList = null;
    })
    .addCase(clearArmorList, (state) => {
      state.armorList = null;
    })
    .addCase(fetchWeaponsByType.pending, (state) => {
      // to set a loading later
      state.isLoading = true;
    })
    .addCase(fetchWeaponsByType.fulfilled, (state, action) => {
      state.isLoading = false;
      state.weaponList = action.payload;
    })
    .addCase(fetchWeaponsByType.rejected, (state) => {
      // to set error message later
      console.log('Erreur dans le fetch de weapons');
      state.isLoading = false;
    })
    .addCase(fetchArmorsByType.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchArmorsByType.rejected, (state) => {
      state.isLoading = false;
      console.log('Erreur dans le fetch de armors');
    })
    .addCase(fetchArmorsByType.fulfilled, (state, action) => {
      state.isLoading = false;
      state.armorList = action.payload;
    })
    .addCase(setBuilderWeapon, (state, action) => {
      state.weapon = action.payload;
    })
    .addCase(setBuilderArmor, (state, action) => {
      //! TS Error to fix later
      state[action.payload.type] = action.payload;
    });
});

export default builderReducer;
