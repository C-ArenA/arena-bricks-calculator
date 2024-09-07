import type { Dimension, Unit } from '@/types/quantities'

const time: Dimension = {
  name: 'tiempo',
  symbol: 'T'
}

const length: Dimension = {
  name: 'longitud',
  symbol: 'L'
}

const area: Dimension = {
  name: 'área',
  symbol: 'LL'
}

const volume: Dimension = {
  name: 'volumen',
  symbol: 'LLL'
}

const mass: Dimension = {
  name: 'masa',
  symbol: 'M'
}

const units: Unit[] = [
  { dimension: length, name: 'metro', symbol: 'm', conversionFactorToBase: 1 },
  { dimension: length, name: 'centímetro', symbol: 'cm', conversionFactorToBase: 0.01 },
  { dimension: length, name: 'milímetro', symbol: 'mm', conversionFactorToBase: 0.001 },
  { dimension: length, name: 'pulgada', symbol: 'inch', conversionFactorToBase: 0.0254 },
  { dimension: length, name: 'pie', symbol: 'ft', conversionFactorToBase: 0.3048 },
  { dimension: area, name: 'metro cuadrado', symbol: 'm^2', conversionFactorToBase: 1 },
  { dimension: area, name: 'centímetro cuadrado', symbol: 'cm^2', conversionFactorToBase: 0.0001 },
  { dimension: area, name: 'milímetro cuadrado', symbol: 'mm^2', conversionFactorToBase: 0.000001 },
  { dimension: area, name: 'pulgada cuadrada', symbol: 'inch^2', conversionFactorToBase: 0.00064516 },
  { dimension: area, name: 'pie cuadrado', symbol: 'ft^2', conversionFactorToBase: 0.092903 },
  { dimension: volume, name: 'metro cubico', symbol: 'm^3', conversionFactorToBase: 1 },
  { dimension: volume, name: 'centímetro cubico', symbol: 'cm^3', conversionFactorToBase: 0.000001 },
  { dimension: volume, name: 'milímetro cubico', symbol: 'mm^3', conversionFactorToBase: 0.000000001 },
  { dimension: volume, name: 'pulgada cubica', symbol: 'inch^3', conversionFactorToBase: 0.0000163871 },
  { dimension: volume, name: 'pie cubico', symbol: 'ft^3', conversionFactorToBase: 0.0283168 },
]

length.baseUnit = units.find(u => u.name === 'metro')
area.baseUnit = units.find(u => u.name === 'metro cuadrado')
volume.baseUnit = units.find(u => u.name === 'metro cubico')

export { units, length, area, volume, mass }