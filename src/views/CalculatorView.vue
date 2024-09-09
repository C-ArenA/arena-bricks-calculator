<script setup lang="ts">
import Stepper from 'primevue/stepper'
import StepItem from 'primevue/stepitem'
import StepPanel from 'primevue/steppanel'
import Step from 'primevue/step'
import Button from 'primevue/button'
import WallForm from '@/components/organisms/WallForm.vue'
</script>

<template>
  <section class="max-w-4xl mx-auto my-12">
    <h2 class="text-4xl font-extrabold text-color mb-12 text-center">
      Calculadora de Ladrillos
      <span class="underline underline-offset-4 text-primary-300">ArenA</span>
    </h2>
    <Stepper value="1">
      <StepItem value="1">
        <Step>Definir Dimensiones del Muro</Step>
        <StepPanel header="fdfd" v-slot="{ activateCallback }">
          <WallForm />
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
  </section>
</template>

<style></style>
