<script setup lang="ts">
import Select from 'primevue/select'
import { ref, watchEffect } from 'vue'
import type { Unit, DimensionString } from '@/types/quantities'
import { dimensions, units } from '@/data/units'

interface Props {
  dimensionName: DimensionString
}
const props = defineProps<Props>()

const selectedUnit = defineModel<Unit | undefined>()
const filteredUnits = ref<Unit[]>([])

watchEffect(() => {
  console.log('Miro props')
  filteredUnits.value = units.filter((unit) => unit.dimensionName === props.dimensionName)
  selectedUnit.value = dimensions.find((d) => d.name === props.dimensionName)?.baseUnit
})
</script>

<template>
  <Select
    v-model="selectedUnit"
    :options="filteredUnits"
    optionLabel="symbol"
    placeholder="u"
  />
</template>
