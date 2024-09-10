import type { Brick, Mortar } from '@/types/materials'
import type { Wall } from '@/types/walls'

export const calculateBricksNeeded = (walls: Wall[], brick: Brick, mortar: Mortar) => {
  const totalWallsArea = walls.reduce((acc, wall) => acc + wall.area, 0)
  const totalBrickArea = (brick.length + mortar.width) * (brick.height + mortar.width)

  return Math.ceil(totalWallsArea / totalBrickArea)
}
