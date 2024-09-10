<script setup lang="ts">
import Stepper from 'primevue/stepper'
import StepItem from 'primevue/stepitem'
import StepPanel from 'primevue/steppanel'
import Step from 'primevue/step'
import Button from 'primevue/button'
import Card from 'primevue/card'
import { computed, ref } from 'vue'
import type { Brick, Mortar } from '@/types/materials'
import { bricks } from '@/data/materials'
import WallsCollector from '@/components/organisms/WallsCollector.vue'
import type { Wall } from '@/types/walls'
import { defaultMortar, defaultWall } from '@/defaults'
import { calculateBricksNeeded } from '@/utils/calculator'

const walls = ref<Wall[]>([{...defaultWall}])
const mortar = ref<Mortar>({...defaultMortar})
const selectedBrick = ref<Brick>(bricks[0])
const totalBricksNeeded = computed(() => calculateBricksNeeded(walls.value, selectedBrick.value, mortar.value))
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
          <div class="grid grid-cols-3 gap-4">
            <div v-for="(brick, index) in bricks" :key="index" class="flex gap-2">
              <label :for="'lad' + index.toString()" :class="{ outline: selectedBrick.name === brick.name }">
                <Card class="max-w-sm min-w-24">
                  <template #header>
                    <img alt="user header" src="@/assets/img/lad.png" />
                  </template>
                  <template #title>{{ brick.name }}</template>
                  <template #subtitle>{{ brick.description }}</template>
                  <template #content>
                    <p class="m-0">{{ brick.width }} x {{ brick.height }} x {{ brick.length }}</p>
                  </template>
                </Card>
              </label>
              <input
                class="hidden"
                v-model="selectedBrick"
                type="radio"
                :value="brick"
                :id="'lad' + index.toString()" />
            </div>
          </div>
          <div class="flex py-6 gap-2">
            <Button label="Back" severity="secondary" @click="activateCallback('1')" />
            <Button label="Next" @click="activateCallback('3')" />
          </div>
        </StepPanel>
      </StepItem>
      <StepItem value="3">
        <Step>Mira la cantidad Total</Step>
        <StepPanel v-slot="{ activateCallback }">
          <p>{{ totalBricksNeeded.toFixed(2) }}</p>
          <div class="py-6">
            <Button label="Back" severity="secondary" @click="activateCallback('2')" />
          </div>
        </StepPanel>
      </StepItem>
    </Stepper>
  </section>
</template>

<style></style>
