<script setup lang="ts">
import PhWallFill from '~icons/ph/wall-fill'
import FeInfo from '~icons/fe/info'
import MaterialSymbolsWidth from '~icons/material-symbols/width'
import MaterialSymbolsHeight from '~icons/material-symbols/height';
import Stepper from 'primevue/stepper'
import StepItem from 'primevue/stepitem'
import StepPanel from 'primevue/steppanel'
import Panel from 'primevue/panel';
import Step from 'primevue/step'
import Button from 'primevue/button'
import InputNumber from 'primevue/inputnumber'
import InputGroup from 'primevue/inputgroup'
import Select from 'primevue/select'
import Card from 'primevue/card'
import InputGroupAddon from 'primevue/inputgroupaddon'
import { ref } from 'vue'
import type { Unit } from '@/types/units'

const h = ref(0)
const units = ref<Unit[]>([
  { id: 1, name: 'm', relationToDefault: 1, type: 'length' },
  { id: 2, name: 'cm', relationToDefault: 0.01, type: 'length' },
  { id: 3, name: 'inch', relationToDefault: 0.0254, type: 'length' },
  { id: 4, name: 'mm', relationToDefault: 0.001, type: 'length' }
])
const selectedUnit = ref<Unit>(units.value[0])
</script>

<template>
  <h2 class="text-4xl font-extrabold text-color mb-4">Calculadora de Ladrillos ArenA</h2>
  <Stepper value="1">
    <StepItem value="1">
      <Step>Definir Dimensiones del Muro</Step>
      <StepPanel header="fdfd" v-slot="{ activateCallback }">
        <Panel header="Muro" toggleable>
          <template #header>
            <div class="flex items-center gap-4">
              <PhWallFill class="text-2xl" />
              <h4 class="text-2xl font-bold text-color">Muro 1</h4>
            </div>
          </template>
          <label for="width" class="block mb-3 flex gap-2 items-center"><i class="inline">
              <FeInfo class="inline" />
            </i>
            Ancho</label>
          <InputGroup class="mb-5">
            <InputGroupAddon>
              <MaterialSymbolsWidth class="text-2xl" />
            </InputGroupAddon>
            <InputNumber v-model="h" inputId="width" :useGrouping="false" :minFractionDigits="0" :maxFractionDigits="5"
              locale="es-ES" style="width: 100%" />
            <Select v-model="selectedUnit" :options="units" optionLabel="name" placeholder="m" class="grow-0 w-auto"
              style="width: unset" />
          </InputGroup>

          <label for="height" class="block mb-3 flex gap-2 items-center"><i class="inline">
              <FeInfo class="inline" />
            </i>
            Alto</label>
          <InputGroup class="mb-5">
            <InputGroupAddon>
              <MaterialSymbolsHeight class="text-2xl" />
            </InputGroupAddon>
            <InputNumber v-model="h" inputId="height" :useGrouping="false" :minFractionDigits="0" :maxFractionDigits="5"
              locale="es-ES" style="width: 100%" />
            <Select v-model="selectedUnit" :options="units" optionLabel="name" placeholder="m" class="grow-0 w-auto"
              style="width: unset" />
          </InputGroup>
          <p>Area Calculada: 45 m2</p>
        </Panel>
        <div class="flex justify-center mt-6">
          <Button icon="pi pi-plus" severity="secondary" iconPos="bottom" rounded />
        </div>
        <div class="py-6 text-center">
          <Button label="Next" @click="activateCallback('2')" />
        </div>
      </StepPanel>
    </StepItem>
    <StepItem value="2">
      <Step>Elige tus ladrillos</Step>
      <StepPanel v-slot="{ activateCallback }">
        <div class="flex py-6 gap-2">
          <Button label="Back" severity="secondary" @click="activateCallback('1')" />
          <Button label="Next" @click="activateCallback('3')" />
        </div>
      </StepPanel>
    </StepItem>
    <StepItem value="3">
      <Step>Estimemos el mortero</Step>
      <StepPanel v-slot="{ activateCallback }">
        <div class="py-6">
          <Button label="Back" severity="secondary" @click="activateCallback('2')" />
        </div>
      </StepPanel>
    </StepItem>
  </Stepper>
</template>

<style></style>
