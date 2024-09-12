<script setup lang="ts">
import Panel from 'primevue/panel'
import QuantityInput from '../molecules/QuantityInput.vue'
import ToggleSwitch from 'primevue/toggleswitch'
import UilWall from '~icons/uil/wall'
import type { Mortar } from '@/types/materials'
import { units } from '@/data/units'

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
  </Panel>
</template>

<style lang="scss" scoped></style>
