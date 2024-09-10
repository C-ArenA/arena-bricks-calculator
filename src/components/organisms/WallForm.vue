<script setup lang="ts">
import PhWallFill from '~icons/ph/wall-fill'
import MaterialSymbolsWidth from '~icons/material-symbols/width'
import MaterialSymbolsHeight from '~icons/material-symbols/height'
import CarbonArea from '~icons/carbon/area'
import UilWall from '~icons/uil/wall'
import SelectButton from 'primevue/selectbutton'
import Button from 'primevue/button'
import Panel, { type PanelToggleEvent } from 'primevue/panel'
import QuantityInput from '@/components/molecules/QuantityInput.vue'
import type { Wall } from '@/types/walls'
import { MeasurementOption } from '@/types/walls'
import { ref, watchEffect } from 'vue'

// --------- BINDINGS ---------
defineProps<{ wallId: string }>()
defineEmits(['deleteWall'])
const wall = defineModel<Wall>({
  default: () => ({
    width: 0,
    height: 0,
    area: 0,
    mortarJointWidth: 0,
    measurementOption: MeasurementOption.Dimensions,
  }),
})

// --------- STATE ---------
const measurementOptions: MeasurementOption[] = [
  MeasurementOption.Dimensions,
  MeasurementOption.Area,
]
const collapsed = ref(false)

// --------- ACTIONS ---------
const setCollapsedValue = (panelToggleEvent: PanelToggleEvent) => {
  collapsed.value = panelToggleEvent.value
}
const updateArea = () => {
  if (wall.value.measurementOption === MeasurementOption.Dimensions) {
    wall.value.area = wall.value.width * wall.value.height
  }
}
const updateDimensions = () => {
  if (wall.value.measurementOption === MeasurementOption.Area) {
    if (wall.value.area != wall.value.width * wall.value.height) {
      wall.value.width = wall.value.area
      wall.value.height = 1
    }
  }
}

// --------- LIFECYCLE ---------
watchEffect(updateArea)
watchEffect(updateDimensions)
</script>

<template>
  <Panel header="Muro" toggleable @toggle="setCollapsedValue" class="my-5">
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
      <Button
        icon="pi pi-trash"
        severity="danger"
        rounded
        text
        @click="$emit('deleteWall', wallId)" />
    </template>
    <div class="flex flex-col items-center sm:items-end mt-2 mb-6 sm:mb-0 sm:mt-0">
      <SelectButton
        v-model="wall.measurementOption"
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
      v-if="wall.measurementOption === MeasurementOption.Dimensions"
      v-model="wall.width"
      dimensionName="length"
      inputLabel="Ancho del Muro"
      :iconComponent="MaterialSymbolsWidth"
      instructions="Ingrese el ancho del muro en las unidades que desee. Por ejemplo: 5 m, 2 ft, 1.5 y 0.5" />
    <QuantityInput
      v-if="wall.measurementOption === MeasurementOption.Dimensions"
      v-model="wall.height"
      dimensionName="length"
      inputLabel="Alto del Muro"
      :iconComponent="MaterialSymbolsHeight" />
    <QuantityInput
      v-if="wall.measurementOption === MeasurementOption.Area"
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
      v-if="wall.measurementOption === MeasurementOption.Dimensions">
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
