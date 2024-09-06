<script setup lang="ts">
import { RouterView } from 'vue-router'
import Menubar from 'primevue/menubar'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import type { MenuItem } from 'primevue/menuitem'

const router = useRouter()
const menuItems = ref<MenuItem[]>([
  {
    label: 'Home',
    icon: 'pi pi-home',
    command: () => router.push('/')
  },
  {
    label: 'Calculadora',
    icon: 'pi pi-calculator',
    command: () => router.push('/calculator')
  }
])
</script>

<template>
  <header>
    <Menubar class="m-2" :model="menuItems" />
  </header>
  <main class="px-3">
    <RouterView />
  </main>
</template>

<style scoped></style>
