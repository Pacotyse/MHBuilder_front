export interface IBuildStats {
  defense: number
  resistances: IResistanceStats
  totalSkills: ISkillStats[]
}

export interface ISkillStats {
  id: number
  name: string
  level: string
}

export interface IResistanceStats {
  fire: number
  water: number
  thunder: number
  ice: number
  dragon: number
}
