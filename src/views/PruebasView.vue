<script setup lang="ts">
import MaterialSymbolsWidth from '~icons/material-symbols/width'
import QuantityInput from '@/components/QuantityInput.vue'
import { dimensions } from '@/data/units';
import type { DimensionString } from '@/types/quantities';
import { ref } from 'vue';
const valorEnMetros = ref(0);
const dimensionName = ref<DimensionString>('length')
</script>

<template>
  <div>
    <h1 class="text-4xl mb-16 mx-auto mt-8 font-semibold text-center">PRUEBASSSSS1!!</h1>
    <section class="max-w-4xl mx-auto">
      <QuantityInput v-model="valorEnMetros" :dimensionName="dimensionName" inputLabel="Metros" inputId="metros" :iconComponent="MaterialSymbolsWidth" />
      <p>Valor en metros: </p>
      <p class="text-6xl text-center">{{ valorEnMetros }} [{{ dimensions.find(d => d.name === dimensionName)?.baseUnit?.symbol }}]</p>
    </section>
  </div>
</template>

<style lang="scss" scoped></style>