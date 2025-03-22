<script setup lang="ts">
import { getCurrentInstance, ref } from 'vue'
import type { Unit, DimensionString } from '@/types/quantities'
import UnitsSelect from '../atoms/UnitsSelect.vue'

// --------- BINDINGS ---------
interface Props {
  dimensionName: DimensionString
  defaultUnit?: Unit
  inputLabel?: string
  iconComponent?: object
  instructions?: string
}
const props = defineProps<Props>()
const quantity = defineModel<number | undefined>({
  required: true,
  // Unit Converter
  set: (quantityWithUnit) => toBaseUnit(quantityWithUnit, unit.value), // Como se setea en el Parent
  get: (quantityWithBaseUnit) => fromBaseUnit(quantityWithBaseUnit, unit.value), // Como lo obtengo en el Child
})

// --------- STATE ---------
const unit = ref<Unit | undefined>(props.defaultUnit)
const instance = getCurrentInstance()
const inputId = ref('input' + instance?.uid?.toString())
const showInstructions = ref(false)

// --------- ACTIONS ---------
const toBaseUnit = (quantity?: number, unit?: Unit): number | undefined => {
  if (quantity === undefined || unit === undefined) {
    return undefined
  }
  return quantity * unit.conversionFactorToBase
}
const fromBaseUnit = (quantity?: number, unit?: Unit): number | undefined => {
  if (quantity === undefined || unit === undefined) {
    return undefined
  }
  return quantity / unit.conversionFactorToBase
}
</script>

<template>
  <div class="my-3">
    <label v-if="inputLabel" :for="inputId" class="mb-3 flex gap-2 items-center">
      <Button
        v-if="instructions"
        class="inline"
        @click="showInstructions = !showInstructions"
        unstyled>
        <FeInfo class="inline" />
      </Button>
      {{ inputLabel }}
    </label>
    <Transition>
      <p v-if="showInstructions" class="text-sm text-muted-color mb-2">{{ instructions }}</p>
    </Transition>

    <InputGroup>
      <InputGroupAddon v-if="iconComponent">
        <component :is="iconComponent" class="text-2xl" />
      </InputGroupAddon>
      <InputNumber
        v-model="quantity"
        :min="0"
        :inputId="inputId"
        :useGrouping="false"
        :minFractionDigits="1"
        :maxFractionDigits="5"
        locale="es-ES"
        style="width: 100%" />
      <UnitsSelect
        v-model="unit"
        :dimensionName="dimensionName"
        class="grow-0 w-auto"
        style="width: unset" />
    </InputGroup>
  </div>
</template>

<style scoped>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition:
    transform 0.2s ease,
    opacity 0.2s ease,
    display 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: scaleY(0);
}
</style>
