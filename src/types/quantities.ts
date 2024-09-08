// quantities.ts
export type DimensionString = 'time' | 'length' | 'area' | 'volume' | 'mass'
export type Dimension = {
  name: DimensionString // e.g. Length | Area | Volume | Weight
  descriptiveName?: string
  symbol: string // e.g. L | L^2 | L^3 | M
  baseUnit?: Unit // e.g. m |  m^2 | m^3 | kg	
}

export type Unit = {
  dimensionName: DimensionString 
  name: string // e.g. Meter
  symbol: string // e.g. m
  conversionFactorToBase: number // e.g. 1
}

export type Magnitude = {
    quantity: number
    unit?: Unit
}
