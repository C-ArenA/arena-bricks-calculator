<script setup lang="ts">
import WallsCollector from '../organisms/WallsCollector.vue'
import Stepper from 'primevue/stepper'
import Step from 'primevue/step'
import StepItem from 'primevue/stepitem'
import StepPanel from 'primevue/steppanel'
import BrickSelect from '../organisms/BrickSelect.vue'
import MortarForm from '../organisms/MortarForm.vue'
import Button from 'primevue/button'
import { useRouter } from 'vue-router'
import { useCalculatorStore } from '@/stores/calculator'
const calculatorStore = useCalculatorStore()
const router = useRouter()
</script>

<template>
  <div>
    <Stepper value="1">
      <StepItem value="1">
        <Step>Define las dimensiones de tu muro</Step>
        <StepPanel v-slot="{ activateCallback }">
          <WallsCollector v-model="calculatorStore.walls" />
          <div class="py-6">
            <Button label="Siguiente" @click="activateCallback('2')" />
          </div>
        </StepPanel>
      </StepItem>
      <StepItem value="2">
        <Step>Elige tus ladrillos preferidos</Step>
        <StepPanel v-slot="{ activateCallback }">
          <BrickSelect v-model="calculatorStore.brick" />
          <div class="flex py-6 gap-2">
            <Button label="Atrás" severity="secondary" @click="activateCallback('1')" />
            <Button label="Siguiente" @click="activateCallback('3')" />
          </div>
        </StepPanel>
      </StepItem>
      <StepItem value="3">
        <Step>Planea tu Mortero</Step>
        <StepPanel v-slot="{ activateCallback }">
          <MortarForm v-model="calculatorStore.mortar" />
          <div class="flex py-6 gap-2">
            <Button label="Atrás" severity="secondary" @click="activateCallback('2')" />
            <Button
              label="Obtener Resultados"
              icon="pi pi-calculator"
              @click="router.push('/results')"
              raised />
          </div>
        </StepPanel>
      </StepItem>
    </Stepper>
  </div>
</template>

<style lang="scss" scoped></style>
