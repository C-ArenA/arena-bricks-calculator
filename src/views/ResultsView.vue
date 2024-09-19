<script setup lang="ts">
import Card from 'primevue/card'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import { useCalculatorStore } from '@/stores/calculator'
import { ref } from 'vue'
const calculatorStore = useCalculatorStore()
const print = () => {
  window.scrollTo(0, 0)
  window.print()
}
const quotation = ref(false)
</script>

<template>
  <div class="max-w-xl mx-auto p-8">
    <div class="mb-8">
      <h2 class="text-2xl font-bold text-color">Calculadora ArenA</h2>
      <p class="text-color">Hoja de Resultados</p>
      <p>
        {{ new Date().toLocaleString('es', { year: 'numeric', month: 'long', day: 'numeric' }) }}
      </p>
      <Button
        label="Imprimir"
        icon="pi pi-print"
        severity="secondary"
        @click="print"
        class="mt-2 print:!hidden" />
    </div>
    <Card class="max-w-xl mx-auto !shadow-2xl print:!shadow-none print:!border overflow-hidden">
      <template #header>
        <div class="text-8xl font-bold text-primary text-center bg-highlight-emphasis py-4">
          {{ calculatorStore.totalBricksNeeded }}
        </div>
      </template>
      <template #title>
        <h2 class="text-center">Piezas de {{ calculatorStore.brick.name }}</h2>
      </template>
      <template #subtitle>
        <p class="text-center">
          {{ calculatorStore.brick.length * 100 }} x {{ calculatorStore.brick.height * 100 }} x
          {{ calculatorStore.brick.width * 100 }} (cm)
        </p>
      </template>
      <template #content>
        <p class="mb-4">Para un(a):</p>
        <ul class="list-disc list-inside flex flex-col gap-2">
          <li>
            Superficie total de
            <span class="bg-highlight py-1 px-2 rounded-sm">
              {{ calculatorStore.wallsArea }} m2
            </span>
          </li>
          <li>
            Grosor de junta de mortero de
            <span class="bg-highlight py-1 px-2 rounded-sm">
              {{ calculatorStore.mortar.width * 1000 }} mm
            </span>
          </li>
        </ul>
      </template>
    </Card>
    <Button label="Solicitar Cotización" class="mt-4 print:!hidden" @click="quotation = true" />
    <Dialog v-model:visible="quotation" header="Formulario de Cotización"></Dialog>
  </div>
</template>

<style lang="scss" scoped></style>
