<script setup lang="ts">
import { useThemeStore } from '@/stores/theme'
const themeStore = useThemeStore()
</script>

<template>
  <ToggleButton v-model="themeStore.isDarkMode" onLabel="🌛" offLabel="🌞" class="bg-transparent" />
</template>

<style lang="scss" scoped></style>
