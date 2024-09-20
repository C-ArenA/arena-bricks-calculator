<script setup lang="ts">
//https://wecivilengineers.wordpress.com/2018/03/28/how-to-calculate-quantity-of-cement-sand-water-in-mortar-of-14/
import Panel from 'primevue/panel'
import QuantityInput from '../molecules/QuantityInput.vue'
import ToggleSwitch from 'primevue/toggleswitch'
import RadioButton from 'primevue/radiobutton'
import UilWall from '~icons/uil/wall'
import type { Mortar } from '@/types/materials'
import { units } from '@/data/units'
import { cements, validCementSandRatios } from '@/data/materials'

const mortar = defineModel<Mortar>({
  required: true,
})
</script>

<template>
  <Panel header="Mortero" class="my-5">
    <template #icons>
      <div class="inline-flex gap-1">
        <label class="text-sm text-muted-color">Detallado</label>
        <ToggleSwitch v-model="mortar.isDetailed" disabled />
      </div>
    </template>
    <QuantityInput
      v-model="mortar.width"
      inputLabel="Ancho de la junta de mortero"
      :iconComponent="UilWall"
      dimensionName="length"
      :defaultUnit="units.find((u) => u.name === 'milímetro')" />
    <h3 class="mb-2">Proporción cemento:arena</h3>
    <div class="flex flex-wrap gap-4 mb-4">
      <div v-for="(validCementSandRatio, index) in validCementSandRatios" :key="index" class="">
        <RadioButton
          v-model="mortar.cementSandRatio"
          :value="validCementSandRatio"
          :inputId="index.toString()"
          name="cement-sand-ratio" />
        <label :for="index.toString()" class="px-2">{{ validCementSandRatio[0] }} : {{ validCementSandRatio[1] }}</label>
      </div>
    </div>
    <h3 class="mb-2">Tipo de cemento</h3>
    <div class="flex flex-wrap gap-4 mb-4">
      <div v-for="(cement, index) in cements" :key="index" class="">
        <RadioButton
          v-model="mortar.cement"
          :value="cement"
          :inputId="index.toString()"
          name="cement" />
        <label :for="index.toString()" class="px-2">Cemento {{ cement.name }}</label>
      </div>
    </div>
  </Panel>
</template>

<style lang="scss" scoped></style>
