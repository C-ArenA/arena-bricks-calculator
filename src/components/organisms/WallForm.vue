<script setup lang="ts">
import MaterialSymbolsWidth from '~icons/material-symbols/width'
import MaterialSymbolsHeight from '~icons/material-symbols/height'
import CarbonArea from '~icons/carbon/area'
import QuantityInput from '@/components/molecules/QuantityInput.vue'
import type { Wall } from '@/types/walls'
import { ref, watchEffect } from 'vue'

// --------- BINDINGS ---------
defineProps<{ wallId: string }>()
defineEmits(['deleteWall'])
const wall = defineModel<Wall>({
  required: true,
})

// --------- STATE ---------
const collapsed = ref(false)

// --------- ACTIONS ---------
const updateArea = () => {
  if (!wall.value.justAreaMode) {
    wall.value.area = wall.value.length * wall.value.height
  }
}
const updateDimensions = () => {
  if (wall.value.justAreaMode) {
    if (wall.value.area != wall.value.length * wall.value.height) {
      wall.value.length = wall.value.area
      wall.value.height = 1
    }
  }
}

// --------- LIFECYCLE ---------
watchEffect(updateArea)
watchEffect(updateDimensions)
</script>

<template>
  <Panel v-model:collapsed="collapsed" header="Muro" toggleable class="my-5">
    <template #header>
      <div class="flex items-center gap-4">
        <PhWallFill class="text-2xl" />
        <h4 class="text-2xl font-bold text-color">
          Muro {{ wallId ?? '' }}
          <span v-if="collapsed" class="text-muted-color text-lg font-light">
            ({{ wall.area }} m2)
          </span>
        </h4>
      </div>
    </template>
    <template #icons>
      <div class="inline-flex gap-2 justify-center items-center">
        <ToggleButton v-if="!collapsed" v-model="wall.justAreaMode" unstyled>
          <PhRulerBold v-if="!wall.justAreaMode" />
          <MingcuteTextAreaFill v-if="wall.justAreaMode" />
        </ToggleButton>
        <Button
          icon="pi pi-trash"
          severity="danger"
          rounded
          text
          @click="$emit('deleteWall', wallId)" />
      </div>
    </template>
    <QuantityInput
      v-if="wall.justAreaMode"
      v-model="wall.area"
      dimensionName="area"
      inputLabel="Área del Muro"
      :iconComponent="CarbonArea" />
    <template v-else>
      <QuantityInput
        v-if="true"
        v-model="wall.length"
        dimensionName="length"
        inputLabel="Largo del Muro"
        :iconComponent="MaterialSymbolsWidth"
        instructions="Ingrese el largo horizontal del muro en las unidades que desee. Por ejemplo: 5 m, 2 ft, 1.5 y 0.5" />
      <QuantityInput
        v-if="true"
        v-model="wall.height"
        dimensionName="length"
        inputLabel="Alto del Muro"
        :iconComponent="MaterialSymbolsHeight" />
      <p class="text-sm text-muted-color text-right mt-6" v-if="true">
        Área del Muro:
        <span class="text-lg font-semibold">{{ wall.area }} m2</span>
      </p>
    </template>
  </Panel>
</template>
