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
  const mortarPerBlockArea = computed(
    () => mortar.value.width * (brick.value.length + brick.value.height + mortar.value.width),
  )
  const brickArea = computed(() => brick.value.length * brick.value.height)
  const mortarBrickRatio = computed(
    () => mortarPerBlockArea.value / (brickArea.value + mortarPerBlockArea.value),
  )
  const mortarVolume = computed(() => mortarBrickRatio.value * wallsArea.value * brick.value.width)
  const mortarDryVolume = computed(() => mortarVolume.value * mortar.value.dryWetFactor)
  const cementNeededVolume = computed(
    () =>
      (mortarDryVolume.value * mortar.value.cementSandRatio[0]) /
      (mortar.value.cementSandRatio[0] + mortar.value.cementSandRatio[1]),
  )
  const cementDensity = computed(
    () => mortar.value.cement.bagWeight / mortar.value.cement.bagVolume,
  )
  const cementNeededWeight = computed(() => cementNeededVolume.value * cementDensity.value)
  const cementNeededBags = computed(() =>
    Math.ceil(cementNeededWeight.value / mortar.value.cement.bagWeight),
  )
  const sandNeededVolume = computed(
    () => cementNeededVolume.value * mortar.value.cementSandRatio[1],
  )
  const waterNeeded = computed(() => cementNeededWeight.value * mortar.value.waterCementWeightRatio)
  return {
    walls,
    mortar,
    brick,
    wallsArea,
    totalBricksNeeded,
    cementNeededBags,
    cementNeededWeight,
    sandNeededVolume,
    waterNeeded,
    mortarDryVolume,
    mortarVolume,
  }
})
