import type { Dimension, Unit } from '@/types/quantities'

const units: Unit[] = [
  { dimensionName: 'length', name: 'metro', symbol: 'm', conversionFactorToBase: 1 },
  { dimensionName: 'length', name: 'centímetro', symbol: 'cm', conversionFactorToBase: 0.01 },
  { dimensionName: 'length', name: 'milímetro', symbol: 'mm', conversionFactorToBase: 0.001 },
  { dimensionName: 'length', name: 'pulgada', symbol: 'inch', conversionFactorToBase: 0.0254 },
  { dimensionName: 'length', name: 'pie', symbol: 'ft', conversionFactorToBase: 0.3048 },
  { dimensionName: 'area', name: 'metro cuadrado', symbol: 'm^2', conversionFactorToBase: 1 },
  {
    dimensionName: 'area',
    name: 'centímetro cuadrado',
    symbol: 'cm^2',
    conversionFactorToBase: 0.0001,
  },
  {
    dimensionName: 'area',
    name: 'milímetro cuadrado',
    symbol: 'mm^2',
    conversionFactorToBase: 0.000001,
  },
  {
    dimensionName: 'area',
    name: 'pulgada cuadrada',
    symbol: 'inch^2',
    conversionFactorToBase: 0.00064516,
  },
  { dimensionName: 'area', name: 'pie cuadrado', symbol: 'ft^2', conversionFactorToBase: 0.092903 },
  { dimensionName: 'volume', name: 'metro cubico', symbol: 'm^3', conversionFactorToBase: 1 },
  {
    dimensionName: 'volume',
    name: 'centímetro cubico',
    symbol: 'cm^3',
    conversionFactorToBase: 0.000001,
  },
  {
    dimensionName: 'volume',
    name: 'milímetro cubico',
    symbol: 'mm^3',
    conversionFactorToBase: 0.000000001,
  },
  {
    dimensionName: 'volume',
    name: 'pulgada cubica',
    symbol: 'inch^3',
    conversionFactorToBase: 0.0000163871,
  },
  {
    dimensionName: 'volume',
    name: 'pie cubico',
    symbol: 'ft^3',
    conversionFactorToBase: 0.0283168,
  },
  { dimensionName: 'time', name: 'segundo', symbol: 's', conversionFactorToBase: 1 },
]

const dimensions: Dimension[] = [
  {
    name: 'time',
    symbol: 'T',
    baseUnit: units.find((u) => u.name === 'segundo'),
  },
  {
    name: 'length',
    symbol: 'L',
    baseUnit: units.find((u) => u.name === 'metro'),
  },

  {
    name: 'area',
    symbol: 'LL',
    baseUnit: units.find((u) => u.name === 'metro cuadrado'),
  },

  {
    name: 'volume',
    symbol: 'LLL',
    baseUnit: units.find((u) => u.name === 'metro cubico'),
  },

  {
    name: 'mass',
    symbol: 'M',
    baseUnit: units.find((u) => u.name === 'kg'),
  },
]

export { units, dimensions }
