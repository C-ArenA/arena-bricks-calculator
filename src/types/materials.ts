export type Brick = {
  name: string
  description: string
  img?: string
  length: number
  height: number
  width: number
}

export type Mortar = {
  width: number
  cementSandRatio: [number, number]
  dryWetFactor: number
  cement: Cement
  waterCementWeightRatio: number
}

export type Cement = {
  name: string
  bagWeight: number // Kg
  bagVolume: number // Especificado en el volumen de caja de las especificaciones técnicas del cemento
}
