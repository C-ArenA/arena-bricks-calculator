<script setup lang="ts">
import PhWallFill from '~icons/ph/wall-fill'
import Stepper from 'primevue/stepper'
import StepItem from 'primevue/stepitem'
import StepPanel from 'primevue/steppanel'
import Panel from 'primevue/panel'
import Step from 'primevue/step'
import Button from 'primevue/button'
import { ref } from 'vue'
import QuantityInput from '@/components/QuantityInput.vue'
import { length } from '@/data/units'
const wallWidth = ref(0)

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
          <QuantityInput inputLabel="MiAncho" inputId="elancho" :dimension="length"/>
          <p>Area Calculada: {{ wallWidth }} m2</p>
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
