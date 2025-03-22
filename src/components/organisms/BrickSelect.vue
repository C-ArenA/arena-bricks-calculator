<script setup lang="ts">
import CardSelect from '../molecules/CardSelect.vue'
import { type Brick } from '@/types/materials'
import { onMounted, ref } from 'vue'
import { useProducedBrickStore } from '@/stores/producedBrick'

const producedBrickStore = useProducedBrickStore()
const selectedBrick = defineModel<Brick>()
onMounted(() => {
  producedBrickStore.fetchAll()
})
</script>

<template>
  <CardSelect
    v-model="selectedBrick"
    :options="producedBrickStore.producedBricks"
    titleKey="name"
    descriptionKey="description">
    <template #subtitle="{ option }">
      L: {{ option.length }} x H: {{ option.height }} x W: {{ option.width }}
    </template>
  </CardSelect>
</template>

<style lang="scss" scoped></style>
