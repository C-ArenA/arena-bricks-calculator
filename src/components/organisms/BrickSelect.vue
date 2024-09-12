<script setup lang="ts">
import CardSelect from '../molecules/CardSelect.vue'
import { bricks } from '@/data/materials'
import { type Brick } from '@/types/materials'

const selectedBrick = defineModel<Brick>()
</script>

<template>
  <CardSelect
    v-model="selectedBrick"
    :options="bricks"
    titleKey="name"
    descriptionKey="description">
    <template #subtitle="{ option }">
      L: {{ option.length * 1000 }} x H: {{ option.height * 1000 }} x W: {{ option.width * 1000 }}
    </template>
  </CardSelect>
</template>

<style lang="scss" scoped></style>
