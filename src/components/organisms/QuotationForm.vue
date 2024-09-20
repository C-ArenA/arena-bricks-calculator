<script setup lang="ts">
import { ref } from 'vue';
import { useCalculatorStore } from '@/stores/calculator';
const calculatorStore = useCalculatorStore()
const emit = defineEmits(['sentQuotation'])
const name = ref('')
const email = ref('')
const phone = ref('')
const address = ref('')
const sendQuotation = () => {
  const message = `Hola!!! me llamo ${name.value} (${email.value}) y vengo de usar la calculadora de ladrillos ArenA.

*Deseo Solicitar una cotización (2352) con las siguientes características:*

  🧱 Cantidad de ladrillos: ${calculatorStore.totalBricksNeeded} piezas de ${calculatorStore.brick.name}
  🗣 Cantidad de cemento: ${calculatorStore.cementNeededBags} bolsa(s)
  🏜 Cantidad de arena: ${calculatorStore.sandNeededVolume.toFixed(5)} [m3]
  🚩 Dirección: ${address.value}
  `
  emit('sentQuotation')
  window.open('https://api.whatsapp.com/send/?phone=59173745255&text=' + encodeURIComponent(message))
}
</script>

<template>
  <form novalidate @submit.prevent="sendQuotation">
    <div class="flex items-center gap-4 mb-4">
      <label for="quotation-name" class="font-semibold w-24">Nombre</label>
      <InputText v-model="name" id="quotation-name" type="text" autocomplete="off" class="flex-auto" />
    </div>
    <div class="flex items-center gap-4 mb-4">
      <label for="quotation-name" class="font-semibold w-24">Correo Electrónico</label>
      <InputText v-model="email" id="quotation-name" type="text" autocomplete="off" class="flex-auto" />
    </div>
    <div class="flex items-center gap-4 mb-4">
      <label for="quotation-name" class="font-semibold w-24">Celular</label>
      <InputText v-model="phone" id="quotation-name" type="text" autocomplete="off" class="flex-auto" />
    </div>
    <div class="flex items-center gap-4 mb-4">
      <label for="quotation-name" class="font-semibold w-24">Su Dirección</label>
      <InputText v-model="address" id="quotation-name" type="text" autocomplete="off" class="flex-auto" />
    </div>
    <Button type="submit" label="Solicitar Cotización" class="mt-8" />
  </form>
</template>

<style lang="scss" scoped></style>
