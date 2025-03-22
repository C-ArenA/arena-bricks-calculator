import type { Brick, Mortar } from '@/types/materials'
import type { Wall } from '@/types/walls'

export const calculateTotalWallsArea = (walls: Wall[]) => {
  return walls.reduce((acc, wall) => acc + wall.area, 0)
}

export const calculateBricksNeeded = (walls: Wall[], brick: Brick, mortar: Mortar) => {
  const totalWallsArea = calculateTotalWallsArea(walls)
  const totalBrickArea = (brick.length / 1000 + mortar.width) * (brick.height / 1000 + mortar.width)

  return Math.ceil(totalWallsArea / totalBrickArea)
}
