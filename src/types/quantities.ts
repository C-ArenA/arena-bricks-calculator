// quantities.ts
export type Dimension = {
  name: string // e.g. Length | Area | Volume | Weight
  symbol: string // e.g. L | L^2 | L^3 | M
  baseUnit?: Unit // e.g. m |  m^2 | m^3 | kg	
}

export type Unit = {
  dimension: Dimension 
  name: string // e.g. Meter
  symbol: string // e.g. m
  conversionFactorToBase?: number // e.g. 1
}

export type Quantity = {
    value: number
    unit?: Unit
}
