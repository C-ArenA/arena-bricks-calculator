<script setup lang="ts">
import Select from 'primevue/select'
import { computed, onMounted, watch } from 'vue'
import type { Unit, DimensionString } from '@/types/quantities'
import { dimensions, units } from '@/data/units'

interface Props {
  dimensionName: DimensionString
}
const props = defineProps<Props>()

const selectedUnit = defineModel<Unit | undefined>()
const filteredUnits = computed(() =>
  units.filter((unit) => unit.dimensionName === props.dimensionName),
)

const setBaseUnit = () => {
  selectedUnit.value = dimensions.find((d) => d.name === props.dimensionName)?.baseUnit
}
onMounted(() => {
  if (selectedUnit.value === undefined) {
    setBaseUnit()
  }
})
watch(() => props.dimensionName, setBaseUnit)
</script>

<template>
  <Select v-model="selectedUnit" :options="filteredUnits" optionLabel="symbol" placeholder="u?" />
</template>
