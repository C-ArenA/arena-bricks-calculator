<script setup lang="ts">
import Stepper from 'primevue/stepper'
import StepItem from 'primevue/stepitem'
import StepPanel from 'primevue/steppanel'
import Step from 'primevue/step'
import Button from 'primevue/button'
import { computed, ref } from 'vue'
import type { Brick, Mortar } from '@/types/materials'
import { bricks } from '@/data/materials'
import WallsCollector from '@/components/organisms/WallsCollector.vue'
import type { Wall } from '@/types/walls'
import { defaultMortar, defaultWall } from '@/defaults'
import { calculateBricksNeeded } from '@/utils/calculator'
import BrickSelect from '@/components/organisms/BrickSelect.vue'
import MortarForm from '@/components/organisms/MortarForm.vue'

const walls = ref<Wall[]>([{ ...defaultWall }])
const mortar = ref<Mortar>({ ...defaultMortar })
const brick = ref<Brick>(bricks[0])
const totalBricksNeeded = computed(() =>
  calculateBricksNeeded(walls.value, brick.value, mortar.value),
)
</script>

<template>
  <section class="max-w-4xl mx-auto my-12">
    <h2 class="text-4xl font-extrabold text-color mb-12 text-center">
      Calculadora de Ladrillos
      <span class="underline underline-offset-4 text-primary-300">ArenA</span>
    </h2>
    <Stepper value="1">
      <StepItem value="1">
        <Step>Define las dimensiones de tu muro</Step>
        <StepPanel v-slot="{ activateCallback }">
          <WallsCollector v-model="walls" />
          <div class="py-6 text-center">
            <Button label="Next" @click="activateCallback('2')" />
          </div>
        </StepPanel>
      </StepItem>
      <StepItem value="2">
        <Step>Elige tus ladrillos preferidos</Step>
        <StepPanel v-slot="{ activateCallback }">
          <BrickSelect v-model="brick" />
          <div class="flex py-6 gap-2">
            <Button label="Back" severity="secondary" @click="activateCallback('1')" />
            <Button label="Next" @click="activateCallback('3')" />
          </div>
        </StepPanel>
      </StepItem>
      <StepItem value="3">
        <Step>Planea tu Mortero</Step>
        <StepPanel v-slot="{ activateCallback }">
          <MortarForm v-model="mortar"/>
          <div class="flex py-6 gap-2">
            <Button label="Back" severity="secondary" @click="activateCallback('2')" />
            <Button label="Next" @click="activateCallback('4')" />
          </div>
        </StepPanel>
      </StepItem>
      <StepItem value="4">
        <Step>Resultado</Step>
        <StepPanel v-slot="{ activateCallback }">
          <p>
            Cantidad de Ladrillos Necesarios:
            <span class="text-3xl font-medium text-primary">{{ totalBricksNeeded }}</span>
          </p>
          <div class="py-6">
            <Button label="Back" severity="secondary" @click="activateCallback('3')" />
          </div>
        </StepPanel>
      </StepItem>
    </Stepper>
  </section>
</template>

<style></style>
