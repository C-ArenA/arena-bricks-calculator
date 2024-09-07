<template>
  <div class="relative">
    <div class="absolute h-full start-0 top-0 flex items-center ps-3.5 pointer-events-none">
      <FluentMdl2FitWidth />
    </div>
    <input
      v-model="value"
      type="number"
      class="block p-2.5 w-full z-20 ps-10 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-e-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
      :class="$attrs.class"
      placeholder="Ancho"
      required
    />
  </div>
</template>

<script setup lang="ts">
import FluentMdl2FitWidth from '~icons/fluent-mdl2/fit-width'
const value = defineModel()
</script>

<style scoped></style>
