export interface IHead {
  id: number
  type: 'Head'
  name: string
  rarity: number
  defense: number
  resistances: Resistances
  skills: Skill[]
}

export interface IChest {
  id: number
  type: 'Chest'
  name: string
  rarity: number
  defense: number
  resistances: Resistances
  skills: Skill[]
}

export interface IArms {
  id: number
  type: 'Arms'
  name: string
  rarity: number
  defense: number
  resistances: Resistances
  skills: Skill[]
}

export interface IWaist {
  id: number
  type: 'Waist'
  name: string
  rarity: number
  defense: number
  resistances: Resistances
  skills: Skill[]
}

export interface ILegs {
  id: number
  type: 'Legs'
  name: string
  rarity: number
  defense: number
  resistances: Resistances
  skills: Skill[]
}

export interface Resistances {
  fire: number
  water: number
  thunder: number
  ice: number
  dragon: number
}

export interface Skill {
  name: string
  description: string
  level: number
  effect: string
  modifier: string | null
}
