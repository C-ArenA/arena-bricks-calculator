<script setup lang="ts">
import Stepper from 'primevue/stepper'
import StepItem from 'primevue/stepitem'
import StepPanel from 'primevue/steppanel'
import Step from 'primevue/step'
import Button from 'primevue/button'
import Card from 'primevue/card'
import WallForm from '@/components/organisms/WallForm.vue'
import { MeasurementOption, type Wall } from '@/types/walls'
import { computed, ref } from 'vue'
type Brick = {
  name: string
  description: string
  width: number
  height: number
  length: number
}
const walls = ref<Wall[]>([])
const addWall = () =>
  walls.value.push({
    width: 0,
    height: 0,
    area: 0,
    mortarJointWidth: 0.015,
    measurementOption: MeasurementOption.Dimensions,
  })
const bricks = ref<Brick[]>([
  {
    name: 'Ladrillo A',
    description: 'El mejor ladrillo A',
    width: 0.095,
    height: 0.15,
    length: 0.2,
  },
  {
    name: 'Ladrillo B',
    description: 'El mejor ladrillo B',
    width: 0.105,
    height: 0.14,
    length: 0.19,
  },
  {
    name: 'Ladrillo C',
    description: 'El mejor ladrillo C',
    width: 0.85,
    height: 0.13,
    length: 0.195,
  },
])
const selectedBrick = ref<Brick>(bricks.value[0])
const totalArea = computed(() => walls.value.reduce((acc, wall) => acc + wall.area, 0))
const brickAndMortarArea = computed(() => {
  const mortarWidth = walls.value.find(()=>true)?.mortarJointWidth??0
  return (mortarWidth + selectedBrick.value.length) * (selectedBrick.value.height + mortarWidth) 
})
const ladnumber = computed(() => totalArea.value / brickAndMortarArea.value)
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
          <WallForm
            v-for="(wall, index) in walls"
            :key="index"
            :wallId="(index + 1).toString()"
            v-model="walls[index]"
            @delete-wall="() => walls.splice(index, 1)" />
          <div class="flex justify-center mt-6">
            <Button
              icon="pi pi-plus"
              severity="secondary"
              iconPos="bottom"
              rounded
              @click="addWall" />
          </div>
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
              <label :for="'lad' + index.toString()" :class="{ outline: selectedBrick === brick }">
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
          <p>{{ ladnumber.toFixed(2) }}</p>
          <div class="py-6">
            <Button label="Back" severity="secondary" @click="activateCallback('2')" />
          </div>
        </StepPanel>
      </StepItem>
    </Stepper>
  </section>
</template>

<style></style>
