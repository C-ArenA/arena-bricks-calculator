<script setup lang="ts">
import CardSelect from '../molecules/CardSelect.vue'
import { type Brick } from '@/types/materials'
import { onMounted, ref } from 'vue';

const selectedBrick = defineModel<Brick>()
const bricks = ref<Brick[]>([])
onMounted(() => {
  fetch(import.meta.env.VITE_API_URL + '/v1/produced-bricks').then((response) => {
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
