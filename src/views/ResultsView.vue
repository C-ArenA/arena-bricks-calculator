<script setup lang="ts">
import { useCalculatorStore } from '@/stores/calculator'
import TablerPaperBag from '~icons/tabler/paper-bag'
import HumbleiconsBox from '~icons/humbleicons/box'
import IcOutlineWaterDrop from '~icons/ic/outline-water-drop'
import { ref } from 'vue'
const calculatorStore = useCalculatorStore()
const print = () => {
  window.scrollTo(0, 0)
  window.print()
}
const quotation = ref(false)
</script>

<template>
  <div class="max-w-xl print:!max-w-none mx-auto p-8">
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
    <p class="mb-4">Para un(a):</p>
    <ul class="list-disc list-inside flex flex-col gap-2">
      <li>
        Superficie total de
        <span class="bg-highlight py-1 px-2 rounded-sm">{{ calculatorStore.wallsArea }} m2</span>
      </li>
      <li>
        Grosor de junta de mortero de
        <span class="bg-highlight py-1 px-2 rounded-sm">
          {{ calculatorStore.mortar.width * 1000 }} mm
        </span>
      </li>
      <li>
        Cantidad de mezcla de mortero
        <span class="bg-highlight py-1 px-2 rounded-sm">
          {{ calculatorStore.mortarVolume.toFixed(5) }} [m3]
        </span>
      </li>
      <li>
        Cantidad de mortero seco
        <span class="bg-highlight py-1 px-2 rounded-sm">
          {{ calculatorStore.mortarDryVolume.toFixed(5) }} [m3]
        </span>
      </li>
    </ul>

    <p class="text-color font-medium my-4">Se requieren:</p>
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
          {{ calculatorStore.brick.length * 100 }} x
          {{ (calculatorStore.brick.height * 100).toFixed(1) }} x
          {{ calculatorStore.brick.width * 100 }} (cm)
        </p>
      </template>
    </Card>
    <Card
      class="max-w-xl mx-auto !shadow-2xl print:!shadow-none print:!border overflow-hidden mt-8">
      <template #content>
        <div class="flex justify-between gap-8">
          <div class="flex flex-col gap-1">
            <span class="text-surface-500 dark:text-surface-400 text-sm">Cemento</span>
            <span class="font-bold text-lg">{{ calculatorStore.cementNeededBags }} Bolsas</span>
            <p>{{ calculatorStore.cementNeededWeight }} [kg]</p>
          </div>
          <span class="w-8 h-8 rounded-full inline-flex justify-center items-center text-center">
            <TablerPaperBag />
          </span>
        </div>
      </template>
    </Card>
    <Card
      class="max-w-xl mx-auto !shadow-2xl print:!shadow-none print:!border overflow-hidden mt-8">
      <template #content>
        <div class="flex justify-between gap-8">
          <div class="flex flex-col gap-1">
            <span class="text-surface-500 dark:text-surface-400 text-sm">Arena</span>
            <span class="font-bold text-lg">{{ calculatorStore.sandNeededVolume }} [m3]</span>
          </div>
          <span class="w-8 h-8 rounded-full inline-flex justify-center items-center text-center">
            <HumbleiconsBox />
          </span>
        </div>
      </template>
    </Card>
    <Card
      class="max-w-xl mx-auto !shadow-2xl print:!shadow-none print:!border overflow-hidden mt-8">
      <template #content>
        <div class="flex justify-between gap-8">
          <div class="flex flex-col gap-1">
            <span class="text-surface-500 dark:text-surface-400 text-sm">Agua</span>
            <span class="font-bold text-lg">{{ calculatorStore.waterNeeded }} [L]</span>
          </div>
          <span class="w-8 h-8 rounded-full inline-flex justify-center items-center text-center">
            <IcOutlineWaterDrop />
          </span>
        </div>
      </template>
    </Card>
    <Button label="Solicitar Cotización" class="mt-8 print:!hidden" @click="quotation = true" />
    <div class="text-xs text-muted-color mt-8 flex flex-col gap-2">
      <p>
        - Los resultados son aproximados y válidos para información obtenida en distintas
        especificaciones técnicas bolivianas.
      </p>
      <p>
        - Las estimaciones no incluyen posibles pérdidas de materiales, por lo cual debe considerar
        un margen.
      </p>
      <p>
        - No nos hacemos responsables por la exactitud de la dosificación de mortero, ya que ésta
        depende de muchos factores especiales.
      </p>
    </div>

    <Dialog v-model:visible="quotation" header="Formulario de Cotización"></Dialog>
  </div>
</template>

<style lang="scss" scoped></style>
