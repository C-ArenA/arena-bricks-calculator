import type { Brick, Cement } from '../types/materials'

export const bricks: Brick[] = [
  {
    name: 'Ladrillo Popular',
    description: 'Ladrillo cerámico de 6 huecos, rayado, no portante, para uso de relleno',
    img: 'https://raw.githubusercontent.com/Chromatic-UI/Chromatic/main/src/assets/ladrillo_a.png',
    width: 0.095,
    height: 0.14,
    length: 0.235,
  },
  {
    name: 'Ladrillo Estándar',
    description: 'Ladrillo cerámico de 6 huecos, rayado, no portante, para uso de relleno',
    width: 0.1,
    height: 0.15,
    length: 0.24,
  },
]

export const validCementSandRatios: [number, number][] = [
  [1, 2],
  [1, 3],
  [1, 4],
  [1, 5],
  [1, 6],
]

export const cements: Cement[] = [
  {
    name: 'Genérico',
    bagWeight: 50, // kg
    bagVolume: 0.034722,
  },
  {
    name: 'IP30',
    bagWeight: 50, // kg
    bagVolume: 0.035525,
  },
  {
    name: 'IP40',
    bagWeight: 50, // kg
    bagVolume: 0.037975,
  },
]
