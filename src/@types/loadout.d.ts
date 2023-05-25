import { IBuildStats, IStats } from './stats';

export interface ILoadout {
  id: string
  name: string
  description: string
  user_id: number
  username: string
  weapon_id: number
  icon: string
  head_id: number
  chest_id: number
  arms_id: number
  waist_id: number
  legs_id: number
  stats: IBuildStats
}
