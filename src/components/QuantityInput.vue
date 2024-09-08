<script setup lang="ts">
// Components
import InputGroup from 'primevue/inputgroup'
import InputGroupAddon from 'primevue/inputgroupaddon'
import InputNumber from 'primevue/inputnumber'
// Icons
import FeInfo from '~icons/fe/info'
// Imports
import { ref } from 'vue'
import type { Unit, DimensionString } from '@/types/quantities'
import UnitsSelect from './UnitsSelect.vue'

// --------- ACTUAL CODE ---------
interface Props {
  dimensionName: DimensionString
  inputId?: string
  inputLabel?: string
  iconComponent?: object
  instructions?: string
}
const props = defineProps<Props>()
const quantity = defineModel<number>({
  required: true,
  // Unit Converter
  set: (quantityWithUnit) => toBaseUnit(quantityWithUnit, unit.value), // Como se setea en el Parent
  get: (quantityWithBaseUnit) => fromBaseUnit(quantityWithBaseUnit, unit.value) // Como lo obtengo en el Child
})
const unit = ref<Unit | undefined>()
const toBaseUnit = (quantity: number, unit?: Unit): number => {
  return unit ? quantity * unit.conversionFactorToBase : 0
}
const fromBaseUnit = (quantity: number, unit?: Unit): number => {
  return unit ? quantity / unit.conversionFactorToBase : 0
}
</script>

<template>
  <div>
    <label v-if="inputLabel" :for="inputId" class="mb-3 flex gap-2 items-center"
      ><i class="inline">
        <FeInfo class="inline" />
      </i>
      {{ inputLabel }}</label
    >

    <InputGroup class="mb-5">
      <InputGroupAddon>
        <component v-if="iconComponent" :is="iconComponent" class="text-2xl" />
      </InputGroupAddon>
      <InputNumber
        v-model="quantity"
        :inputId="inputId"
        :useGrouping="false"
        :minFractionDigits="0"
        :maxFractionDigits="5"
        locale="es-ES"
        style="width: 100%"
      />
      <UnitsSelect v-model="unit" :dimensionName="dimensionName" />
    </InputGroup>
  </div>
</template>
