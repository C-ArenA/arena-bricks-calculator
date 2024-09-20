<script setup lang="ts">
import WallForm from './WallForm.vue'
import { type Wall } from '@/types/walls'
import { defaultWall } from '@/defaults'

const walls = defineModel<Wall[]>({
  required: true,
})

const addWall = () => walls.value.push({ ...defaultWall })
</script>

<template>
  <div>
    <WallForm
      v-for="(wall, index) in walls"
      :key="index"
      :wallId="(index + 1).toString()"
      v-model="walls[index]"
      @delete-wall="() => walls.splice(index, 1)" />
    <div class="flex justify-center mt-6">
      <Button icon="pi pi-plus" severity="secondary" iconPos="bottom" rounded @click="addWall" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
