<script setup lang="ts">
import PhWallFill from '~icons/ph/wall-fill'
import MaterialSymbolsWidth from '~icons/material-symbols/width'
import MaterialSymbolsHeight from '~icons/material-symbols/height'
import CarbonArea from '~icons/carbon/area'
import UilWall from '~icons/uil/wall'
import SelectButton from 'primevue/selectbutton'
import Panel, { type PanelToggleEvent } from 'primevue/panel'
import QuantityInput from '@/components/molecules/QuantityInput.vue'

import { ref, watchEffect } from 'vue'
import type { Wall } from '@/types/walls'

interface Props {
  wallId: string
}
defineProps<Props>()
// UI states
const collapsed = ref(false)
const setCollapsedValue = (panelToggleEvent: PanelToggleEvent) => {
  collapsed.value = panelToggleEvent.value
}
enum MeasurementOption {
  Area = 'Área',
  Dimensions = 'Dimensiones',
}
// Measurement Options States
const selectedMeasurementOption = ref<MeasurementOption>(MeasurementOption.Dimensions)
const measurementOptions = ref<MeasurementOption[]>([
  MeasurementOption.Dimensions,
  MeasurementOption.Area,
])

// Business Logic
const wall = ref<Wall>({
  width: 0,
  height: 0,
  area: 0,
  mortarJointWidth: 0,
})

const updateArea = () => {
  if (selectedMeasurementOption.value === MeasurementOption.Dimensions) {
    wall.value.area = wall.value.width * wall.value.height
  }
}
const updateDimensions = () => {
  if (selectedMeasurementOption.value === MeasurementOption.Area) {
    if (wall.value.area != wall.value.width * wall.value.height) {
      wall.value.width = wall.value.area
      wall.value.height = 1
    }
  }
}

watchEffect(updateArea)
watchEffect(updateDimensions)
</script>

<template>
  <Panel header="Muro" toggleable @toggle="setCollapsedValue">
    <template #header>
      <div>
        <div class="flex items-center gap-4">
          <PhWallFill class="text-2xl" />
          <h4 class="text-2xl font-bold text-color">
            Muro {{ wallId ?? '' }}
            <span v-if="collapsed" class="text-muted-color text-lg font-light">
              ({{ wall.area }} m2)
            </span>
          </h4>
        </div>
      </div>
    </template>
    <div class="flex flex-col items-center sm:items-end mt-2 mb-6 sm:mb-0 sm:mt-0">
      <SelectButton
        v-if="!collapsed"
        v-model="selectedMeasurementOption"
        :options="measurementOptions"
        aria-labelledby="basic"
        class="w-full sm:w-auto measurement-mode-select-button">
        <template #option="slotProps">
          {{ slotProps.option }}
        </template>
      </SelectButton>
      <label class="text-xs text-muted-color">Modo de Ingreso de medidas</label>
    </div>
    <QuantityInput
      v-if="selectedMeasurementOption === MeasurementOption.Dimensions"
      v-model="wall.width"
      dimensionName="length"
      inputLabel="Ancho del Muro"
      :iconComponent="MaterialSymbolsWidth"
      instructions="Ingrese el ancho del muro en las unidades que desee. Por ejemplo: 5 m, 2 ft, 1.5 y 0.5" />
    <QuantityInput
      v-if="selectedMeasurementOption === MeasurementOption.Dimensions"
      v-model="wall.height"
      dimensionName="length"
      inputLabel="Alto del Muro"
      :iconComponent="MaterialSymbolsHeight" />
    <QuantityInput
      v-if="selectedMeasurementOption === MeasurementOption.Area"
      v-model="wall.area"
      dimensionName="area"
      inputLabel="Área del Muro"
      :iconComponent="CarbonArea" />
    <QuantityInput
      v-model="wall.mortarJointWidth"
      dimensionName="length"
      inputLabel="Espesor de la junta de mortero"
      :iconComponent="UilWall" />
    <p
      class="text-sm text-muted-color text-right mt-6"
      v-if="selectedMeasurementOption === MeasurementOption.Dimensions">
      Área del Muro:
      <span class="text-lg font-semibold">{{ wall.area }} m2</span>
    </p>
  </Panel>
</template>

<style scoped>
@media (max-width: 640px) {
  .measurement-mode-select-button :deep(.p-togglebutton) {
    width: 100%;
  }
}
</style>
