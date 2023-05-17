import { IWeapon } from './weapon';
import {
  IHead, IArms, IChest, ILegs, IWaist,
} from './armor';

export interface ILoadout {
  id: number
  name: string
  description: string
  weapon: IWeapon
  head: IHead
  chest: IChest
  waist: IWaist
  arms: IArms
  legs: ILegs
}
