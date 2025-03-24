<script setup lang="ts">
import { useBrickStore } from '@/stores/brick';

const brickStore = useBrickStore()
</script>

<template>
  <div>
    <span class="text-surface-500 dark:text-surface-400 block mb-8">
        Ver detalles del ladrillo {{ brickStore.selectedBrick?.name }}
      </span>
      <div class=" mb-4">
        <h1 class="mb-2 text-sm font-semibold">Nombre</h1>
        <p>{{ brickStore.selectedBrick?.name }}</p>
      </div>
      <div class=" mb-4">
        <h1 class="mb-2 text-sm font-semibold">Descripción</h1>
        <p>{{ brickStore.selectedBrick?.description }}</p>
      </div>
      <div class=" mb-4">
        <h1 class="mb-2 text-sm font-semibold">Alto</h1>
        <p>{{ brickStore.selectedBrick?.height }} mm</p>
      </div>
      <div class=" mb-4">
        <h1 class="mb-2 text-sm font-semibold">Ancho</h1>
        <p>{{ brickStore.selectedBrick?.width }} mm</p>
      </div>
      <div class=" mb-4">
        <h1 class="mb-2 text-sm font-semibold">Largo</h1>
        <p>{{ brickStore.selectedBrick?.length }} mm</p>
      </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
