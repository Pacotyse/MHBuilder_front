export interface IWeapon {
  id: number
  type: string
  icon: string
  name: string
  rarity: number
  attack: number
  affinity: number
  defense_bonus: number
  secret_effect: string
  sharpness: Sharpness
  elements: Element[]
}

export interface Sharpness {
  red: number | null
  orange: number | null
  yellow: number | null
  green: number | null
  blue: number | null
  white: number | null
  purple: number | null
}

export interface Element {
  name: string
  value: number
}
