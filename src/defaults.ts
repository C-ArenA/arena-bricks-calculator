import { cements } from './data/materials'
import type { Mortar } from './types/materials'
import { type Wall } from './types/walls'

export const defaultWall: Wall = {
  length: 0,
  height: 0,
  area: 0,
  justAreaMode: false,
}

export const defaultMortar: Mortar = {
  width: 0.015,
  isDetailed: false,
  cementSandRatio: [1, 3],
  dryWetFactor: 1.33,
  waterCementWeightRatio: 0.5,
  cement: cements.find((c) => c.name === 'IP30')!,
}
