export type UnitType = 'length' | 'area' | 'volume' | 'weight'
export type Unit = {
  id: number
  name: string
  relationToDefault: number
  type: UnitType
}
