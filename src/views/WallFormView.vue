<template>
  <div>
    Detalles de los muros
    <form>
      <div class="max-w-[18rem] mx-auto">
        <label for="widthInput" class="mb-16 text-sm font-medium text-gray-900 dark:text-white"
          >Ancho del muro</label
        >
        <div class="flex mt-4">
          <NumberInput id="widthInput" v-model="wall.width" class="rounded-e-none border-e-0" />
          <InputDropdown :items="units" :defaultItem="units[0]" class="h-full rounded-s-none" />
        </div>
        <label for="currency-input" class="mb-16 text-sm font-medium text-gray-900 dark:text-white"
          >Altura del Muro</label
        >
        <div class="flex mt-4">
          <NumberInput v-model="wall.height" class="rounded-e-none border-e-0" />
          <InputDropdown :items="units" :defaultItem="units[0]" class="h-full rounded-s-none" />
        </div>
      </div>
      <button
        type="button"
        @click="console.log(wall)"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <MdiArrowRightBold />
        <span class="sr-only">Icon description</span>
      </button>
    </form>
    <p>El area de tu muro es {{ wall.width * wall.height }}</p>
    <InputDropdown :items="units" :default="units[0]" class="w-28" />
  </div>
</template>

<script setup lang="ts">
import NumberInput from '@/components/NumberInput.vue'
import InputDropdown from '@/components/InputDropdown.vue'
import MdiArrowRightBold from 'virtual:icons/mdi/arrow-right-bold'
import { ref } from 'vue'

interface Wall {
  width: number
  height: number
}

const units = [
  { id: 1, name: 'm', relationToDefault: 1 },
  { id: 2, name: 'cm', relationToDefault: 0.01 },
  { id: 3, name: 'inch', relationToDefault: 0.0254 },
  { id: 4, name: 'mm', relationToDefault: 0.001 }
]

const wall = ref<Wall>({
  width: 10,
  height: 0
})

console.log('componente')
</script>

<style scoped></style>
