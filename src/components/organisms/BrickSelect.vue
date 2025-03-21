<script setup lang="ts">
import CardSelect from '../molecules/CardSelect.vue'
import { type Brick } from '@/types/materials'
import { onMounted, ref } from 'vue';

const selectedBrick = defineModel<Brick>()
const bricks = ref<Brick[]>([])
onMounted(() => {
  fetch('http://localhost:8000/api/v1/bricks').then((response) => {
    if (response.ok) {
      response.json().then((data) => {
        bricks.value = data["data"]
      })
    }
  })
})
</script>

<template>
  <CardSelect
    v-model="selectedBrick"
    :options="bricks"
    titleKey="name"
    descriptionKey="description">
    <template #subtitle="{ option }">
      L: {{ option.length }} x H: {{ option.height }} x W: {{ option.width}}
    </template>
  </CardSelect>
</template>

<style lang="scss" scoped></style>
