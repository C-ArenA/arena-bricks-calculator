import { bricks } from '@/data/materials'
import { defaultMortar, defaultWall } from '@/defaults'
import type { Brick, Mortar } from '@/types/materials'
import type { Wall } from '@/types/walls'
import { calculateBricksNeeded, calculateTotalWallsArea } from '@/utils/calculator'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useCalculatorStore = defineStore('calculator', () => {
  const walls = ref<Wall[]>([{ ...defaultWall }])
  const mortar = ref<Mortar>({ ...defaultMortar })
  const brick = ref<Brick>(bricks[0])

  const wallsArea = computed(() => calculateTotalWallsArea(walls.value))
  const totalBricksNeeded = computed(() =>
    calculateBricksNeeded(walls.value, brick.value, mortar.value),
  )

  return { walls, mortar, brick, wallsArea, totalBricksNeeded }
})
