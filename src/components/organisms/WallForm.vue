<script setup lang="ts">
import PhWallFill from '~icons/ph/wall-fill'
import MaterialSymbolsWidth from '~icons/material-symbols/width'
import MaterialSymbolsHeight from '~icons/material-symbols/height'
import Panel from 'primevue/panel'
import { ref } from 'vue'
import QuantityInput from '@/components/molecules/QuantityInput.vue'
const wallWidth = ref(0)
const wallHeight = ref(0)
</script>

<template>
  <Panel header="Muro" toggleable>
    <template #header>
      <div class="flex items-center gap-4">
        <PhWallFill class="text-2xl" />
        <h4 class="text-2xl font-bold text-color">Muro 1</h4>
      </div>
    </template>
    <QuantityInput
      v-model="wallWidth"
      dimensionName="length"
      inputLabel="Ancho del Muro"
      inputId="wall_width"
      :iconComponent="MaterialSymbolsWidth"
      instructions="Ingrese el ancho del muro en las unidades que desee. Por ejemplo: 5 m, 2 ft, 1.5 y 0.5"
    />
    <QuantityInput
      v-model="wallHeight"
      dimensionName="length"
      inputLabel="Alto del Muro"
      inputId="wall_height"
      :iconComponent="MaterialSymbolsHeight"
    />
    <p>Area Calculada: {{ wallWidth * wallHeight }} m2</p>
  </Panel>
</template>

<style lang="scss" scoped></style>
