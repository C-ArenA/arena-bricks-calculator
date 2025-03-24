<script setup lang="ts">
import { useBrickStore } from '@/stores/brick'
import type { Brick } from '@/types/materials'
import { ref } from 'vue'

const brickStore = useBrickStore()
const newBrick = ref<Brick>({
  id: 0,
  name: '',
  description: '',
  height: 0,
  width: 0,
  length: 0,
  is_produced: false,
})
const createBrick = () => {
  brickStore.add(newBrick.value)
}
</script>

<template>
  <div>
    <div class="flex items-center gap-4 mb-4">
      <label for="brick-name" class="font-semibold w-24">Nombre de Ladrillo</label>
      <InputText id="brick-name" class="flex-auto" v-model="newBrick.name" autocomplete="off" />
    </div>
    <div class="flex items-center gap-4 mb-4">
      <label for="brick-description" class="font-semibold w-24">Descripción</label>
      <Textarea
        id="brick-description"
        v-model="newBrick.description"
        rows="4"
        class="flex-auto"
        cols="30"
        autocomplete="off" />
    </div>
    <div class="flex items-center gap-4 mb-4">
      <label for="brick-length" class="font-semibold w-24">Largo (mm)</label>
      <InputNumber id="brick-length" v-model="newBrick.length" fluid :useGrouping="false" :min="100" :max="500" />
    </div>
    <div class="flex items-center gap-4 mb-4">
      <label for="brick-height" class="font-semibold w-24">Altura (mm)</label>
      <InputNumber id="brick-height" v-model="newBrick.height" fluid :useGrouping="false" :min="50" :max="300" />
    </div>
    <div class="flex items-center gap-4 mb-4">
      <label for="brick-width" class="font-semibold w-24">Ancho (mm)</label>
      <InputNumber id="brick-width" v-model="newBrick.width" fluid :useGrouping="false" :min="30" :max="200" />
    </div>

    <div class="flex justify-end gap-2">
      <Button type="button" label="Save" @click="createBrick"></Button>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
